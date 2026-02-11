/* eslint-disable no-console */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import About from './About';
import AddEntry from './AddEntry';
import AddLine from './AddLine';
import Contact from './Contact';
import Login from './Login';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeMenuItem: '',
    };
    this.divRef = React.createRef();
    this.setActiveMenuItem = this.setActiveMenuItem.bind(this);
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

  setActiveMenuItem(name) {
    this.setState({ activeMenuItem: name });
  }

  render() {
    const { activeMenuItem } = this.state;
    const { isLoggedIn, menuDisplayClass, onMenuClick } = this.props;
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
            <About />
            <Contact />
            {isLoggedIn
              && (
                <div>
                  <AddEntry
                    setActiveMenuItem={this.setActiveMenuItem}
                    isActive={activeMenuItem === 'add-entry'}
                  />
                  <AddLine
                    setActiveMenuItem={this.setActiveMenuItem}
                    isActive={activeMenuItem === 'add-line'}
                  />
                </div>
              )
            }
            <Login
              setActiveMenuItem={this.setActiveMenuItem}
              isActive={activeMenuItem === 'login'}
            />
          </div>
        </div>
      </div>
    );
  }
}

Menu.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  menuDisplayClass: PropTypes.string.isRequired,
  onMenuClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  const { userStatus } = state;
  const {
    isLoggedIn,
  } = userStatus;
  return {
    isLoggedIn,
  };
};

export default connect(mapStateToProps)(Menu);
/* eslint-enable no-console */
