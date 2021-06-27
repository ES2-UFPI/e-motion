import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
} from 'react-native';
import { Dimensions } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Paragraph, List } from 'react-native-paper';

const SCREEN_WIDTH = Dimensions.get("window").width;
const iconColor = '#212325';
const iconSize = SCREEN_WIDTH * 0.075;

var firstQuestionTitle = 'O que é o e-motion?';
var secondQuestionTitle = 'Para quem é o e-motion?';
var thirdQuestionTitle = 'Meus dados estão seguros?';

var firstQuestionText = 'O e-motion é um aplicativo de registros emocionais, onde o usuário pode fazer registros emocionais: sentimentos, contextos, ações e reações relacionadas. Além disso, um psicólogo responsável pelo usuário pode fazer o acompanhamento dos registros.';
var secondQuestionText = 'O e-motion é destinado para clientes e psicólogos que buscam melhorar o registro de situações relevantes para o tratamento terapêutico que possam acontecer no período entre sessões.';
var thirdQuestionText = 'O e-motion garante a privacidade de seus usuários. Os registros emocionais de cada usuário estão disponíveis apenas para ele mesmo e, caso seja permitido pelo usuário, o psicólogo responsável.';

export default function FAQ({ navigation, route }: any) {

    const [expanded, setExpanded] = useState(true);

    const handlePress = () => setExpanded(!expanded);

    return (
        <View style={styles.generalView}>
            <TouchableOpacity style={styles.goBack} onPress={() => navigation.goBack()}>
                <MaterialCommunityIcons style={styles.goBackIcon} name="chevron-left" color={'#FCFCFF'} size={iconSize} />
                <Text style={styles.goBackText}>Voltar</Text>
            </TouchableOpacity>
            <ScrollView style={styles.container}>
                <View style={styles.titleContainer} >
                    <Text style={styles.text}>FAQ</Text>
                </View>
                <List.Section>
                    <List.Accordion
                        title={firstQuestionTitle}
                        style={styles.accordion}
                        titleStyle={{ color: '#161719' }}
                    >
                        <View style={styles.answerContainer}>
                            <Text style={styles.answerText}>{firstQuestionText}</Text>
                        </View>

                    </List.Accordion>

                    <List.Accordion
                        title={secondQuestionTitle}
                        style={styles.accordion}
                        titleStyle={{ color: '#161719' }}
                    >
                        <View style={styles.answerContainer}>
                            <Text style={styles.answerText}>{secondQuestionText}</Text>
                        </View>
                    </List.Accordion>
                    <List.Accordion
                        title={thirdQuestionTitle}
                        style={styles.accordion}
                        titleStyle={{ color: '#161719' }}
                    >
                        <View style={styles.answerContainer}>
                            <Text style={styles.answerText}>{thirdQuestionText}</Text>
                        </View>
                    </List.Accordion>
                </List.Section>
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
        flex: 1,
        backgroundColor: '#FCFCFF',
        paddingHorizontal: SCREEN_WIDTH * 0.06,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
    },
    titleContainer: {
        alignItems: 'center'
    },
    text: {
        marginTop: SCREEN_WIDTH * 0.1,
        color: '#161719',
        fontSize: 20,
        fontWeight: 'bold'
    },
    textContainer: {
        marginTop: SCREEN_WIDTH * 0.085,
        paddingHorizontal: 5

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
    accordion: {
        backgroundColor: '#FCFCFF',
    },
    answerContainer: {
        marginHorizontal: SCREEN_WIDTH * 0.03,
        padding: SCREEN_WIDTH * 0.025,
        backgroundColor: '#F1F1F4',
        borderRadius: 10,
    },
    answerText: {
        fontSize: 16,
    }
});