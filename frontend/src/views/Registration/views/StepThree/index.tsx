import React, { useRef } from 'react';
import {
    Container,
    ScrollView,
    ContentContainer,
    SectionTtile,
    ContainerButton,
    Button,
    TextButton
} from '../../styles';
import { Dimensions } from 'react-native';
import { Feather } from '@expo/vector-icons';
import Header from '../../../../components/Header';
import Flux from '../../../../components/Flux';
import Alert from '../../../../components/AlertConfirm';
import Input from '../../../../components/Input';
import { useNavigation } from '@react-navigation/native';

const RegistrationStepThree = () => {
    const alertRef = useRef<any>();

    const navigation = useNavigation();

    const navigateToHome = () => {
        navigation.navigate('BottomNavigation');
    }

    return (
        <Container>
            <Header>
                Novo registro
            </Header>
            <Flux selected={3} />
            <ScrollView>
                <ContentContainer>
                    <SectionTtile>
                        O que aconteceu depois disso?
                    </SectionTtile>
                    <Input
                        placeholder="Digite aqui seus pensamentos"
                        selectionColor="#91919F"
                        multiline
                    />

                    <SectionTtile>
                        O que você fez quando isso ocorreu?
                    </SectionTtile>
                    <Input
                        placeholder="Digite aqui seus pensamentos"
                        selectionColor="#91919F"
                        multiline
                    />

                    <SectionTtile>
                        O que as outras pessoas fizeram quando isso ocorreu?
                    </SectionTtile>
                    <Input
                        placeholder="Digite aqui seus pensamentos"
                        selectionColor="#91919F"
                        multiline
                    />
                    <SectionTtile>
                        O que mudou depois que isso aconteceu?
                    </SectionTtile>
                    <Input
                        placeholder="Digite aqui seus pensamentos"
                        selectionColor="#91919F"
                        multiline
                    />
                    <SectionTtile>
                        O que você obteve depois que isso aconteceu?
                    </SectionTtile>
                    <Input
                        placeholder="Digite aqui seus pensamentos"
                        selectionColor="#91919F"
                        multiline
                    />

                    <ContainerButton>
                        <Button onPress={() => alertRef.current.show()}>
                            <TextButton>
                                Continuar
                            </TextButton>
                            <Feather name="chevron-right" color="#FCFCFF" size={Dimensions.get('window').width * 0.05} />
                        </Button>
                    </ContainerButton>
                </ContentContainer>
            </ScrollView>
            <Alert
                ref={alertRef}
                title="Parabéns!"
                content="Você concluiu o cadastro de um novo registro. Nós salvamos ele no seu histórico!"
                textButton="Ok"
                onConfirm={navigateToHome}
            />
        </Container>
    )
}

export default RegistrationStepThree;