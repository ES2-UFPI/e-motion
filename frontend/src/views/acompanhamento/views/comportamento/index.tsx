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
const iconSize = SCREEN_WIDTH * 0.075;

export default function AcompanharComportamento({ navigation }: any) {

    const [questao1, onChangeQuestao1] = useState("Felicidade, alívio.");
    const [questao2, onChangeQuestao2] = useState("Pensei em quanto esperei por este momento e ele finalmente aconteceu.");
    const [questao3, onChangeQuestao3] = useState("Liguei para a minha mãe para dar a notícia.");

    return (
        <View style={styles.generalView}>
            <TouchableOpacity style={styles.goBack} onPress={() => navigation.goBack()}>
                <MaterialCommunityIcons style={styles.goBackIcon} name="chevron-left" color={'#FCFCFF'} size={iconSize} />
                <Text style={styles.goBackText}>Voltar</Text>
            </TouchableOpacity>
            <ScrollView style={styles.container}>
                <View style={styles.titleContainer} >
                    <Text style={styles.titleText}>Comportamento</Text>
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.questionText}>O que o cliente sentiu.</Text>
                    <TextInput style={styles.input}
                        onChangeText={onChangeQuestao1}
                        value={questao1}
                        editable={false}
                        multiline={true}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.questionText}>O que o cliente pensou.</Text>
                    <TextInput style={styles.input}
                        onChangeText={onChangeQuestao2}
                        value={questao2}
                        editable={false}
                        multiline={true}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.questionText}>O que o cliente fez.</Text>
                    <TextInput style={styles.input}
                        onChangeText={onChangeQuestao3}
                        value={questao3}
                        editable={false}
                        multiline={true}
                    />
                </View>
                <View style={styles.navigationButton}>
                    <TouchableOpacity style={styles.continueContainer} onPress={() => navigation.navigate('AcompanharAntecedentes')}>
                        <Text style={styles.continueText}>Continuar</Text>
                        <MaterialCommunityIcons style={styles.continueIcon} name="chevron-right" color={'#FCFCFF'} size={iconSize} />
                    </TouchableOpacity>
                </View>
            </ScrollView >
        </View>

    );
}

const styles = StyleSheet.create({
    generalView: {
        flex: 1,
        backgroundColor: '#E1948B'
    },
    container: {
        backgroundColor: '#FCFCFF',
        paddingHorizontal: SCREEN_WIDTH * 0.05,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
    },
    titleContainer: {
        alignItems: 'center',
        marginBottom: SCREEN_WIDTH * 0.05,
    },
    titleText: {
        marginTop: SCREEN_WIDTH * 0.05,
        color: '#292B2D',
        fontSize: 25,
        fontWeight: 'bold'
    },
    questionText: {
        marginBottom: SCREEN_WIDTH * 0.025,
        color: '#292B2D',
        fontSize: 17,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    input: {
        borderColor: '#91919F',
        backgroundColor: '#FCFCFF',
        borderWidth: 1,
        borderRadius: 10,
        elevation: 5,
        padding: SCREEN_WIDTH * 0.03,
        fontSize: 14,
        color: '#91919F',
    },
    inputContainer: {
        marginVertical: SCREEN_WIDTH * 0.075,
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
        color: '#FCFCFF',
        fontSize: 16,
        alignSelf: 'center',
        paddingLeft: 10,
    },
    goBack: {
        marginTop: SCREEN_WIDTH * 0.125,
        marginBottom: SCREEN_WIDTH * 0.035,
        marginHorizontal: SCREEN_WIDTH * 0.025,
        flexDirection: 'row',
        backgroundColor: '#E1948B'
    },
    goBackIcon: {
        textAlign: 'center',
    },
    continueText: {
        color: '#FCFCFF',
        fontSize: 16,
        alignSelf: 'center',
        paddingLeft: 10,
    },
    continueContainer: {
        alignSelf: 'flex-end',
        padding: 5,
        backgroundColor: '#61C08C',
        borderRadius: 10,
        marginTop: SCREEN_WIDTH * 0.05,
        flexDirection: 'row',
    },
    continueIcon: {
        textAlign: 'center',
    },
    navigationButton: {
        justifyContent: 'flex-end',
        color: '#FCFCFF',
    }
});
