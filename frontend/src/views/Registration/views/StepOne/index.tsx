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
import CheckBoxGroup from './CheckBoxGroup';
import Input from '../../../../components/Input';
import { sentimentos } from './mock';
import { useNavigation } from '@react-navigation/native';

const RegistrationStepZero = () => {

    const alertRef = useRef<any>();

    const navigation = useNavigation();

    const navigateToNextStep = () => {
        navigation.navigate('StepTwo');
    }
    
    return (
        <Container>
            <Header>
                Novo registro
            </Header>
                <Flux selected={1} />
            <ScrollView>
                <ContentContainer>
                    <SectionTtile>
                        Como você gostaria de nomear este evento?
                    </SectionTtile>
                    <Input
                        placeholder="Digite aqui seus pensamentos"
                        selectionColor="#91919F"
                        onChangeText={() => {}}
                    />
                    <SectionTtile>
                        O que você sentiu?
                    </SectionTtile>
                    <CheckBoxGroup sentimentos={sentimentos} />
                    <SectionTtile>
                        O que você pensou?
                    </SectionTtile>
                    <Input
                        placeholder="Digite aqui seus pensamentos"
                        selectionColor="#91919F"
                        multiline={true}
                        numberOfLines={4}

                    />
                    <SectionTtile>
                        O que você fez?
                    </SectionTtile>
                    <Input
                        placeholder="Digite aqui seus pensamentos"
                        selectionColor="#91919F"
                        multiline={true}
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
                title="Muito bem!"
                content="Você já passou da primeira etapa do cadastro do registro! Faltam apenas duas etapas. Você consegue!"
                textButton="Vamos lá!"
                onConfirm={navigateToNextStep}
            />
        </Container>
    )
}

export default RegistrationStepZero;