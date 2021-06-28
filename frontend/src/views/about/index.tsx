import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import { Dimensions } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Paragraph } from 'react-native-paper';

const SCREEN_WIDTH = Dimensions.get("window").width;
const iconColor = '#212325';
const iconSize = SCREEN_WIDTH * 0.075;

var firstParagraph = "O e-motion é um aplicativo criado para facilitar o acompanhamento e interação entre psicólogos e clientes. Nele é possível fazer registros emocionais de situações vividas pelo cliente: quais os sentimentos envolvidos, contextos, causas e consequências. Todos os registros podem ser acessados pelo psicólogo responsável pelo cliente.";
var secondParagraph = "O psicólogo pode ter acesso a todos os registros emocionais de seus pacientes e, consequentemente, fazer um acompanhamento mais próximo. O e-motion não tem a intenção de substituir sessões de terapia, pelo contrário, é uma ferramenta que visa auxiliar o psicólogo no acompanhamento de seu cliente durante o período entre cada sessão.";

export default function About({ navigation, route }: any) {

    return (
        <View style={styles.generalView}>
            <TouchableOpacity style={styles.goBack} onPress={() => navigation.goBack()}>
                <MaterialCommunityIcons style={styles.goBackIcon} name="chevron-left" color={'#FCFCFF'} size={iconSize} />
                <Text style={styles.goBackText}>Voltar</Text>
            </TouchableOpacity>
            <View style={styles.container}>
                {/* <TouchableOpacity style={styles.goBack} onPress={() => navigation.goBack()}>
                <MaterialCommunityIcons style={styles.goBackIcon} name="chevron-left" color={iconColor} size={iconSize} />
                <Text style={styles.goBackText}>Voltar</Text>
            </TouchableOpacity> */}
                <View style={styles.titleContainer} >
                    <Text style={styles.text}>Sobre o e-motion</Text>
                </View>
                <View style={styles.textContainer}>
                    <Paragraph style={styles.paragraph}>
                        {firstParagraph}
                    </Paragraph>
                    <Paragraph style={styles.paragraph}>
                        {secondParagraph}
                    </Paragraph>
                </View>
            </View >
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
    paragraph: {
        fontSize: 14,
        marginBottom: SCREEN_WIDTH * 0.05,
    }
});