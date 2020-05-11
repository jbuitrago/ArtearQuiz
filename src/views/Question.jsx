import React, { Component } from "react";
import { StyleSheet, View, ActivityIndicator } from "react-native"
import QuestionList from "../components/QuestionList";
import { fetchQuestion } from "../redux/actions/questionActions"
import { connect } from "react-redux";
import PropTypes from 'prop-types'
import _StyleSheet from '../../assets/styles'
import _Header from '../components/commons/_Header'

class Question extends Component {

  componentDidMount() {
    this.props.fetchQuestion();
  }

  render() {
    
    let content = <QuestionList questions={this.props.randomQuestion.questions} />;
    if (this.props.randomQuestion.isFetching) {
      content = <ActivityIndicator size="large" />;
    }
    return (<View><_Header title= 'Questions'/><View style = {_StyleSheet.container}>{content}</View></View>);

  }
}



Question.propTypes = {
  fetchQuestion: PropTypes.func.isRequired,
  randomQuestion: PropTypes.object.isRequired
};


const mapStateToProps = state => {
  return {
    randomQuestion: state
  };
};

export default connect(mapStateToProps, { fetchQuestion })(Question);
