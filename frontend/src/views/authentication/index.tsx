import React from 'react';
import {
    Container,
    LogoContainer,
    Logo,
    IntroText,
    InputsContainer,
    InputsBox,
    InputBox,
    Input,
    CopyrightBox,
    CopyrightText,
    Button,
    TextButton,
    SignUpButton,
    SignUpText
} from './styles';
import background from '../../assets/background.png';
import logo from '../../assets/logo-with-name.png';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Dimensions, ScrollView } from 'react-native';
import { useState } from 'react';
import api from '../../services/api';
import { useNavigation } from '@react-navigation/native';

const iconSize = Dimensions.get('window').width / 16;

const Authentication = () => {

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const navigation = useNavigation();

    const nagigateToSignup = () => {
        navigation.navigate('BottomNavigation');
    }

    const handleAuthentication = () => {
        api.post('users/authentication', {
            email,
            password
        })
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }
    return (
        <Container source={background} resizeMode="contain">
            <LogoContainer>
                <Logo source={logo} resizeMode="contain" />
                <IntroText>
                    Faça login com a sua conta
                </IntroText>
            </LogoContainer>
            <ScrollView>
                <InputsContainer>
                    <InputsBox>
                        <InputBox>
                            <MaterialCommunityIcons name="email-outline" color="#E1948B" size={iconSize} />
                            <Input
                                placeholder="Email"
                                placeholderTextColor="#91919F"
                                selectionColor="#91919F"
                                value={email}
                                onChangeText={(text: string) => setEmail(text)}
                                keyboardType="email-address"
                            />
                        </InputBox>
                    </InputsBox>
                    <InputsBox>
                        <InputBox>
                            <MaterialCommunityIcons name="lock-outline" color="#E1948B" size={iconSize} />
                            <Input
                                placeholder="Senha"
                                placeholderTextColor="#91919F"
                                selectionColor="#91919F"
                                value={password}
                                onChangeText={(text: string) => setPassword(text)}
                                secureTextEntry={true}
                            />
                        </InputBox>
                    </InputsBox>
                    <Button>
                        <TextButton onPress={handleAuthentication}>
                            Entrar
                        </TextButton>
                    </Button>
                    <SignUpButton onPress={nagigateToSignup}>
                        <SignUpText>
                            Quero criar uma conta
                        </SignUpText>
                    </SignUpButton>
                    <CopyrightBox>
                        <CopyrightText>
                            Todos os direitos reservados
                        </CopyrightText>
                        <CopyrightText>
                            &copy; SemNome
                        </CopyrightText>
                    </CopyrightBox>
                </InputsContainer>
            </ScrollView>
        </Container>
    )
}

export default Authentication;