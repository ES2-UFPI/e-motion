import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Alert, FlatList, TouchableOpacity } from 'react-native';
import { AxiosError, AxiosResponse } from 'axios';
import {
    BackGroundPage,
    RegistersContainer,
    Row,
    Column,
    RegistersBaseText,
    GoBackText,
    HeaderContainer,
    SettingsContainer,
    ContactContainer,
    HeaderBaseText,
    IconContainer,
    Info,
    Avatar
} from './styles';
import Record_card from '../../../../components/Record_card';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import FeatherIcon from 'react-native-vector-icons/Feather';
import Alert2Options from '../../../../components/Alert2Options';
import api from '../../../../services/api';

const Client = (props: any) => {

    const params = props.route.params;
    const navigation = useNavigation();
    const profilePicture = require('../../../../assets/profile.png');

    const [modalIsVisible, setModalIsVisible] = useState<boolean>(false);

    function onPressDelete(id: string) { }
    function onPressCard() {
        navigation.navigate('AcompanharComportamento');
    }

    function unbindClient() {
        setModalIsVisible(true);
    }

    function handleUnbind() {
        try {
            api.put("clients/unbind", {id: params.id}).
                then((response: AxiosResponse) => { Alert.alert(response.data.message); navigation.goBack() }).
                catch((error: AxiosError) => Alert.alert(error.message));
        }
        catch (error) {
            console.log(error);
        }
    }

    const staticRegisters = [
        {
            id: "0",
            title: "Vi uma bela cena",
            date: "24/05/2021 às 14:30",
            completed: 50
        },
        {
            id: "1",
            title: "Me senti sozinho na faculdade",
            date: "31/04/2021 às 08:00",
            completed: 80
        },
        {
            id: "2",
            title: "Feliz com os amigos",
            date: "12/05/2021 às 20:00",
            completed: 100
        },
        {
            id: "3",
            title: "Chateado com fome",
            date: "23/06/2021 às 14:00",
            completed: 20
        }
    ]

    return (
        <BackGroundPage>
            <HeaderContainer>
                <GoBackText onPress={() => navigation.goBack()}><FontAwesomeIcon name="chevron-left" />   Voltar</GoBackText>
                <SettingsContainer>
                    <Row>
                        <Avatar source={profilePicture}></Avatar>
                        <Column>
                            <HeaderBaseText style={{ fontSize: 18, lineHeight: 21, marginLeft: 10 }}>{params.name}</HeaderBaseText>
                            <HeaderBaseText style={{ fontSize: 12, lineHeight: 16, marginLeft: 14 }}>{params.nickname}</HeaderBaseText>
                        </Column>
                    </Row>
                    <TouchableOpacity onPress={() => unbindClient()}>
                        <FeatherIcon name="settings" style={{ color: '#FCFCFF', fontSize: 24 }} />
                    </TouchableOpacity>
                </SettingsContainer>
                <ContactContainer>
                    <Row>
                        <IconContainer><FeatherIcon name="file-text" style={{ color: '#FCFCFF', fontSize: 24 }} /></IconContainer>
                        <Column>
                            <HeaderBaseText style={{ fontSize: 14, lineHeight: 14, margin: 2 }}>{params.email}</HeaderBaseText>
                            <HeaderBaseText style={{ fontSize: 12, lineHeight: 11, margin: 2 }}>{params.phone}</HeaderBaseText>
                        </Column>
                    </Row>
                    <Row>
                        <IconContainer><FeatherIcon name="link" style={{ color: '#FCFCFF', fontSize: 20 }} /></IconContainer>
                        <Column>
                            <HeaderBaseText style={{ fontSize: 14, lineHeight: 14, margin: 2 }}>Consultório Virtual</HeaderBaseText>
                            <HeaderBaseText style={{ fontSize: 12, lineHeight: 11, margin: 2 }}>Ter/Qui 14:30h</HeaderBaseText>
                        </Column>
                    </Row>
                </ContactContainer>
            </HeaderContainer>
            <RegistersContainer>
                <Info>
                    <RegistersBaseText style={{ fontSize: 14, lineHeight: 18, fontWeight: 'normal', color: '#292B2D' }}>Registros</RegistersBaseText>
                    <RegistersBaseText style={{ fontSize: 11, lineHeight: 14, fontWeight: 'bold', color: '#91919F' }}>Total 10</RegistersBaseText>
                </Info>
                <FlatList
                    data={staticRegisters}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) =>
                        <Record_card
                            id={item.id}
                            title={item.title}
                            date={item.date}
                            completed={item.completed}
                            onPressDelete={onPressDelete}
                            onPress={onPressCard}
                        />
                    }
                    horizontal={false}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{
                        paddingHorizontal: 30,
                    }}
                />
            </RegistersContainer>
            <Alert2Options
                visible={modalIsVisible}
                close={() => setModalIsVisible(false)}
                onConfirm={handleUnbind}
                title={"Atenção!"}
                content="Você tem certeza de que deseja desvincular este paciente?"
            />
        </BackGroundPage>
    )
}

export default Client;