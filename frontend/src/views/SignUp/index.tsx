import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HoAmI from './views/HoAmI';
import AvatarAndNickname from './views/AvatarAndNickname';
import ToBind from './views/ToBind';

const StackSettings = createStackNavigator<RoutesList>();

export default function SignUp() {
    return (

        <StackSettings.Navigator screenOptions={{ headerShown: false }}>
            <StackSettings.Screen name="HoAmI" component={HoAmI}/>
            <StackSettings.Screen name="AvatarAndNickname" component={AvatarAndNickname} />
            <StackSettings.Screen name="ToBind" component={ToBind} />
        </StackSettings.Navigator>
    );
}

type RoutesList = {
    HoAmI: undefined
    AvatarAndNickname: undefined
    ToBind: undefined
};