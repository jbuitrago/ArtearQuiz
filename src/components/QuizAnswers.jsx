import React, { PureComponent } from "react";
import {
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import _StyleSheet from "../../assets/styles";

export default class QuizOptionItem extends PureComponent {
 
  _onPress = () => {
     
      this.props._onPressAnswer(this.props.quizAnswer);
  };

  render() {
    const { quizAnswer , key } = this.props;

    return (
      <View style = {_StyleSheet.answer}>
      <TouchableOpacity  key= {key} onPress={this._onPress}>
        <Text style={_StyleSheet.textAnswer}>{quizAnswer.answer}</Text>
      </TouchableOpacity>
      </View>

    );
  }
}



