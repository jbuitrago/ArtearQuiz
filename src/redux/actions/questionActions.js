import {
  FETCHING_QUESTION_REQUEST,
  FETCHING_QUESTION_SUCCESS,
  FETCHING_QUESTION_FAILURE,
  FETCHING_QUESTIONQUIZ_REQUEST,
  FETCHING_QUESTIONQUIZ_SUCCESS,
  FETCHING_QUESTIONQUIZ_FAILURE,
} from "./types";
import { shuffle } from "lodash";
//Question Total
export const fetchingQuestionRequest = () => (
  {
  type: FETCHING_QUESTION_REQUEST,
}

);
export const fetchingQuestionSuccess = json => ({
  type: FETCHING_QUESTION_SUCCESS,
  payload: json,
});
export const fetchingQuestionFailure = error => ({
  type: FETCHING_QUESTION_FAILURE,
  payload: error,
});

//Question Quiz
export const fetchingQuestionQuizRequest = () => (
  {
  type: FETCHING_QUESTIONQUIZ_REQUEST,
}

);
export const fetchingQuestionQuizSuccess = json => ({
  type: FETCHING_QUESTIONQUIZ_SUCCESS,
  payload: json,
});
export const fetchingQuestionQuizFailure = error => ({
  type: FETCHING_QUESTIONQUIZ_FAILURE,
  payload: error,
});

//ALL
export const fetchQuestion = () => {
  return async (dispatch) => {
    dispatch(fetchingQuestionRequest());
    try {
      let response = await fetch("https://5e16456b22b5c600140cf9bf.mockapi.io/api/v1/test");
      let json = await response.json();
      dispatch(fetchingQuestionSuccess(json));
    } catch (error) {
      dispatch(fetchingQuestionFailure(error));
    }
  };
};
//ALL con shuffle
export const fetchQuestionQuiz = () => {
  return async (dispatch) => {
    dispatch(fetchingQuestionQuizRequest());
    try {
      let response = await fetch("https://5e16456b22b5c600140cf9bf.mockapi.io/api/v1/test");
      let json = await response.json();
      dispatch(fetchingQuestionQuizSuccess(shuffle(json)));
    } catch (error) {
      dispatch(fetchingQuestionQuizFailure(error));
    }
  };
};


