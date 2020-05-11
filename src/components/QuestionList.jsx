import React, { Component } from "react";
import { StyleSheet, FlatList,  View ,TouchableOpacity,ScrollView} from "react-native";
import { ThemeProvider, Button, Text, Header,Icon } from "react-native-elements"
import PropTypes from "prop-types";
import _StyleSheet from '../../assets/styles'

export default class QuestionList extends Component {
  _keyExtractor = (item) => item.number;

  _renderItem = ({ item }) => {
    const { number, question, answers } = item;
    return (
      <View style={_StyleSheet.questionList}>
      <ScrollView 
      horizontal
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={true}
    >
      <TouchableOpacity >
        <Text>
          {number} - {question}
        </Text>
        {answers.map((list) => {
          if (list.isCorrect) {
            return <Text>{list.answer}</Text>;
          }
        })}
        </TouchableOpacity>
        </ScrollView>
        </View>
    );
  };

  render() {
    return (
      <FlatList
        style={{ flex: 1 }}
        data={this.props.questions}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}
        showsVerticalScrollIndicator={true}
        showsHorizontalScrollIndicator={false}
      />
    );
  }
}

QuestionList.propTypes = {
  questions: PropTypes.array,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    //backgroundColor: "#FFF",
    justifyContent: "center", //Centered vertically
    alignItems: "center", // Centered horizontally
  },

  button: {
    backgroundColor: "#707070",
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: "center",
    justifyContent: "center",
    width: 280,
    marginTop: 20,
    padding: 10,
  },
});
