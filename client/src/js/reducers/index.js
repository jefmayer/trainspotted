/* eslint-disable no-console */
import { combineReducers } from 'redux';
import {
  REQUEST_ENTRIES,
  RECEIVE_ENTRIES,
  SHOW_DETAIL,
  HIDE_DETAIL,
} from '../actions';


const entryData = (state = {
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
      };
    default:
      return state;
  }
};

const entryDetail = (state = {
  isOpen: false,
  id: '',
}, action) => {
  switch (action.type) {
    case SHOW_DETAIL:
      return {
        ...state,
        isOpen: true,
        id: action.data,
      };
    case HIDE_DETAIL:
      return {
        ...state,
        isOpen: false,
        id: action.data,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  entryData,
  entryDetail,
});

export default rootReducer;
/* eslint-enable no-console */
