/* eslint-disable no-console */
import { combineReducers } from 'redux';
import {
  REQUEST_ENTRIES,
  RECEIVE_ENTRIES,
} from '../actions';


const entryDataReducer = (state = {
  isFetching: false,
  items: [],
}, action) => {
  switch (action.type) {
    case REQUEST_ENTRIES:
      return {
        ...state,
        isFetching: true,
      };
    case RECEIVE_ENTRIES:
      return {
        ...state,
        isFetching: false,
        items: action.data,
        lastUpdated: action.receivedAt,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  entryDataReducer,
});

export default rootReducer;
/* eslint-enable no-console */
