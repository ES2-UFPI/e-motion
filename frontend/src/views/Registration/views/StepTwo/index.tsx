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

const RegistrationStepTwo = () => {
    const alertRef = useRef<any>();

    const navigation = useNavigation();

    const navigateToNextStep = () => {
        navigation.navigate('RegistrationThree');
    }

    return (
        <Container>
            <Header>
                Novo registro
            </Header>
            <Flux selected={2} />
            <ScrollView>
                <ContentContainer>
                    <SectionTtile>
                        Quando isso costuma ocorrer?
                    </SectionTtile>
                    <Input
                        placeholder="Digite aqui seus pensamentos"
                        selectionColor="#91919F"
                        multiline
                    />

                    <SectionTtile>
                        Onde isso ocorre?
                    </SectionTtile>
                    <Input
                        placeholder="Digite aqui seus pensamentos"
                        selectionColor="#91919F"
                        multiline
                    />

                    <SectionTtile>
                        Quem está presente quando isso ocorre?
                    </SectionTtile>
                    <Input
                        placeholder="Digite aqui seus pensamentos"
                        selectionColor="#91919F"
                        multiline
                    />
                    <SectionTtile>
                        O que aconteceu antes disso?
                    </SectionTtile>
                    <Input
                        placeholder="Digite aqui seus pensamentos"
                        selectionColor="#91919F"
                        multiline
                    />
                    <SectionTtile>
                        O que as outras pessoas dizem ou fazem antes disso acontecer?
                    </SectionTtile>
                    <Input
                        placeholder="Digite aqui seus pensamentos"
                        selectionColor="#91919F"
                        multiline
                    />

                    <SectionTtile>
                        Você se envolve em algum outro comportamento antes disso acontecer?
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
                title="Que incrível!"
                content="Você já chegou até aqui! Estamos quase finalizando. Você consegue!"
                textButton="Vamos lá!"
                onConfirm={navigateToNextStep}
            />
        </Container>
    )
}

export default RegistrationStepTwo;