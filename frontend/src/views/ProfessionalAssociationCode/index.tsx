import React, { useEffect, useState } from 'react';
import { 
    Container,
    GoBackContainer,
    GoBackText,
    GoBackButton,
    TextWarning,
    CodeContainer,
    GenerateButtonText,
    GenerateButton,
    CodeText,
    CodeNumbersContainer,
    CodeNumber,
    ContainerAll
} from './styles';
import { Dimensions,ActivityIndicator } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Clipboard from 'expo-clipboard';

import api from '../../services/api'


export default function ProfessionalAssociationCode({ navigation }: any) {
    const iconColor = '#212325';
    const SCREEN_WIDTH = Dimensions.get("window").width;
    const iconSize = SCREEN_WIDTH * 0.075;
    const [code, setCode] = useState<string[]|[]>([])
    const [loading, setLoading] = useState<boolean>(false)

    function copyCOodeToClipboard() {

        Clipboard.setString("Este é o meu código de profissional no e-motion: "+code.join("") + "." + "\n\nUse ele para se associar a mim e permitir que lhe acompanhe pelo app.");

    }

    function goBack( ){
        navigation.goBack()
   }

    function genereteNewCode(){
        setLoading(true);
        const code_chars = [] as string[];
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;

        while(code_chars.length < 5) {
            const newChar =  characters.charAt(Math.floor(Math.random() * charactersLength)).toUpperCase();

            if(code_chars.indexOf(newChar) == -1 ){
                code_chars.push(newChar) ;  
            }

        }

        //fazer req para atualizar o codigo no back
        setCode(code_chars);
        setLoading(false);
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

                <TextWarning>
                    Este código deve ser usado pelo seu paciente para que ele se vincule a sua conta e para que você tenha acesso aos registros
                </TextWarning>

                {(code.length > 0 || loading ) &&  

                <CodeContainer>

                {loading ?
                    <ActivityIndicator size="large" color="#fad2d2"/>
                    :
                    <CodeNumbersContainer>  
                        {code.map((number) => {
                            return (
                                <CodeNumber key={number}>
                                    <CodeText>
                                        {number}
                                    </CodeText>
                                </CodeNumber>
                            )
                        })}

                        <GoBackButton onPress={copyCOodeToClipboard}> 
                            <MaterialCommunityIcons  
                                name="content-copy" 
                                color={iconColor} 
                                size={iconSize} 
                                style={{marginLeft:10,marginBottom:5}}/>

                        </GoBackButton>
                    
                    </CodeNumbersContainer>
                }

                </CodeContainer>}

                <GenerateButton onPress={genereteNewCode}>
                <GenerateButtonText>
                    {code.length > 0 ? "Gerar novo código": "Gerar código"}
                </GenerateButtonText>
                </GenerateButton>

            </Container>
        </ContainerAll>
    );
}
