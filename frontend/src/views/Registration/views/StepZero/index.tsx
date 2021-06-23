import React from 'react';
import {
    Container,
    ContainerMain,
    Title,
    Image,
    Content,
    Button,
    TextButton
} from './styles';
import Header from '../../../../components/Header';
import { useNavigation } from '@react-navigation/native';

const img = require('../../../../assets/alone-woman.png');

const RegistrationStepZero = () => {

    const navigation = useNavigation();

    const navigateToRegistration = () => {
        navigation.navigate('StepOne');
    }

    return (
        <Container>
            <Header>
                Novo registro
            </Header>
            <ContainerMain>
                <Title>
                    Lulu, vamos iniciar agora um novo registro
                </Title>
                <Image source={img} resizeMode="contain" />
                <Content>
                    Você só precisa responder às perguntas que te deixarem confortável, tudo bem?
                </Content>
                <Button onPress={navigateToRegistration}>
                    <TextButton>
                        Vamos lá
                    </TextButton>
                </Button>
            </ContainerMain>
        </Container>
    )
}

export default RegistrationStepZero;