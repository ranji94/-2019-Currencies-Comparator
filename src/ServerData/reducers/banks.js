  
import * as actions from '../actions/banks-actions';

export const banks = (state = [], action) => {
  switch (action.type) {
    case actions.GET_DATA_REQUESTED:
      return { ...state, isLoading: true };
    case actions.GET_DATA_DONE:
      return { ...state, isLoading: false, banks: action.payload };
    case actions.GET_DATA_FAILED:
      return { ...state, isLoading: false, isError: true }
    default:
      return state;
  }
};

export default banks