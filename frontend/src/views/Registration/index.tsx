import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import StepZero from './views/StepZero';
import StepOne from './views/StepOne';

const StackSettings = createStackNavigator<RoutesList>();

export default function Registration() {
    return (

        <StackSettings.Navigator screenOptions={{ headerShown: false }}>
            <StackSettings.Screen name="StepZero" component={StepZero} />
            <StackSettings.Screen name="StepOne" component={StepOne} />
        </StackSettings.Navigator>
    );
}

type RoutesList = {
    StepZero: undefined
    StepOne: undefined
};
