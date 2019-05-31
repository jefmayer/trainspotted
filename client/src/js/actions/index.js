/* eslint-disable no-console */
export const REQUEST_ENTRIES = 'REQUEST_ENTRIES';
export const RECEIVE_ENTRIES = 'RECEIVE_ENTRIES';
export const SHOW_DETAIL = 'SHOW_DETAIL';
export const HIDE_DETAIL = 'HIDE_DETAIL';
export const SHOW_MENU = 'SHOW_MENU';
export const HIDE_MENU = 'HIDE_MENU';
export const LOG_IN = 'LOG_IN';
export const LOG_OUT = 'LOG_OUT';

export const requestEntries = () => ({
  type: REQUEST_ENTRIES,
});

export const receiveEntries = json => ({
  type: RECEIVE_ENTRIES,
  data: json,
});

export const fetchEntries = () => dispatch => { /* eslint-disable-line arrow-parens */
  dispatch(requestEntries());
  return fetch('/getEntries')
    .then(response => response.json())
    .then(json => dispatch(receiveEntries(json)));
};

export const showDetail = id => ({
  type: SHOW_DETAIL,
  data: id,
});

export const hideDetail = () => ({
  type: HIDE_DETAIL,
});

export const showMenu = () => ({
  type: SHOW_MENU,
});

export const hideMenu = () => ({
  type: HIDE_MENU,
});

export const loginAttempt = json => ({
  type: LOG_IN,
  data: json,
});

export const login = ({ user, password }) => dispatch => { /* eslint-disable-line arrow-parens */
  dispatch(requestEntries());
  return fetch('/login', {
    method: 'POST',
    headers: new Headers({
      Accept: 'application/json',
      'Content-Type': 'application/json',
    }),
    body: JSON.stringify({
      user,
      password,
    }),
  })
    .then(response => response.json())
    .then(json => dispatch(loginAttempt(json)));
};

export const logout = () => ({
  type: LOG_OUT,
});
/* eslint-enable no-console */
