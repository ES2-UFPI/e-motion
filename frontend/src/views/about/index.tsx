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

export default function About({ navigation, route }: any) {

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.goBack} onPress={() => navigation.goBack()}>
                <MaterialCommunityIcons style={styles.goBackIcon} name="chevron-left" color={iconColor} size={iconSize} />
                <Text style={styles.goBackText}>Voltar</Text>
            </TouchableOpacity>
            <View style={styles.titleContainer} >
                <Text style={styles.text}>Sobre o e-motion</Text>
            </View>
            <View style={styles.textContainer}>
                <Paragraph style={styles.paragraph}>
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
                </Paragraph>
                <Paragraph style={styles.paragraph}>
                    Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                </Paragraph>
            </View>
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
        color: '#000000',
        fontSize: 16,
        alignSelf: 'center',
        paddingLeft: 10,
    },
    goBack: {
        marginTop: SCREEN_WIDTH * 0.15,
        flexDirection: 'row',
    },
    goBackIcon: {
        textAlign: 'center',

    },
    paragraph: {
        fontSize: 16,
        marginBottom: SCREEN_WIDTH * 0.05,
    }
});