import React, { useContext, useEffect, useState } from 'react';
import { 
    Container,
    GoBackContainer,
    GoBackText,
    GoBackButton,
    TextWarning,
    ConfirmButtonText,
    ConfirmButton,
    ContainerAll,
    Input
} from './styles';
import { Dimensions,ActivityIndicator, NativeSyntheticEvent, TextInputChangeEventData } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { GlobalContext } from '../../context/GlobalSnackbar';

import api from '../../services/api'

export default function GerenciarProfessional({ navigation }: any) {
    const iconColor = '#212325';
    const SCREEN_WIDTH = Dimensions.get("window").width;
    const iconSize = SCREEN_WIDTH * 0.075;
    const [professional_code, setCode] = useState<string>('')
    const { showSuccess, showError } = useContext<any>(GlobalContext);
    const [messageError, setMessageError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false)

    function goBack( ){
        navigation.goBack()
    }

    function onChangeCode(text:string){
        setCode(text)
    }


    function requestAssociation(){
        if (professional_code.length < 5) {
            setMessageError('Informe um código válido');
            return;
        }
        setLoading(true);
        api.put('clients', {professional_code })
            .then(() => {
                showSuccess('Sua conta com vinculada com sucesso.')
                setLoading(false);
            })
            .catch((err) => {
                showError('Um erro ocorreu! Verifique o código informado e tente novamente.')
                setLoading(false);
            });

    }

    
    return (
        <ContainerAll>
            <Container>
                <GoBackContainer>

                    <GoBackButton onPress={goBack}>

                        <MaterialCommunityIcons  name="chevron-left" color={iconColor} size={iconSize}  />
                        <GoBackText> Voltar </GoBackText>

                    </GoBackButton>

                </GoBackContainer>

                <TextWarning >
                    Insira abaixo o código do seu profissional.
                </TextWarning>

                <Input
                    onChangeText={onChangeCode}
                    value={professional_code}
                    placeholder='Código do Profissional'
                
                />

                <ConfirmButton onPress={requestAssociation}>

                    <ConfirmButtonText>
                     Vincular profissional
                    </ConfirmButtonText>

                </ConfirmButton>

            </Container>
        </ContainerAll>
    );
}