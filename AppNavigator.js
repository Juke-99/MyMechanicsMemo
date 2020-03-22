import { createStackNavigator } from "@react-navigation/stack";
import React, { Component } from "react";

import { NavigationContainer } from '@react-navigation/native'
import Home from './Home';
import GeneralisedCoordinates from './GeneralisedCoordinates';
import { createAppContainer } from "react-navigation";

const Stack = createStackNavigator()

class AppNavigator extends Component {
  constructor(props) {
    super(props)
  }

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

export default AppNavigator