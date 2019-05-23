import React from 'react';
import PropTypes from 'prop-types';

const Detail = ({ onDetailClose, id }) => (
  <div className="detail-panel">
    <button type="button" onClick={onDetailClose}>Close</button>
    <div>Detail Content...</div>
    <div>{id}</div>
  </div>
);

Detail.propTypes = {
  onDetailClose: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

export default Detail;
