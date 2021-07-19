import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux';
import EditProfile from './views/editProfile';
import Registration from './views/Registration';
import Acompanhamento from './views/acompanhamento';
import BottomNavigation from './components/BottomNavigation';
import ProfessionalAssociationCode from './views/ProfessionalAssociationCode';
import GerenciarProfessional from './views/GerenciarProfessional';
import About from './views/about';
import FAQ from './views/faq';
import Authentication from './views/authentication';
import SignUp from './views/SignUp';
import VincularProfissional from './views/VincularProfissional';

const Stack = createStackNavigator<RootStackParamList>();

export default function Routes() {

  const auth = useSelector((state: any) => state.auth);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        {
          !auth.accessToken ?
            <>
              <Stack.Screen name='VincularProfissional' component={VincularProfissional} />
              <Stack.Screen name='Authentication' component={Authentication} />
              <Stack.Screen name='SignUp' component={SignUp} />
            </>
            :
            <>
              <Stack.Screen name='BottomNavigation' component={BottomNavigation} />
              <Stack.Screen name='EditProfile' component={EditProfile} />
              <Stack.Screen name='GenerateAssociationCode' component={ProfessionalAssociationCode} />
              <Stack.Screen name='GerenciarProfessional' component={GerenciarProfessional} />
              <Stack.Screen name='Registration' component={Registration} />
              <Stack.Screen name='Acompanhamento' component={Acompanhamento} />
              <Stack.Screen name='About' component={About} />
              <Stack.Screen name='FAQ' component={FAQ} />
            </>
        }

      </Stack.Navigator>
    </NavigationContainer>
  );
}

type RootStackParamList = {
  BottomNavigation: undefined
  EditProfile: undefined
  GenerateAssociationCode: undefined
  GerenciarProfessional: undefined
  Registration: undefined
  Acompanhamento: undefined
  About: undefined
  FAQ: undefined
  Authentication: undefined
  SignUp: undefined;
  VincularProfissional: undefined
};