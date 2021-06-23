import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text } from 'react-native';
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
    HeaderBaseText
} from './styles';
import BackIcon from 'react-native-vector-icons/FontAwesome';
import SettingsIcon from 'react-native-vector-icons/Feather';

const Client = () => {

    const navigation = useNavigation();

    return (
        <BackGroundPage>
            <HeaderContainer>
                <GoBackText onPress={() => navigation.goBack()}><BackIcon name="chevron-left"/>   Voltar</GoBackText>
                <SettingsContainer>
                        <Column>
                            <HeaderBaseText style={{fontSize: 16, lineHeight: 21}}>Júlia Silva</HeaderBaseText>
                            <HeaderBaseText style={{fontSize: 12, lineHeight: 16}}>lulu</HeaderBaseText>
                        </Column>
                        <SettingsIcon name="settings" style={{color: '#FCFCFF', fontSize: 24}}/>
                </SettingsContainer>
                <ContactContainer>
                    <Column>
                        <HeaderBaseText style={{fontSize: 12, lineHeight: 11, margin: 2}}>julia@gmail.com</HeaderBaseText>
                        <HeaderBaseText style={{fontSize: 12, lineHeight: 11, margin: 2}}>(86) 99524-3467</HeaderBaseText>
                    </Column>
                    <Column>
                        <HeaderBaseText style={{fontSize: 12, lineHeight: 18, margin: 2}}>Consultório Virtual</HeaderBaseText>
                        <HeaderBaseText style={{fontSize: 10, lineHeight: 11, margin: 2}}>Ter/Qui 14:30h</HeaderBaseText>
                    </Column>
                </ContactContainer>
            </HeaderContainer>
            <RegistersContainer>
                <Row>
                    <RegistersBaseText style={{fontSize: 14, lineHeight: 18, fontWeight:'normal',  color: '#292B2D'}}>Registros</RegistersBaseText>
                    <RegistersBaseText style={{fontSize: 11, lineHeight: 14, fontWeight:'bold', color: '#91919F'}}>Total 10</RegistersBaseText>
                </Row>
            </RegistersContainer>
        </BackGroundPage>
    )
}

export default Client;