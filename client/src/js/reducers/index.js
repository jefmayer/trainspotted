/* eslint-disable no-console */
import { combineReducers } from 'redux';
import {
  REQUEST_ENTRIES,
  RECEIVE_ENTRIES,
  REQUEST_TRAIN_LINES,
  RECEIVE_TRAIN_LINES,
  SUBMIT_ENTRY,
  ENTRY_ADDED,
  SHOW_DETAIL,
  HIDE_DETAIL,
  SHOW_MENU,
  HIDE_MENU,
  LOG_IN,
  LOG_OUT,
} from '../actions';


const entryData = (state = {
  isFetching: false,
  items: [],
}, action) => {
  switch (action.type) {
    case REQUEST_ENTRIES:
    case SUBMIT_ENTRY:
      return {
        ...state,
        isFetching: true,
      };
    case RECEIVE_ENTRIES:
    case ENTRY_ADDED:
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

const menu = (state = {
  isOpen: false,
}, action) => {
  switch (action.type) {
    case SHOW_MENU:
      return {
        ...state,
        isOpen: true,
      };
    case HIDE_MENU:
      return {
        ...state,
        isOpen: false,
      };
    default:
      return state;
  }
};

const userStatus = (state = {
  isLoggedIn: false,
  isLoginError: false,
  response: [{ success: 'error' }],
}, action) => {
  switch (action.type) {
    case LOG_IN:
      if (action.data[0].success === 'success') {
        return {
          ...state,
          isLoggedIn: true,
          isLoginError: false,
          response: action.data,
        };
      }
      return {
        ...state,
        isLoggedIn: false,
        isLoginError: true,
        response: action.data,
      };
    case LOG_OUT:
      return {
        ...state,
        isLoggedIn: false,
      };
    default:
      return state;
  }
};

const trainLines = (state = {
  isFetching: false,
  items: [],
}, action) => {
  switch (action.type) {
    case REQUEST_TRAIN_LINES:
      return {
        ...state,
        isFetching: true,
      };
    case RECEIVE_TRAIN_LINES:
      return {
        ...state,
        isFetching: false,
        items: action.data,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  entryData,
  entryDetail,
  menu,
  trainLines,
  userStatus,
});

export default rootReducer;
/* eslint-enable no-console */
