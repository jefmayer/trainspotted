/* eslint-disable no-console */
import { combineReducers } from 'redux';
import {
  REQUEST_ENTRIES,
  RECEIVE_ENTRIES,
  SHOW_DETAIL,
  HIDE_DETAIL,
  SHOW_MENU,
  HIDE_MENU,
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

const menu = (state = {
  isOpen: false,
  isLoggedIn: false,
  items: [
    'About the Project',
    'Contact',
    'Login',
  ],
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

const rootReducer = combineReducers({
  entryData,
  entryDetail,
  menu,
});

export default rootReducer;
/* eslint-enable no-console */
