/* eslint-disable no-console */
import { combineReducers } from 'redux';
import {
  INVALIDATE_SUBREDDIT,
  REQUEST_POSTS,
  RECEIVE_POSTS,
} from '../actions';


const posts = (state = {
  isFetching: false,
  didInvalidate: false,
  items: [],
}, action) => {
  switch (action.type) {
    case INVALIDATE_SUBREDDIT:
      return {
        ...state,
        didInvalidate: true,
      };
    case REQUEST_POSTS:
      return {
        ...state,
        isFetching: true,
        didInvalidate: false,
      };
    case RECEIVE_POSTS:
      return {
        ...state,
        isFetching: false,
        didInvalidate: false,
        items: action.posts,
        lastUpdated: action.receivedAt,
      };
    default:
      return state;
  }
};

const postsBySubreddit = (state = {
  isFetching: false,
  didInvalidate: false,
  items: [],
}, action) => {
  switch (action.type) {
    case INVALIDATE_SUBREDDIT:
    case RECEIVE_POSTS:
    case REQUEST_POSTS:
      return posts(state, action);
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  postsBySubreddit,
});

export default rootReducer;
/* eslint-enable no-console */
