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

const RegistrationStepThree = (props: any) => {

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
            .then((res: AxiosResponse) => navigateToHome())
            .catch((err: AxiosError) => console.log(err.message));
    }

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
                        value={formInput?.what_happens_after_tb}
                        onChangeText={(text) => setFormInput({...formInput, what_happens_after_tb: text})}
                    />

                    <SectionTtile>
                        O que você fez quando isso ocorreu?
                    </SectionTtile>
                    <Input
                        placeholder="Digite aqui seus pensamentos"
                        selectionColor="#91919F"
                        multiline
                        value={formInput?.wdyd_when_tb_occurs}
                        onChangeText={(text) => setFormInput({...formInput, wdyd_when_tb_occurs: text})}
                    />

                    <SectionTtile>
                        O que as outras pessoas fizeram quando isso ocorreu?
                    </SectionTtile>
                    <Input
                        placeholder="Digite aqui seus pensamentos"
                        selectionColor="#91919F"
                        multiline
                        value={formInput?.wd_other_people_do_when_tb_occurs}
                        onChangeText={(text) => setFormInput({...formInput, wd_other_people_do_when_tb_occurs: text})}
                    />
                    <SectionTtile>
                        O que mudou depois que isso aconteceu?
                    </SectionTtile>
                    <Input
                        placeholder="Digite aqui seus pensamentos"
                        selectionColor="#91919F"
                        multiline
                        value={formInput?.what_changes_after_tb_occurs}
                        onChangeText={(text) => setFormInput({...formInput, what_changes_after_tb_occurs: text})}
                    />
                    <SectionTtile>
                        O que você obteve depois que isso aconteceu?
                    </SectionTtile>
                    <Input
                        placeholder="Digite aqui seus pensamentos"
                        selectionColor="#91919F"
                        multiline
                        value={formInput?.wd_you_get_after_tb}
                        onChangeText={(text) => setFormInput({...formInput, wd_you_get_after_tb: text})}
                    />

                    <ContainerButton>
                        <Button color="#E1948B" onPress={() => navigation.goBack()}>
                            <Feather name="chevron-left" color="#FCFCFF" size={Dimensions.get('window').width * 0.05} />
                            <TextButton>
                                Anterior
                            </TextButton>
                        </Button>
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
                onConfirm={handleConfirmation}
            />
        </Container>
    )
}

export default RegistrationStepThree;