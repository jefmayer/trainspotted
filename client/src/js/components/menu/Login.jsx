/* eslint-disable no-console */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { login, logout } from '../../actions';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      password: '',
      formDisplayClass: 'hidden',
    };
    this.handleUserChange = this.handleUserChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.logout = this.logout.bind(this);
    this.displayLoginForm = this.displayLoginForm.bind(this);
  }

  handleUserChange(event) {
    console.log(event);
    this.setState({ user: event.target.value });
  }

  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  handleSubmit(event) {
    const { dispatch } = this.props;
    const { user, password } = this.state;
    event.preventDefault();
    dispatch(login({ user, password })); /* eslint-disable-line no-underscore-dangle */
  }

  displayLoginForm() {
    this.setState({ formDisplayClass: '' });
  }

  logout() {
    const { dispatch } = this.props;
    this.setState({ formDisplayClass: 'hidden' });
    // Clear inputs
    dispatch(logout());
  }

  render() {
    const { isLoggedIn, isLoginError } = this.props;
    const { user, password, formDisplayClass } = this.state;
    let errorDisplayClass = 'hidden';
    if (isLoginError) {
      errorDisplayClass = '';
    }
    return (
      !isLoggedIn
        ? (
          <div>
            <button className="menu-nav-item" onClick={this.displayLoginForm} type="button">Login</button>
            <form className={`login-form app-form ${formDisplayClass}`} onSubmit={this.handleSubmit}>
              <label className="form-label" htmlFor="user">
                <span>Name</span>
                <input className="form-input" id="user" name="user" type="text" value={user} onChange={this.handleUserChange} />
              </label>
              <label className="form-label" htmlFor="password">
                <span>Password</span>
                <input className="form-input" id="password" name="password" type="password" value={password} onChange={this.handlePasswordChange} />
              </label>
              <input className="submit-button" type="submit" value="Login" />
              <div className={`form-error ${errorDisplayClass}`}>There was an error signing in. Please recheck.</div>
            </form>
          </div>
        ) : (
          <button className="menu-nav-item" type="button" onClick={this.logout}>Logout</button>
        )
    );
  }
}

Login.propTypes = {
  dispatch: PropTypes.func,
  isLoggedIn: PropTypes.bool.isRequired,
  isLoginError: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => {
  const { userStatus } = state;
  const {
    isLoggedIn,
    isLoginError,
  } = userStatus;
  return {
    isLoggedIn,
    isLoginError,
  };
};

export default connect(mapStateToProps)(Login);
/* eslint-enable no-console */
