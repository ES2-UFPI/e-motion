import React from 'react';
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

export default function AcompanharConsequencias({ route, navigation }: any) {

    const params = route.params;

    return (
        <View style={styles.generalView}>
            <TouchableOpacity style={styles.goBack} onPress={() => navigation.navigate('Client')}>
                <MaterialCommunityIcons style={styles.goBackIcon} name="chevron-left" color={'#FCFCFF'} size={iconSize} />
                <Text style={styles.goBackText}>Voltar</Text>
            </TouchableOpacity>
            <ScrollView style={styles.container}>
                <View style={styles.titleContainer} >
                    <Text style={styles.titleText}>Consequências</Text>
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.questionText}>O que aconteceu depois disso.</Text>
                    <TextInput style={styles.input}
                        value={params.what_happened_after_that}
                        editable={false}
                        multiline={true}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.questionText}>O que fez quando isso ocorreu.</Text>
                    <TextInput style={styles.input}
                        value={params.what_the_client_did_when_this_occurred}
                        editable={false}
                        multiline={true}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.questionText}>O que as outras pessoas fizeram quando isso ocorreu.</Text>
                    <TextInput style={styles.input}
                        value={params.what_other_people_did_when_this_occurred}
                        editable={false}
                        multiline={true}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.questionText}>O que mudou depois que isso aconteceu.</Text>
                    <TextInput style={styles.input}
                        value={params.what_changed_after_that_happened}
                        editable={false}
                        multiline={true}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.questionText}>O que obteve depois que isso aconteceu.</Text>
                    <TextInput style={styles.input}
                        value={params.what_the_customer_got_after_it_happened}
                        editable={false}
                        multiline={true}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.questionText}>O que fez ou evitou depois que isso aconteceu.</Text>
                    <TextInput style={styles.input}
                        value={params.what_the_customer_did_or_avoided_after_it_happened}
                        editable={false}
                        multiline={true}
                    />
                </View>
                <View style={styles.navigationButtons}>
                    <TouchableOpacity style={styles.previousContainer} onPress={() => navigation.goBack()}>
                        <MaterialCommunityIcons style={styles.previousIcon} name="chevron-left" color={'#FCFCFF'} size={iconSize} />
                        <Text style={styles.previousText}>Anterior</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.continueContainer} onPress={() => navigation.navigate('Client')}>
                        <Text style={styles.continueText}>Fim</Text>
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
        paddingHorizontal: SCREEN_WIDTH * 0.11,
    },
    continueContainer: {
        padding: 5,
        backgroundColor: '#61C08C',
        borderRadius: 10,
        marginTop: SCREEN_WIDTH * 0.15,
        flexDirection: 'row',
    },
    continueIcon: {
        textAlign: 'center',
    },
    previousText: {
        color: '#FCFCFF',
        fontSize: 16,
        alignSelf: 'center',
        paddingLeft: 10,
    },
    previousContainer: {
        padding: 5,
        backgroundColor: '#E1948B',
        borderRadius: 10,
        marginTop: SCREEN_WIDTH * 0.15,
        flexDirection: 'row',
        paddingRight: SCREEN_WIDTH * 0.05,
    },
    previousIcon: {
        textAlign: 'center',
    },
    navigationButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: SCREEN_WIDTH * 0.05
    }
});
