/* eslint-disable no-console */
export const REQUEST_POSTS = 'REQUEST_ENTRIES';
export const RECEIVE_POSTS = 'RECEIVE_ENTRIES';
export const INVALIDATE_SUBREDDIT = 'INVALIDATE_SUBREDDIT';

export const invalidateSubreddit = subreddit => ({
  type: INVALIDATE_SUBREDDIT,
  subreddit,
});

export const requestPosts = subreddit => ({
  type: REQUEST_POSTS,
  subreddit,
});

export const receivePosts = (subreddit, json) => ({
  type: RECEIVE_POSTS,
  subreddit,
  posts: json,
  receivedAt: Date.now(),
});

export const fetchPosts = subreddit => dispatch => { /* eslint-disable-line arrow-parens */
  dispatch(requestPosts(subreddit));
  return fetch('/getEntries')
    .then(response => response.json())
    .then(json => dispatch(receivePosts(subreddit, json)));
};

const shouldFetchPosts = (state, subreddit) => {
  const posts = state.postsBySubreddit[subreddit];
  if (!posts) {
    return true;
  }
  if (posts.isFetching) {
    return false;
  }
  return posts.didInvalidate;
};

export const fetchPostsIfNeeded = subreddit => (dispatch, getState) => {
  if (shouldFetchPosts(getState(), subreddit)) {
    return dispatch(fetchPosts(subreddit));
  }
  return '';
};

/* eslint-enable no-console */
