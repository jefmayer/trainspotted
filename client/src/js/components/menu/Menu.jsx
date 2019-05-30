/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types';

const Menu = ({ menuDisplayClass, onMenuClick }) => (
  <div className={`menu-container ${menuDisplayClass}`}>
    <button className="menu-button" onClick={onMenuClick} type="button">
      <span className="menu-icon">
        <span className="menu-bar" />
        <span className="menu-bar" />
        <span className="menu-bar" />
      </span>
    </button>
    <div className="menu-nav">
      <div>A Nav Item</div>
    </div>
  </div>
);

Menu.propTypes = {
  menuDisplayClass: PropTypes.string.isRequired,
  onMenuClick: PropTypes.func.isRequired,
};

export default Menu;
/* eslint-enable no-console */
