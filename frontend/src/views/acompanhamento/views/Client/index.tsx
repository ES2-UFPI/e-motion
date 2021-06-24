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
    HeaderBaseText,
    IconContainer,
    Info,
    Avatar
} from './styles';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import FeatherIcon from 'react-native-vector-icons/Feather';

const Client = () => {

    const navigation = useNavigation();
    const profilePicture = require('../../../../assets/profile.png');

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
            </RegistersContainer>
        </BackGroundPage>
    )
}

export default Client;