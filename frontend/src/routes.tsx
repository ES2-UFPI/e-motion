import React from 'react';
<<<<<<< HEAD
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import EditProfile from './views/editProfile';
import BottomNavigation from './components/BottomNavigation';
import ProfessionalAssociationCode from './views/ProfessionalAssociationCode';
=======
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from './views/home'
import Profile from './views/profile';
import { NavigationContainer } from '@react-navigation/native';
import { Dimensions } from 'react-native'
import RecordsList from './views/RecordsList';
>>>>>>> parent of 6e8e36e... desenvolvendo issue #63

const Stack = createStackNavigator<RootStackParamList>();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
<<<<<<< HEAD
        <Stack.Screen name='BottomNavigation' component={BottomNavigation} />
        <Stack.Screen name='EditProfile' component={EditProfile} />
        <Stack.Screen name='GenerateAssociationCode' component={ProfessionalAssociationCode} />
      </Stack.Navigator>
=======
        <Tab.Screen name="Home" component={Home} options={{
          tabBarLabel: 'Início',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home-outline" color={color} size={iconSize} />
          ),
        }} />
        <Tab.Screen name="History" component={RecordsList} options={{
          tabBarLabel: 'Histórico',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="file-document-outline" color={color} size={iconSize} />
          ),
        }} />
        <Tab.Screen name="Profile" component={Profile} options={{
          tabBarLabel: 'Perfil',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account-outline" color={color} size={iconSize} />
          ),
        }} />
      </Tab.Navigator >
>>>>>>> parent of 6e8e36e... desenvolvendo issue #63
    </NavigationContainer>
  );
}

type RootStackParamList = {
  BottomNavigation: undefined
  EditProfile: undefined
  GenerateAssociationCode: undefined
};