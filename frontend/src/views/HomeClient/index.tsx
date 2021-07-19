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
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';

const img = require('../../assets/home.png');

const HomeClient = () => {

    const navigation = useNavigation();

    const user = useSelector((state: any) => state.user);

    const navigateToRegistration = () => {
        navigation.navigate('Registration');
    }

    return (
        <>
        <Container>
            <ContainerMain>
                <Title>
                    Olá, {user.nickname}!
                </Title>
                <Image source={img} resizeMode="contain"/>
                <Content>
                Como você está se sentindo hoje?
                </Content>
                <Button onPress={navigateToRegistration}>
                    <TextButton>
                        Novo registro
                    </TextButton>
                </Button>
            </ContainerMain>
        </Container>
        </>
    )
}

export default HomeClient;