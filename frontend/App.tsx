import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux';

import { store, persistor } from './src/store';

import { PersistGate } from 'redux-persist/integration/react';

import Routes from './src/routes'

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StatusBar style="light" />
        <Routes />
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
