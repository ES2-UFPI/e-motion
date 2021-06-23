import React, { useRef, useState } from 'react';
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
import api from '../../../../services/api';
import { AxiosError, AxiosResponse } from 'axios';

interface Form {
    title?: string
    emotions?: string
    what_did_you_do?: string
    what_did_you_think?: string
}

const RegistrationStepZero = (props: any) => {

    const { id } = props.route.params;

    const [formInput, setFormInput] = useState<Form>();

    const checkboxGroupRef = useRef<any>();

    const getEmotions = (): string => {
        return checkboxGroupRef?.current?.getValues() || '';
    }

    const handleConfirmation = () => {

        const emotions = getEmotions();

        const data = {...formInput, emotions};

        api.post(`reactions/update/${id}`, data) 
            .then((res: AxiosResponse) => {console.log(res.data.message); navigateToNextStep()})
            .catch((err: AxiosError) => console.log(err.message));
    }

    const alertRef = useRef<any>();

    const navigation = useNavigation();

    const navigateToNextStep = () => {
        navigation.navigate('StepTwo', { id });
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
                        value={formInput?.title}
                        onChangeText={(text) => setFormInput({...formInput, title: text})}
                    />
                    <SectionTtile>
                        O que você sentiu?
                    </SectionTtile>
                    <CheckBoxGroup ref={checkboxGroupRef} sentimentos={sentimentos} />
                    <SectionTtile>
                        O que você pensou?
                    </SectionTtile>
                    <Input
                        placeholder="Digite aqui seus pensamentos"
                        selectionColor="#91919F"
                        multiline={true}
                        numberOfLines={4}
                        value={formInput?.what_did_you_think}
                        onChangeText={(text) => setFormInput({...formInput, what_did_you_think: text})}
                    />
                    <SectionTtile>
                        O que você fez?
                    </SectionTtile>
                    <Input
                        placeholder="Digite aqui seus pensamentos"
                        selectionColor="#91919F"
                        multiline={true}
                        value={formInput?.what_did_you_do}
                        onChangeText={(text) => setFormInput({...formInput, what_did_you_do: text})}
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
                onConfirm={handleConfirmation}
            />
        </Container>
    )
}

export default RegistrationStepZero;