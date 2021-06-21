import React, { useEffect, useState } from 'react';
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

import api from '../../services/api'


export default function GerenciarProfessional({ navigation }: any) {
    const iconColor = '#212325';
    const SCREEN_WIDTH = Dimensions.get("window").width;
    const iconSize = SCREEN_WIDTH * 0.075;
    const [code, setCode] = useState<string>('')
    const [loading, setLoading] = useState<boolean>(false)

    function goBack( ){
        navigation.goBack()
    }

    function onChangeCode(text:string){
        setCode(text)
    }


    function requestAssociation(){
        //setLoading(true);
        

        //fazer req para associaraao profisional

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
                    value={code}
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