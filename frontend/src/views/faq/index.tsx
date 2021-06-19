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

export default function FAQ({ navigation, route }: any) {

    const [expanded, setExpanded] = useState(true);

    const handlePress = () => setExpanded(!expanded);

    return (
        <ScrollView style={styles.container}>
            <TouchableOpacity style={styles.goBack} onPress={() => navigation.goBack()}>
                <MaterialCommunityIcons style={styles.goBackIcon} name="chevron-left" color={iconColor} size={iconSize} />
                <Text style={styles.goBackText}>Voltar</Text>
            </TouchableOpacity>
            <View style={styles.titleContainer} >
                <Text style={styles.text}>FAQ</Text>
            </View>
            <List.Section>
                <List.Accordion
                    title="What is Lorem Ipsum?"
                    style={styles.accordion}
                    titleStyle={{ color: '#161719' }}
                >
                    <View style={styles.answerContainer}>
                        <Text style={styles.answerText}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
                    </View>

                </List.Accordion>

                <List.Accordion
                    title="Where does it come from?"
                    style={styles.accordion}
                    titleStyle={{ color: '#161719' }}
                >
                    <View style={styles.answerContainer}>
                        <Text style={styles.answerText}>Contrary to popular belief, Lorem Ipsum is not simply random text.</Text>
                    </View>
                </List.Accordion>
                <List.Accordion
                    title="Why do we use it?"
                    style={styles.accordion}
                    titleStyle={{ color: '#161719' }}
                >
                    <View style={styles.answerContainer}>
                        <Text style={styles.answerText}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</Text>
                    </View>
                </List.Accordion>
                <List.Accordion
                    title="Where can I get some?"
                    style={styles.accordion}
                    titleStyle={{ color: '#161719' }}
                >
                    <View style={styles.answerContainer}>
                        <Text style={styles.answerText}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</Text>
                    </View>
                </List.Accordion>
            </List.Section>
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