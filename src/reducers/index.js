import { combineReducers } from "redux";
import {
  SET_API_PENDING,
  SET_API_FULFILLED,
  SET_API_REJECTED,
  QUERY_STRING
} from "../actions/index";

const queryString = (state = "", action) => {
  switch (action.type) {
    case QUERY_STRING:
      return action.payload;
    default:
      return state;
  }
};

const setApiReducerdefaultState = {
  isLoading: true,
  car_details: [],
  err: ""
};

const setApiReducer = (state = setApiReducerdefaultState, action) => {
  switch (action.type) {
    case SET_API_PENDING:
      return setApiReducerdefaultState;
    case SET_API_FULFILLED:
      return {
        isLoading: false,
        car_details: action.payload
      };
    case SET_API_REJECTED:
      return {
        isLoading: false,
        err: action.payload
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  setApiReducer,
  queryString
});

export default rootReducer;
