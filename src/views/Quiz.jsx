import React, { Component } from "react";
import { StyleSheet, View, ActivityIndicator } from "react-native";
import QuizStart from "../components/QuizStart";
import { fetchQuestionQuiz } from "../redux/actions/questionActions";
import { connect } from "react-redux";
import PropTypes from 'prop-types'

class Quiz extends Component {

  componentDidMount() {
    this.props.fetchQuestionQuiz();
  }

  render() {
    let questions = this.props.randomQuestionQuiz.questions;
    let questionsSubstr = [];
    //Reduzco el array para mostrar solo 10 preguntas
    questions.map((question,i)=>{
      if(i<10){
        questionsSubstr.push(question);
      }
      i= i++;
    }
    );

    let content = <QuizStart questions={questionsSubstr} />;
    if (this.props.randomQuestionQuiz.isFetching) {
      content = <ActivityIndicator size="large" />;
    }
    return <View >{content}</View>;

  }
}


Quiz.propTypes = {
  fetchQuestionQuiz: PropTypes.func.isRequired,
  randomQuestionQuiz: PropTypes.object.isRequired
};



const mapStateToProps = state => {
  return {
    randomQuestionQuiz: state
  };
};

export default connect(mapStateToProps, { fetchQuestionQuiz })(Quiz);
