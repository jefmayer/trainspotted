/* eslint-disable no-console */
export const REQUEST_ENTRIES = 'REQUEST_ENTRIES';
export const RECEIVE_ENTRIES = 'RECEIVE_ENTRIES';

export const requestEntries = () => ({
  type: REQUEST_ENTRIES,
});

export const receiveEntries = json => ({
  type: RECEIVE_ENTRIES,
  data: json,
  receivedAt: Date.now(),
});

export const fetchEntries = () => dispatch => { /* eslint-disable-line arrow-parens */
  dispatch(requestEntries());
  return fetch('/getEntries')
    .then(response => response.json())
    .then(json => dispatch(receiveEntries(json)));
};
/* eslint-enable no-console */
