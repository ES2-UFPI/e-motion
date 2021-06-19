import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Switch
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Avatar from '../../components/Avatar/avatar';
import { Dimensions } from 'react-native';

const SCREEN_WIDTH = Dimensions.get("window").width;
const iconColor = '#91919F';
const iconSize = SCREEN_WIDTH * 0.075;

export default function Profile({ navigation }: any) {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    const isProfissional = false;
    const name = 'Lulu';
    const email = 'julia_silva@mail.com';
    const profilePicture = require('../../assets/profile.png');

    function navigateToAssociateCode( ){
        navigation.navigate('GerenciarProfessional')
   }

    return (
        <View style={styles.container}>
            <View style={styles.leaveContainer}>
                <TouchableOpacity>
                    <Text style={styles.leaveText}>Sair</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.avatarContainer}>
                <Avatar profilePicture={profilePicture} name={name} email={email} isProfissional={isProfissional} />
            </View>
            <View style={styles.settingsContainer}>
                <View style={styles.accountSettingsContainer}>
                    <Text style={styles.accountSettingsText}>Configurações da conta</Text>
                    {!isProfissional ?
                        <View>
                            <TouchableOpacity style={styles.optionContainer} onPress={() => navigation.navigate('EditProfile', { isProfissional: isProfissional })} >
                                <Text style={styles.optionText}>Editar perfil</Text>
                                <MaterialCommunityIcons style={styles.optionIcon} name="chevron-right" color={iconColor} size={iconSize} />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.optionContainer} onPress={navigateToAssociateCode}>  
                                <Text style={styles.optionText}>Gerenciar profissional</Text>
                                <MaterialCommunityIcons style={styles.optionIcon} name="chevron-right" color={iconColor} size={iconSize} />
                            </TouchableOpacity>
                            <View style={styles.optionContainer}>
                                <Text style={styles.optionText}>Notificações</Text>
                                <Switch
                                    trackColor={{ false: "#91919F", true: "#E1948B" }}
                                    thumbColor={'#F1F1FA'}
                                    ios_backgroundColor="#91919F"
                                    onValueChange={toggleSwitch}
                                    value={isEnabled}
                                />
                            </View>
                        </View> :
                        <View>
                            <TouchableOpacity style={styles.optionContainer} onPress={() => navigation.navigate('EditProfile', { isProfissional: isProfissional })}>
                                <Text style={styles.optionText}>Editar perfil</Text>
                                <MaterialCommunityIcons style={styles.optionIcon} name="chevron-right" color={iconColor} size={iconSize} />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.optionContainer}>
                                <Text style={styles.optionText}>Código de vinculação</Text>
                                <MaterialCommunityIcons style={styles.optionIcon} name="chevron-right" color={iconColor} size={iconSize} />
                            </TouchableOpacity>
                        </View>
                    }
                </View>
                <View style={styles.accountSettingsContainer}>
                    <Text style={styles.accountSettingsText}>Suporte</Text>
                    <TouchableOpacity style={styles.optionContainer}>
                        <Text style={styles.optionText}>Sobre o e-motion</Text>
                        <MaterialCommunityIcons style={styles.optionIcon} name="chevron-right" color={iconColor} size={iconSize} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.optionContainer}>
                        <Text style={styles.optionText}>FAQ</Text>
                        <MaterialCommunityIcons style={styles.optionIcon} name="chevron-right" color={iconColor} size={iconSize} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.optionContainer}>
                        <Text style={styles.optionText}>Compartilhar </Text>
                        <MaterialCommunityIcons style={styles.optionIcon} name="chevron-right" color={iconColor} size={iconSize} />
                    </TouchableOpacity>
                </View>
            </View>
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E1948B',
    },
    avatarContainer: {
        marginTop: SCREEN_WIDTH * 0.05,
        marginBottom: SCREEN_WIDTH * 0.05,
    },
    leaveText: {
        color: '#FCFCFF',
        fontSize: 16,
    },
    leaveContainer: {
        marginTop: SCREEN_WIDTH * 0.15,
        marginHorizontal: SCREEN_WIDTH * 0.05,
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    settingsContainer: {
        backgroundColor: '#FCFCFF',
        flex: 1,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
    accountSettingsContainer: {
        justifyContent: 'space-between',
        marginHorizontal: SCREEN_WIDTH * 0.06,
        marginTop: SCREEN_WIDTH * 0.06,
        marginBottom: SCREEN_WIDTH * 0.08,
    },
    accountSettingsText: {
        color: '#91919F',
        fontSize: 12,
    },
    optionText: {
        color: '#161719',
        fontSize: 16,
    },
    optionContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: SCREEN_WIDTH * 0.01,
    },
    optionIcon: {
        textAlign: 'center'
    }
});
