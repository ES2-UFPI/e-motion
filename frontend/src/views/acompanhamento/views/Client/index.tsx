import React from 'react';
import { 
    BackGroundPage, 
    RegistersContainer, 
    Row, 
    RegistersBaseText, 
    GoBackText, 
    HeaderContainer,
    GoBackContainer 
} from './styles';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Client = () => {

    const navigation = useNavigation();

    return (
        <BackGroundPage>
            <HeaderContainer>
                <GoBackContainer>
                    <Icon name="chevron-left" style={{color: '#FCFCFF'}} onPress={() => navigation.goBack()}/><GoBackText onPress={() => navigation.goBack()}>Voltar</GoBackText>
                </GoBackContainer>
            </HeaderContainer>
            <RegistersContainer>
                <Row>
                    <RegistersBaseText style={{fontSize: 14, lineHeight: 18, color: '#292B2D'}}>Registros</RegistersBaseText>
                    <RegistersBaseText style={{fontSize: 12, lineHeight: 14, color: '#91919F'}}>Total 10</RegistersBaseText>
                </Row>
            </RegistersContainer>
        </BackGroundPage>
    )
}

export default Client;