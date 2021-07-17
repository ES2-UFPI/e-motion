import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    ActivityIndicator
} from 'react-native';
import { Dimensions } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { AxiosError, AxiosResponse } from 'axios';
import { useDispatch } from 'react-redux';
import { updateUser } from '../../store/actions';
import api from '../../services/api';

const SCREEN_WIDTH = Dimensions.get("window").width;
const iconColor = '#212325';
const iconSize = SCREEN_WIDTH * 0.075;

export default function EditProfile({ navigation, route }: any) {

    const { user } = route.params;

    const [loading, setLoading] = useState(false);

    //Todo usuário tem
    const [name, onChangeNome] = useState(user.name);
    const [nickname, onChangeNickname] = useState(user.nickname);
    const [email, onChangeEmail] = useState(user.email);

    //Apenas cliente tem
    const [telefone, onChangeTelefone] = useState(!(user.type === 1) ? user.phone : "");

    //Apenas profissional tem speciality crm_crp
    const [speciality, onChangeSpeciality] = useState(user.type === 1 ? user.speciality : "");
    const [crm_crp, onChangeCrm_crp] = useState(user.type === 1 ? user.crm_crp : "");

    const dispatch = useDispatch();

    async function updateUserInformation() {
        try {
            setLoading(true);
            const data = {
                name: name,
                nickname: nickname,
                crm_crp: crm_crp,
                speciality: speciality,
            }
            api.put('professionals', data)
                .then((res: AxiosResponse) => {
                    dispatch(updateUser({
                         name: data.name,
                         nickname: data.nickname,
                         speciality: data.speciality,
                         crm_crp: data.crm_crp,
                     }));
                    navigation.goBack()
                })
                .catch((err: AxiosError) => console.log(err.message));

            setLoading(false);
        }
        catch (error) {
            console.log(error);
            setLoading(false);
        }
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.goBack} onPress={() => navigation.goBack()}>
                <MaterialCommunityIcons style={styles.goBackIcon} name="chevron-left" color={iconColor} size={iconSize} />
                <Text style={styles.goBackText}>Voltar</Text>
            </TouchableOpacity>
            <View style={styles.titleContainer} >
                <Text style={styles.text}>{user.type === 1 ? 'Perfil Profissional' : 'Editar Perfil'}</Text>
            </View>
            <View style={styles.inputsContainer}>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.input}
                        onChangeText={onChangeEmail}
                        value={email}
                        placeholder='Email'
                        editable={false}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.input}
                        onChangeText={onChangeNome}
                        value={name}
                        placeholder='Nome'
                    />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.input}
                        onChangeText={onChangeNickname}
                        value={nickname}
                        placeholder='Apelido'
                    />
                </View>
                {user.type === 1 ?
                    <View>
                        <View style={styles.inputContainer}>
                            <TextInput style={styles.input}
                                onChangeText={onChangeSpeciality}
                                value={speciality}
                                placeholder='Especialidade'
                            />
                        </View>
                        <View style={styles.inputContainer}>
                            <TextInput style={styles.input}
                                onChangeText={onChangeCrm_crp}
                                value={crm_crp}
                                placeholder='CRM/CRP'
                            />
                        </View>
                    </View>
                    :
                    <View style={styles.inputContainer}>
                        <TextInput style={styles.input}
                            onChangeText={onChangeTelefone}
                            value={telefone}
                            placeholder='Telefone'
                            keyboardType='numeric'
                        />
                    </View>}
                <TouchableOpacity style={styles.buttonContainer} onPress={() => updateUserInformation()} >
                    {loading ? <ActivityIndicator size={SCREEN_WIDTH * 0.1} color="#fad2d2" /> : <Text style={styles.buttonText}>Salvar Alterações</Text>}
                </TouchableOpacity>
            </View >
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FCFCFF',
        paddingHorizontal: SCREEN_WIDTH * 0.06,
    },
    titleContainer: {
        // marginTop: SCREEN_WIDTH * 0.15,
        alignItems: 'center'
    },
    text: {
        marginTop: SCREEN_WIDTH * 0.1,
        color: '#161719',
        fontSize: 20,
        fontWeight: 'bold'
    },
    inputsContainer: {
        marginTop: SCREEN_WIDTH * 0.085,

    },
    input: {
        borderColor: '#91919F',
        backgroundColor: '#FCFCFF',
        borderWidth: 1,
        borderRadius: 10,
        height: SCREEN_WIDTH * 0.13,
        elevation: 5,
        paddingHorizontal: SCREEN_WIDTH * 0.02,
        fontSize: 14,
        color: '#91919F'
    },
    inputContainer: {
        justifyContent: 'space-between',
        marginBottom: SCREEN_WIDTH * 0.08,
    },
    buttonContainer: {
        backgroundColor: '#E1948B',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        height: SCREEN_WIDTH * 0.13,
        marginTop: SCREEN_WIDTH * 0.12,

    },
    buttonText: {
        color: '#FCFCFF',
        fontSize: 14
    },
    optionContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: SCREEN_WIDTH * 0.01,
    },
    optionIcon: {
        textAlign: 'center'
    },
    goBackText: {
        color: '#000000',
        fontSize: 16,
        // borderWidth: 1,
        borderColor: 'red',
        alignSelf: 'center',
        paddingLeft: 10,
    },
    goBack: {
        marginTop: SCREEN_WIDTH * 0.15,
        flexDirection: 'row',
        // borderWidth: 1,
        borderColor: 'blue',
    },
    goBackIcon: {
        textAlign: 'center',
        // borderWidth: 1,
        borderColor: 'black',

    }
});
