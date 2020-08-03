import React, { Component } from 'react'
import { Text, StyleSheet, View, Button } from 'react-native'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from './screens/LoginScreen';
import MainScreen from './screens/MainScreen';


const App = createStackNavigator(
  {
    LoginScreen: {
      screen: LoginScreen,
    },
    MainScreen: {
      screen: MainScreen,
    },
  },
  {
    initialRouteName: 'LoginScreen' // ?? ?? ? ??? ?????.
  },
);

const AppContainer = createAppContainer(App);

export default () => (
  <AppContainer />
);