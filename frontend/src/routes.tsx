import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import EditProfile from './views/editProfile';
import BottomNavigation from './components/BottomNavigation';
import GerenciarProfessional from './views/GerenciarProfessional';

const Stack = createStackNavigator<RootStackParamList>();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name='BottomNavigation' component={BottomNavigation} />
        <Stack.Screen name='EditProfile' component={EditProfile} />
        <Stack.Screen name='GerenciarProfessional' component={GerenciarProfessional} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

type RootStackParamList = {
  BottomNavigation: undefined
  EditProfile: undefined
  GerenciarProfessional:undefined
};