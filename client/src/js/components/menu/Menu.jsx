/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types';

const Menu = ({ menuDisplayClass, onMenuClick }) => (
  <div className={`menu-container ${menuDisplayClass}`}>
    <div className="menu-button" role="none" onClick={onMenuClick}>
      <span className="menu-button-inner">
        <span className="menu-icon">
          <span className="menu-bar" />
          <span className="menu-bar" />
          <span className="menu-bar" />
        </span>
        <span className="close-icon">
          <span className="menu-bar" />
          <span className="menu-bar" />
        </span>
      </span>
    </div>
    <div className="menu-nav" />
  </div>
);

Menu.propTypes = {
  menuDisplayClass: PropTypes.string.isRequired,
  onMenuClick: PropTypes.func.isRequired,
};

export default Menu;
/* eslint-enable no-console */
