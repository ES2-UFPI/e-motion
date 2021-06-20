import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import StepZero from './views/StepZero';

const StackSettings = createStackNavigator<RoutesList>();

export default function Registration() {
    return (

        <StackSettings.Navigator screenOptions={{ headerShown: false }}>
            <StackSettings.Screen name="StepZero" component={StepZero} />
        </StackSettings.Navigator>
    );
}

type RoutesList = {
    StepZero: undefined
};
