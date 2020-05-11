import React, { Component } from "react";
import {
  StyleSheet,
  FlatList,
  Text,
  View,
  Button,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import PropTypes from "prop-types";
import QuizAnswers from "./QuizAnswers";
import QuizResult from "./QuizResult";
export default class QuizStart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
      question: null,
      answers: [],
      userAnswer: 0,
      currentQuestion: 0,
      maxQuestions: 10,
      quizEnd: false,
      score: 0,
      displayResult: false,
    };
  }
  loadQuiz = () => {
    const { currentQuestion } = this.state;
    this.setState(() => {
      return {
        number: this.props.questions[currentQuestion].number,
        question: this.props.questions[currentQuestion].question,
        answers: this.props.questions[currentQuestion].answers,
      };
    });
  };
  componentDidMount() {
    console.log(this.props.questions);
    this.loadQuiz();
  }

  _onPressAnswer = (quizAnswer) => {
    //Correct Answer
    if (quizAnswer.isCorrect) {
      this.setState({
        score: this.state.score + 1,
      });
    }
    //Next Question
    if (this.state.currentQuestion < this.props.questions.length - 1) {
      this.setState({
        currentQuestion: this.state.currentQuestion + 1,
      });
    }
    // Finish
    if (this.state.currentQuestion === this.props.questions.length - 1) {
      this.setState({
        displayResult: true,
      });
    }
  };

  nextQuestionHandler = () => {
    this.setState({
      currentQuestion: this.state.currentQuestion + 1,
    });
  };
  finishQuestionHandler = () => {
    this.setState({
      displayResult: true,
    });
  };
  //Update component
  componentDidUpdate(prevProps, prevState) {
    const { currentQuestion } = this.state;
    if (this.state.currentQuestion !== prevState.currentQuestion) {
      this.setState(() => {
        return {
          number: this.props.questions[currentQuestion].number,
          question: this.props.questions[currentQuestion].question,
          answers: this.props.questions[currentQuestion].answers,
        };
      });
    }
  }

  render() {
    const {
      currentQuestion,
      question,
      number,
      answers,
      displayResult,
      score,
    } = this.state;

    return (
      <View>
      <QuizResult score={score}></QuizResult>
        <View>
          {/* Question*/}
          {displayResult === false && (
            <Text>
              Question {currentQuestion + 1} / {this.props.questions.length}
            </Text>
          )}
          {displayResult === false && (
            <Text>
              {number} - {question}{" "}
            </Text>
          )}
        </View>
        {/* Answers*/}
        {displayResult === false &&
          answers.map((item, i) => {
            return (
              <QuizAnswers
                key={i}
                quizAnswer={item}
                _onPressAnswer={this._onPressAnswer}
              />
            );
          })}
        {/* Next */}

        {/*Display Result*/}
        {displayResult && (
          <QuizResult score={score}></QuizResult>
        )}
      </View>
    );
  }
}

QuizStart.propTypes = {
  questions: PropTypes.array,
};
