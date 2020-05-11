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
  colors: {
    primary: "rgb(255, 45, 85)",
    background: "#1B5E20",
    card: "rgb(255, 255, 255)",
    text: "rgb(28, 28, 30)",
    border: "rgb(199, 199, 204)",
    //button: '#4CAF50'
  },
};

function MyStack() {
  return (
    <Stack.Navigator>
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
            <NavigationContainer>
              <MyStack />
            </NavigationContainer>
          }
        </Provider>
      </AppearanceProvider>
    );
  }
}
