import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Image, IntroText, WhiteContainer, TextName, Box } from './styles';
const professional = require('../../assets/professional.png');

const HomeProfessional = () => {

    const user = useSelector((state: any) => state.user);
    return (
        <Container>
            <WhiteContainer>
                <TextName>
                    Olá, {user.nickname}
                </TextName>
                <Box>
                    <IntroText>
                        Aqui no e-motion você pode acompanhar os registros emocioanais dos seus pacientes 
                    </IntroText>
                    <Image source={professional} resizeMode="contain" />
                    <IntroText>
                        Navegue até a aba de histórico para visualizar os dados dos seus pacientes
                    </IntroText>
                </Box>
            </WhiteContainer>
        </Container>
    )
}

export default HomeProfessional;