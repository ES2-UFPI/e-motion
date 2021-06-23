import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Client from './views/Client';
const StackSettings = createStackNavigator<RoutesList>();

export default function Acompanhamento() {
    return (
        <StackSettings.Navigator screenOptions={{ headerShown: false }}>
            <StackSettings.Screen name="Client" component={Client}/>
        </StackSettings.Navigator>
    );
}

type RoutesList = {
    Client: undefined
};