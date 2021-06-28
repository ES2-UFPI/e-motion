import React, { useState } from 'react';
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
import api from '../../../../services/api';
import { AxiosError, AxiosResponse } from 'axios';
import { ActivityIndicator } from 'react-native'

const img = require('../../../../assets/alone-woman.png');

const RegistrationStepZero = () => {

    const navigation = useNavigation();

    const [loading, setLoading] = useState<boolean>(false);

    const createEmotionalReaction = (): void => {
        setLoading(true);
        api.post(`reactions/create/${'1'}`)
            .then((res: AxiosResponse) => {
                const id = res.data['id'];

                setLoading(false);
                navigateToRegistration(id);
            })
            .catch((err: AxiosError) => { setLoading(false); console.log(err.message) });
    }

    const navigateToRegistration = (id: string): void => {
        navigation.navigate('StepOne', { id });
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
                <Button onPress={createEmotionalReaction}>
                    <TextButton>
                        { loading ? <ActivityIndicator size="large" color="#FCFCFF" /> : "Vamos lá" }
                    </TextButton>
                </Button>
            </ContainerMain>
        </Container>
    )
}

export default RegistrationStepZero;