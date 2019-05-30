/* eslint-disable no-console */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.divRef = React.createRef();
  }

  componentDidUpdate() {
    const { menuDisplayClass } = this.props;
    if (menuDisplayClass === 'closed') {
      const timer = setTimeout(() => {
        this.divRef.current.setAttribute('style', 'position:absolute;');
        clearTimeout(timer);
      }, 150);
    } else {
      this.divRef.current.setAttribute('style', 'position:fixed;');
    }
  }

  render() {
    const { menuDisplayClass, navItems, onMenuClick } = this.props;
    return (
      <div className={`menu-container ${menuDisplayClass}`} ref={this.divRef}>
        <button className="menu-button" onClick={onMenuClick} type="button">
          <span className="menu-icon">
            <span className="menu-bar" />
            <span className="menu-bar" />
            <span className="menu-bar" />
          </span>
        </button>
        <div className="menu-nav">
          <div className="menu-nav-inner">
            {
              navItems.map(nav => (
                <button className="menu-nav-item" key={nav} type="button">{nav}</button>
              ))
            }
          </div>
        </div>
      </div>
    );
  }
}

Menu.propTypes = {
  menuDisplayClass: PropTypes.string.isRequired,
  onMenuClick: PropTypes.func.isRequired,
  navItems: PropTypes.arrayOf(PropTypes.string),
};

export default Menu;
/* eslint-enable no-console */
