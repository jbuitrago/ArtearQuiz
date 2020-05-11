import React, { Component } from "react";
import { AppearanceProvider, useColorScheme } from "react-native-appearance";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import Home from "./src/views/Home";
import Question from "./src/views/Question";
import Quiz from "./src/views/Quiz";
import questionReducer from "./src/redux/reducers/questionReducer";

const store = createStore(questionReducer, applyMiddleware(thunk));
const Stack = createStackNavigator();

const MyTheme = {
  dark: false,
 /*colors: {
    DEFAULT: '#DCDCDC',
    PRIMARY: '#9C26B0',
    LABEL: '#FE2472',
    INFO: '#00BCD4',
    ERROR: '#F44336',
    SUCCESS: '#4CAF50',
    WARNING: '#FF9800',
    MUTED: '#979797',
    INPUT: '#DCDCDC',
    ACTIVE: '#9C26B0',
    BUTTON_COLOR: '#9C26B0',
    PLACEHOLDER: '#9FA5AA',
    SWITCH_ON: '#9C26B0',
    SWITCH_OFF: '#D4D9DD',
    GRADIENT_START: '#6B24AA',
    GRADIENT_END: '#AC2688',
    PRICE_COLOR: '#EAD5FB',
    BORDER_COLOR: '#E7E7E7',
    BLOCK: '#E7E7E7',
    ICON: '#4A4A4A',
    background:"#1B5E20"
  },*/
  colors: {
    primary: "rgb(255, 45, 85)",
    background: "#2E7D32",
    card: "rgb(255, 255, 255)",
    text: "rgb(28, 28, 30)",
   // border: "rgb(199, 199, 204)",
    //button: '#4CAF50'
  },
  container:{
      background:"#FFF"

  }
};

function MyStack() {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Question" component={Question} />
      <Stack.Screen name="Quiz" component={Quiz} />
    </Stack.Navigator>
  );
}

export default class App extends Component {
  render() {
    return (
      <AppearanceProvider>
        <Provider store={store}>
          {
            <NavigationContainer theme={MyTheme}>
              <MyStack />
            </NavigationContainer>
          }
        </Provider>
      </AppearanceProvider>
    );
  }
}
