import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    ScrollView
} from 'react-native';
import { Dimensions } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const SCREEN_WIDTH = Dimensions.get("window").width;
const iconColor = '#212325';
const iconSize = SCREEN_WIDTH * 0.075;

export default function AcompanharComportamento({ navigation, route }: any) {

    const { isProfissional } = route.params;

    const [questao1, onChangeQuestao1] = useState("");
    const [questao2, onChangeQuestao2] = useState("");
    const [questao3, onChangeQuestao3] = useState("");
    const [telefone, onChangeTelefone] = useState("");
    const [email, onChangeEmail] = useState("");
    const [endereco, onChangeEndereco] = useState("");

    return (
        <ScrollView style={styles.container}>
            <TouchableOpacity style={styles.goBack} onPress={() => navigation.goBack()}>
                <MaterialCommunityIcons style={styles.goBackIcon} name="chevron-left" color={iconColor} size={iconSize} />
                <Text style={styles.goBackText}>Voltar</Text>
            </TouchableOpacity>
            <View style={styles.titleContainer} >
                <Text style={styles.titleText}>Comportamento</Text>
            </View>
            <View style={styles.inputsContainer}>
                <View style={styles.inputContainer}>
                    <View style={styles.questionContainer}>
                        <Text style={styles.questionText}>O que o paciente sentiu.</Text>
                    </View>
                    <TextInput style={styles.input}
                        onChangeText={onChangeQuestao1}
                        value={questao1}
                        placeholder='Felicidade, alívio.'
                        editable={false}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <View style={styles.questionContainer}>
                        <Text style={styles.questionText}>O que o paciente pensou.</Text>
                    </View>
                    <TextInput style={styles.input}
                        onChangeText={onChangeQuestao2}
                        value={questao2}
                        placeholder='Pensei em quanto esperei por este momento.'
                        editable={false}

                    />
                </View>
                <View style={styles.inputContainer}>
                    <View style={styles.questionContainer}>
                        <Text style={styles.questionText}>O que o paciente fez.</Text>
                    </View>
                    <TextInput style={styles.input}
                        onChangeText={onChangeQuestao3}
                        value={questao3}
                        placeholder='Liguei para a minha mãe para dar a notícia.'
                        editable={false}

                    />
                </View>
                <TouchableOpacity style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>Salvar Alterações</Text>
                </TouchableOpacity>
            </View>
        </ScrollView >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FCFCFF',
        paddingHorizontal: SCREEN_WIDTH * 0.06,
    },
    titleContainer: {
        alignItems: 'center',
        marginBottom: SCREEN_WIDTH * 0.1,

    },
    titleText: {
        marginTop: SCREEN_WIDTH * 0.1,
        color: '#292B2D',
        fontSize: 25,
        fontWeight: 'bold'
    },
    questionText: {
        marginBottom: SCREEN_WIDTH * 0.05,
        color: '#292B2D',
        fontSize: 17,
        fontWeight: 'bold'
    },
    inputsContainer: {
    },
    questionContainer: {
        alignItems: 'center'
    },
    input: {
        borderColor: '#91919F',
        backgroundColor: '#FCFCFF',
        borderWidth: 1,
        borderRadius: 10,
        height: SCREEN_WIDTH * 0.3,
        elevation: 5,
        paddingHorizontal: SCREEN_WIDTH * 0.02,
        fontSize: 14,
        color: '#91919F'
    },
    inputContainer: {
        justifyContent: 'space-between',
        marginBottom: SCREEN_WIDTH * 0.07,
    },
    buttonContainer: {
        backgroundColor: '#E1948B',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        height: SCREEN_WIDTH * 0.13,
        marginTop: SCREEN_WIDTH * 0.05,

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
