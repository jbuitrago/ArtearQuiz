import React, { Component } from "react";
import { StyleSheet, FlatList, Text, View } from "react-native";
import PropTypes from "prop-types";
import { ListItem } from 'react-native-elements'

export default class QuestionList extends Component {
  _keyExtractor = item => item.number;

  _renderItem = ({ item }) => {
    const {number, question ,answers } = item;

    let title = number +'-'+ question
    let subtitle = answers.map( (list ) =>{ if(list.isCorrect){return "Answer: "+ list.answer}})

    return (
      <View>
      <ListItem
        key={number}
        title={title}
        subtitle= {subtitle}
        bottomDivider
      />
      </View>
    );
  };

  render() {
    return (
      <FlatList
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
  questions: PropTypes.array
};



