import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { FlatList } from 'react-native';
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

const Client = () => {

    const navigation = useNavigation();
    const profilePicture = require('../../../../assets/profile.png');

    function onPressDelete(id:string){}
    function onPressCard(){}

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
                <GoBackText onPress={() => navigation.goBack()}><FontAwesomeIcon name="chevron-left"/>   Voltar</GoBackText>
                <SettingsContainer>
                        <Row>
                            <Avatar source={profilePicture}></Avatar>
                            <Column>
                                <HeaderBaseText style={{fontSize: 18, lineHeight: 21, marginLeft: 10}}>Júlia Silva</HeaderBaseText>
                                <HeaderBaseText style={{fontSize: 12, lineHeight: 16, marginLeft: 14}}>lulu</HeaderBaseText>
                            </Column>
                        </Row>
                        <FeatherIcon name="settings" style={{color: '#FCFCFF', fontSize: 24}}/>
                </SettingsContainer>
                <ContactContainer>
                    <Row>
                        <IconContainer><FeatherIcon name="file-text" style={{color: '#FCFCFF', fontSize: 24}}/></IconContainer>
                        <Column>
                            <HeaderBaseText style={{fontSize: 14, lineHeight: 14, margin: 2}}>julia@gmail.com</HeaderBaseText>
                            <HeaderBaseText style={{fontSize: 12, lineHeight: 11, margin: 2}}>(86) 99524-3467</HeaderBaseText>
                        </Column>
                    </Row>
                    <Row>
                        <IconContainer><FeatherIcon name="link" style={{color: '#FCFCFF', fontSize: 20}}/></IconContainer>
                        <Column>
                            <HeaderBaseText style={{fontSize: 14, lineHeight: 14, margin: 2}}>Consultório Virtual</HeaderBaseText>
                            <HeaderBaseText style={{fontSize: 12, lineHeight: 11, margin: 2}}>Ter/Qui 14:30h</HeaderBaseText>
                        </Column>
                    </Row>
                </ContactContainer>
            </HeaderContainer>
            <RegistersContainer>
                <Info>
                    <RegistersBaseText style={{fontSize: 14, lineHeight: 18, fontWeight:'normal',  color: '#292B2D'}}>Registros</RegistersBaseText>
                    <RegistersBaseText style={{fontSize: 11, lineHeight: 14, fontWeight:'bold', color: '#91919F'}}>Total 10</RegistersBaseText>
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
                        paddingHorizontal:30,
                    }}
                />
            </RegistersContainer>
        </BackGroundPage>
    )
}

export default Client;