import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from './views/home'

const Tab = createMaterialBottomTabNavigator();

export default function Routes() {
  return (
    <Tab.Navigator
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
          <MaterialCommunityIcons name="home-outline" color={color} size={22} />
        ),
      }} />
      <Tab.Screen name="History" component={Home} options={{
        tabBarLabel: 'Histórico',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="file-document-outline" color={color} size={22} />
        ),
      }} />
      <Tab.Screen name="Profile" component={Home} options={{
        tabBarLabel: 'Perfil',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="account-outline" color={color} size={22} />
        ),
      }} />
    </Tab.Navigator >
  );
}