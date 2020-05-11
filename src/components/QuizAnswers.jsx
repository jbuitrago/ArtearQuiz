import React, { PureComponent } from "react";
import {
  Animated,
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";

export default class QuizOptionItem extends PureComponent {
 
  _onPress = () => {
      this.props._onPressAnswer(this.props.quizAnswer);
  };

  render() {
    const { quizAnswer , key } = this.props;

    return (
      <TouchableOpacity  key= {key}  onPress={this._onPress}>
        <Text >{quizAnswer.answer}</Text>
      </TouchableOpacity>

    );
  }
}



