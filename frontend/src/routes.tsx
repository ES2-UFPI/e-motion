import React from 'react';
import { Dimensions } from 'react-native'

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator, } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import RecordsList from './views/RecordsList';
import Home from './views/home'
import Profile from './views/profile';
import ProfessionalAssociationCode from './views/ProfessionalAssociationCode';

const Tab = createMaterialBottomTabNavigator<RoutesList>();
const SCREEN_WIDTH = Dimensions.get("window").width;
const iconSize = SCREEN_WIDTH * 0.07;

export default function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        shifting
        initialRouteName="Home"
        activeColor="#E1948B"
        inactiveColor="#292B2D"
        barStyle={{
          backgroundColor: '#FCFCFF',
          position: 'absolute',
          overflow: 'hidden',
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,

        }}

      >
        <Tab.Screen name="Home" component={Home} options={{
          tabBarLabel: 'Início',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home-outline" color={color} size={iconSize} />
          ),
        }} />

        <Tab.Screen name="History" component={ProfessionalAssociationCode} options={{
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
    </NavigationContainer>
  );
}

type RoutesList = {
  Home: undefined;
  History: undefined;
  Profile: undefined;
};