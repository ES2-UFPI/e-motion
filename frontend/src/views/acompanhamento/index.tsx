import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Client from './views/Client';
import AcompanharAntecedentes from './views/antecedentes';
import AcompanharComportamento from './views/comportamento';
import AcompanharConsequencias from './views/consequencias';

const StackSettings = createStackNavigator<RoutesList>();

export default function Acompanhamento(props: any) {

    return (
        <StackSettings.Navigator screenOptions={{ headerShown: false }}>
            <StackSettings.Screen name="Client" component={Client} initialParams={props.route.params}/>
            <StackSettings.Screen name="AcompanharAntecedentes" component={AcompanharAntecedentes}/>
            <StackSettings.Screen name="AcompanharComportamento" component={AcompanharComportamento}/>
            <StackSettings.Screen name="AcompanharConsequencias" component={AcompanharConsequencias}/>
        </StackSettings.Navigator>
    );
}

type RoutesList = {
    Client: undefined
    AcompanharAntecedentes: undefined
    AcompanharComportamento: undefined
    AcompanharConsequencias: undefined
};