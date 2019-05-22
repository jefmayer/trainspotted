import React from 'react';
import PropTypes from 'prop-types';

const Detail = ({ closeDetailHandler, detail }) => (
  <div>
    <button type="button" onClick={closeDetailHandler}>Close</button>
    <div>Detail Content...</div>
    <div>{ detail }</div>
  </div>
);

Detail.propTypes = {
  closeDetailHandler: PropTypes.func,
  detail: PropTypes.shape({
    active: PropTypes.bool,
    data: PropTypes.shape(PropTypes.object),
  }),
};

export default Detail;
