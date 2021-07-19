import React, { useRef } from 'react';
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
import Alert from '../../components/AlertConfirm';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Dimensions, ScrollView } from 'react-native';
import { useState } from 'react';
import api from '../../services/api';
import { useNavigation } from '@react-navigation/native';
import { setUser, setToken } from '../../store/actions';
import { useDispatch } from 'react-redux';
import { ActivityIndicator } from 'react-native-paper';
import { AxiosError } from 'axios';

const background = require('../../assets/background.png');
const logo = require('../../assets/logo-with-name.png');

const iconSize = Dimensions.get('window').width / 16;

const Authentication = () => {

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const [isLoading, setIsLoading] = useState<boolean>(false);

    const alertRef = useRef<any>();
    const [alertErrorMessage, setAlertErrorMessage] = useState<string>("");

    const navigation = useNavigation();

    const dispatch = useDispatch();

    const nagigateToSignup = () => {
        navigation.navigate('SignUp');
    }

    const handleAuthentication = () => {
        setIsLoading(true);
        api.post('users/authentication', {
            email,
            password
        })
            .then(res => {
                dispatch(setToken({ accessToken: res.data.userInformations.accessToken }));
                dispatch(setUser({
                    name: res.data.userInformations.name,
                    nickname: res.data.userInformations.nickname,
                    speciality: res.data.userInformations.speciality,
                    crm_crp: res.data.userInformations.crm_crp,
                    email: res.data.userInformations.email,
                    phone: res.data.userInformations.phone,
                    type: res.data.userInformations.type
                }));
                setIsLoading(false);
            })
            .catch((err: AxiosError) => { 
                setAlertErrorMessage(err.response?.data.message ? err.response?.data.message : "Verifique sua conexão com a internet!" );
                console.log(err)
                setIsLoading(false) 
                alertRef.current.show();
            });
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
                    <Button disabled={true}>
                        {
                            isLoading ? 
                                <ActivityIndicator color="#FCFCFF" />
                            :
                                <TextButton onPress={handleAuthentication}>
                                    Entrar
                                </TextButton>
                        }

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
            <Alert
                ref={alertRef}
                title="Ops, um erro"
                content={alertErrorMessage}
                textButton="Ok"
                onConfirm={()=>alertRef.current.close()}
            />
        </Container>
    )
}

export default Authentication;