import {
  FETCHING_QUESTION_REQUEST,
  FETCHING_QUESTION_SUCCESS,
  FETCHING_QUESTION_FAILURE,
  FETCHING_QUESTIONQUIZ_REQUEST,
  FETCHING_QUESTIONQUIZ_SUCCESS,
  FETCHING_QUESTIONQUIZ_FAILURE,
} from "../actions/types";

const initialState = {
  isFetching: false,
  errorMessage: "",
  questions: [],
};


const questionReducer = (state = initialState, action) => {

  switch (action.type) {
    case FETCHING_QUESTION_REQUEST:
      return { ...state, isFetching: true };
    case FETCHING_QUESTION_FAILURE:
      return { ...state, isFetching: false, errorMessage: action.payload };
    case FETCHING_QUESTION_SUCCESS:
      return { ...state, isFetching: false, questions: action.payload };
     case FETCHING_QUESTIONQUIZ_REQUEST:
      return { ...state, isFetching: true };
    case FETCHING_QUESTIONQUIZ_FAILURE:
      return { ...state, isFetching: false, errorMessage: action.payload };
    case FETCHING_QUESTIONQUIZ_SUCCESS:
      return { ...state, isFetching: false, questions: action.payload };
           
    default:
      return state;
  }
};


export default questionReducer;


