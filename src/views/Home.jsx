import React from "react";
import { View,TouchableOpacity } from "react-native"
import { useTheme ,useNavigation } from "@react-navigation/native"
import { ThemeProvider, Button, Text, Header,Icon } from "react-native-elements"
import _StyleSheet from '../../assets/styles'
import _Header from '../components/commons/_Header'

const Home = () => {
  const { colors } = useTheme();
  const navigation = useNavigation();
  return (
    <View >
      <_Header title= 'Home'/>
      <View style = {_StyleSheet.container}>
      <Text h1>ARTEAR QUIZ</Text>
      <Text h3>Welcome to Artear quiz</Text>
      <TouchableOpacity style={_StyleSheet.questions}
        onPress={() => navigation.navigate("Question")}
      >
        <Text h1 style={ _StyleSheet.textQuestions}>Questions</Text>
      </TouchableOpacity>
      <TouchableOpacity style={_StyleSheet.quiz}
      onPress={() => navigation.navigate("Quiz")}>
        <Text h1 style={ _StyleSheet.textQuiz} >Quiz</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;
