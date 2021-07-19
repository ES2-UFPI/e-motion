import React, { useRef, useState, useEffect } from 'react';
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
import { EmotionalReaction } from '../../../../models/emotionalReaction';
import { shallowEqual, useSelector } from 'react-redux';

const RegistrationStepZero = (props: any) => {

    const { id } = props.route.params;

    const [formInput, setFormInput] = useState<EmotionalReaction>();

    const emotionalReactionFromRedux = useSelector((state: any) => state.emotionalReaction, shallowEqual);

    const checkboxGroupRef = useRef<any>();

    const loadEmotionalReaction = async () => {
        try {
            const response = await api.get(`reactions/${id}`);
            const emotionalReaction: EmotionalReaction  = response?.data['emotionalReaction'];
            setFormInput({ ...formInput, ...emotionalReaction });
            checkboxGroupRef.current.setValues(emotionalReaction.emotions);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        loadEmotionalReaction();
    }, []);

    const getEmotions = (): string => {
        return checkboxGroupRef?.current?.getValues() || '';
    }

    const handleConfirmation = () => {

        const emotions = getEmotions();
        

        let data: EmotionalReaction = { ...formInput, emotions };
        console.log(data);
        if(formInput?.title?.length === 0) {
            data = {...formInput, title: '(Sem nome)'};
        }

        api.put(`reactions/${id}`, data)
            .then((res: AxiosResponse) => navigateToNextStep() )
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
                        onChangeText={(text) => setFormInput({ ...formInput, title: text })}
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
                        onChangeText={(text) => setFormInput({ ...formInput, what_did_you_think: text })}
                    />
                    <SectionTtile>
                        O que você fez?
                    </SectionTtile>
                    <Input
                        placeholder="Digite aqui seus pensamentos"
                        selectionColor="#91919F"
                        multiline={true}
                        value={formInput?.what_did_you_do}
                        onChangeText={(text) => setFormInput({ ...formInput, what_did_you_do: text })}
                    />

                    <ContainerButton>
                        <Button color="transparent"></Button>
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