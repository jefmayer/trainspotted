/* eslint-disable react/prefer-stateless-function, prefer-destructuring */
import React from 'react';
import PropTypes from 'prop-types';

const Entry = ({ entry }) => (
  <div>
    {entry.date}
  </div>
);

Entry.propTypes = {
  entry: PropTypes.shape({
    date: PropTypes.string.isRequired,
  }),
};

export default Entry;
/* eslint-enable react/prefer-stateless-function, prefer-destructuring */
