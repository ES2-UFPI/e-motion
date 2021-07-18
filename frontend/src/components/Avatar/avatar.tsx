import React from 'react';
import { Text, View, Image, StyleSheet, Button } from 'react-native';
import { Dimensions } from 'react-native'

const SCREEN_WIDTH = Dimensions.get("window").width;
const PROFILE_PICTURE_DIMENSION = SCREEN_WIDTH * 0.3;

const styles = StyleSheet.create({
    componentContainer: {
        alignItems: 'center',
    },
    profilePicture: {
        width: PROFILE_PICTURE_DIMENSION,
        height: PROFILE_PICTURE_DIMENSION,
        borderRadius: PROFILE_PICTURE_DIMENSION / 2,
    },
    nickname: {
        color: '#FCFCFF',
        fontSize: 24,
        fontWeight: 'bold',
    },
    email: {
        color: '#FCFCFF',
        fontSize: 14,
        textDecorationLine: 'underline'

    },
    labelText: {
        color: '#FCFCFF',
        fontSize: 14,
        fontWeight: 'bold',
    },
    label: {
        backgroundColor: '#61C08C',
        borderWidth: 2,
        borderColor: '#FCFCFF',
        borderRadius: 30,
        alignItems: 'center',
        padding: 2,
        position: 'absolute',
    },
    profilePictureAndLabelContainer: {
        paddingBottom: 15,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    textContainer: {
        alignItems: 'center',
    }
});

function getProfilePicture(profilePicture: any) {
    if (profilePicture == 1) {
        return require('../../assets/profilePictures/1.png');
    }
    else if (profilePicture == 2) {
        return require('../../assets/profilePictures/2.png');
    }
    else if (profilePicture == 3) {
        return require('../../assets/profilePictures/3.png');
    }
    else if (profilePicture == 4) {
        return require('../../assets/profilePictures/4.png');
    }
    else if (profilePicture == 5) {
        return require('../../assets/profilePictures/5.png');
    }
    else if (profilePicture == 6) {
        return require('../../assets/profilePictures/6.png');
    }
}

const Avatar = (props: any) => {
    return (
        <View style={styles.componentContainer}>
            <View style={styles.profilePictureAndLabelContainer}>
                <Image
                    style={styles.profilePicture}
                    source={getProfilePicture(props.profilePicture)}
                />
                {props.isProfessional ? <View style={styles.label}>
                    <Text style={styles.labelText}>PROFISSIONAL</Text>
                </View> : <></>}
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.nickname}>{props.nickname}</Text>
                <Text style={styles.email}>{props.email}</Text>
            </View >
        </View >

    )
}
export default Avatar;