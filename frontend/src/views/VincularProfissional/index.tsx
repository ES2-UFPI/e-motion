import React, { useContext, useState } from 'react';
import {
    Container,
    LogoContainer,
    Logo,
    WhiteContainer,
    IntroText,
    BottomText,
    Button,
    ButtonOutline,
    Image,
    TextButton,
    TextButtonOutline,
    TextError
} from './styles';
import Input from '../../components/Input';
import api from '../../services/api';
import { useNavigation } from '@react-navigation/native';
import { GlobalContext } from '../../context/GlobalSnackbar';
import { ActivityIndicator } from 'react-native-paper';

const background = require('../../assets/background.png');
const logo = require('../../assets/logo-with-name.png');
const professional = require('../../assets/professional.png')

const VincularProfissional = (props: any) => {

    const params = props.route.params;

    const navigation = useNavigation();

    const { showSuccess, showError } = useContext<any>(GlobalContext);

    const [professional_code, setProfessional_code] = useState<string>('');
    const [messageError, setMessageError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    const handleVinculacao = () => {
        if (professional_code.length < 5) {
            setMessageError('Informe um código válido');
            return;
        }
        setLoading(true);
        api.put('clients', {
            professional_code
        }, { headers: { authorization: params.accessToken } })
            .then(() => {
                showSuccess('Sua conta com vinculada com sucesso.')
                navigateToSignin();
                setLoading(false);
            })
            .catch((err) => {
                showError('Um erro ocorreu! Verifique o código informado e tente novamente.')
                setLoading(false);
            });
    }

    const navigateToSignin = () => {
        navigation.navigate('Authentication');
    }

    return (
        <Container source={background} resizeMode="contain">
            <LogoContainer>
                <Logo source={logo} resizeMode="contain" />
            </LogoContainer>
            <WhiteContainer contentContainerStyle={{
                justifyContent: 'center',
                alignItems: 'center',
                paddingBottom: 50
            }} showsVerticalScrollIndicator={false}>

                <IntroText>
                    Através do e-motion você pode optar por se vincular ao profissional respónsável pelo seu acompanhamento.
                </IntroText>
                <Image source={professional} resizeMode="contain" />
                <BottomText>
                    Insira abaixo o código do seu profissional.
                </BottomText>
                <Input onChangeText={(text: string) => {
                    setMessageError(null);
                    setProfessional_code(text);
                }} placeholder="Código do profissional" />
                {
                    messageError &&
                    <TextError>
                        {messageError}
                    </TextError>
                }
                <Button disabled={loading} onPress={handleVinculacao}>
                    {
                        loading ?
                            <ActivityIndicator color="#FCFCFF" />
                            :
                            <TextButton>
                                Vincular profissional
                            </TextButton>
                    }

                </Button>
                <ButtonOutline onPress={navigateToSignin}>
                    <TextButtonOutline>
                        Não desejo me vincular agora
                    </TextButtonOutline>
                </ButtonOutline>
            </WhiteContainer>
        </Container>
    )
}

export default VincularProfissional;