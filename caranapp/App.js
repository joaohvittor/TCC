import React from 'react'
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import  Routes  from './routes';
import { setStatusBarStyle } from 'expo-status-bar';

export default function App() {
  return (



    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
}

