import React, { Component } from "react";
import { StyleSheet, View, ActivityIndicator } from "react-native";
import QuestionList from "../components/QuestionList";
import { fetchQuestion } from "../redux/actions/questionActions";
import { connect } from "react-redux";
import PropTypes from 'prop-types'

class Question extends Component {

  componentDidMount() {
    this.props.fetchQuestion();
  }

  render() {
    
    let content = <QuestionList questions={this.props.randomQuestion.questions} />;
    if (this.props.randomQuestion.isFetching) {
      content = <ActivityIndicator size="large" />;
    }
    return (<View>{content}</View>);

  }
}



Question.propTypes = {
  fetchQuestion: PropTypes.func.isRequired,
  randomQuestion: PropTypes.object.isRequired
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#F5F5F5",
    justifyContent: 'center', //Centered vertically
    alignItems: 'center', // Centered horizontally
  },
  button: {
    backgroundColor: "#707070",
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: "center",
    justifyContent: "center",
    width: 208,
    marginTop: 20,
    padding: 10,
  },
});



const mapStateToProps = state => {
  return {
    randomQuestion: state
  };
};

export default connect(mapStateToProps, { fetchQuestion })(Question);
