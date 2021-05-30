import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

export default function Home() {
    return (
        <View style={styles.container}>
            <Text>Hello World!</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
