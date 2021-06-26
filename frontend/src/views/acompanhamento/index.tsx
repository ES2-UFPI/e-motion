import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Client from './views/Client';

const StackSettings = createStackNavigator<RoutesList>();

export default function Acompanhamento(props: any) {

    return (
        <StackSettings.Navigator screenOptions={{ headerShown: false }}>
            <StackSettings.Screen name="Client" component={Client} initialParams={props.route.params}/>
        </StackSettings.Navigator>
    );
}

type RoutesList = {
    Client: undefined
};