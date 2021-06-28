import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import StepZero from './views/StepZero';
import StepOne from './views/StepOne';
import StepTwo from './views/StepTwo';
import StepThree from './views/StepThree';

const StackSettings = createStackNavigator<RoutesList>();

export default function Registration() {
    return (

        <StackSettings.Navigator screenOptions={{ headerShown: false }}>
            <StackSettings.Screen name="StepZero" component={StepZero} />
            <StackSettings.Screen name="StepOne" component={StepOne} />
            <StackSettings.Screen name="StepTwo" component={StepTwo} />
            <StackSettings.Screen name="StepThree" component={StepThree} />
        </StackSettings.Navigator>
    );
}

type RoutesList = {
    StepZero: undefined
    StepOne: undefined
    StepTwo: undefined
    StepThree: undefined
};
