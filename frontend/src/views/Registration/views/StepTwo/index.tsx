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
import Input from '../../../../components/Input';
import { useNavigation } from '@react-navigation/native';
import api from '../../../../services/api';
import { AxiosResponse, AxiosError } from 'axios';
import { EmotionalReaction } from '../../../../models/emotionalReaction';

const RegistrationStepTwo = (props: any) => {

    const { id } = props.route.params;

    const [formInput, setFormInput] = useState<EmotionalReaction>();

    const loadEmotionalReaction = async () => {
        try {
            const response = await api.get(`reactions/${id}`);
            const emotionalReaction: EmotionalReaction  = response?.data['emotionalReaction'];
            setFormInput({ ...formInput, ...emotionalReaction });
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        loadEmotionalReaction();
    }, []);

    const handleConfirmation = () => {
        api.put(`reactions/${id}`, formInput) 
            .then((res: AxiosResponse) => navigateToNextStep())
            .catch((err: AxiosError) => console.log(err.message));
    }

    const alertRef = useRef<any>();

    const navigation = useNavigation();

    const navigateToNextStep = () => {
        navigation.navigate('StepThree', { id });
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
                        value={formInput?.when_does_tb_usually_occur}
                        onChangeText={(text) => setFormInput({...formInput, when_does_tb_usually_occur: text})}
                    />

                    <SectionTtile>
                        Onde isso ocorre?
                    </SectionTtile>
                    <Input
                        placeholder="Digite aqui seus pensamentos"
                        selectionColor="#91919F"
                        multiline
                        value={formInput?.where_does_tb_occur}
                        onChangeText={(text) => setFormInput({...formInput, where_does_tb_occur: text})}
                    />

                    <SectionTtile>
                        Quem está presente quando isso ocorre?
                    </SectionTtile>
                    <Input
                        placeholder="Digite aqui seus pensamentos"
                        selectionColor="#91919F"
                        multiline
                        value={formInput?.who_is_present_when_tb_occurs}
                        onChangeText={(text) => setFormInput({...formInput, who_is_present_when_tb_occurs: text})}
                    />
                    <SectionTtile>
                        O que aconteceu antes disso?
                    </SectionTtile>
                    <Input
                        placeholder="Digite aqui seus pensamentos"
                        selectionColor="#91919F"
                        multiline
                        value={formInput?.which_activitie_precede_tb}
                        onChangeText={(text) => setFormInput({...formInput, which_activitie_precede_tb: text})}
                    />
                    <SectionTtile>
                        O que as outras pessoas dizem ou fazem antes disso acontecer?
                    </SectionTtile>
                    <Input
                        placeholder="Digite aqui seus pensamentos"
                        selectionColor="#91919F"
                        multiline
                        value={formInput?.wd_other_people_sod_before_tb}
                        onChangeText={(text) => setFormInput({...formInput, wd_other_people_sod_before_tb: text})}
                    />

                    <SectionTtile>
                        Você se envolve em algum outro comportamento antes disso acontecer?
                    </SectionTtile>
                    <Input
                        placeholder="Digite aqui seus pensamentos"
                        selectionColor="#91919F"
                        multiline
                        value={formInput?.do_you_engage_other_behavior_before_tb_occurs}
                        onChangeText={(text) => setFormInput({...formInput, do_you_engage_other_behavior_before_tb_occurs: text})}
                    />

                    <ContainerButton>
                        <Button color="#E1948B" onPress={() => navigation.goBack()}>
                            <Feather name="chevron-left" color="#FCFCFF" size={Dimensions.get('window').width * 0.05} />
                            <TextButton>
                                Anterior
                            </TextButton>
                        </Button>
                        <Button color="#61C08C" onPress={() => alertRef.current.show()}>
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
                onConfirm={handleConfirmation}
            />
        </Container>
    )
}

export default RegistrationStepTwo;