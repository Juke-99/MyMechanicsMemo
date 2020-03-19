/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Home from './Home';
import GeneralisedCoordinates from './GeneralisedCoordinates';

const Stack = createStackNavigator()

class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home">
            {props => <Home {...props} />}
          </Stack.Screen>
          <Stack.Screen name="GeneralisedCoordinates" options={{title: "運動方程式: 1. 一般化座標"}}>
            {props => <GeneralisedCoordinates {...props} />}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
};

const styles = StyleSheet.create({

});

export default App;
