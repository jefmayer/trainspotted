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
    };
    this.handleUserChange = this.handleUserChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.logout = this.logout.bind(this);
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

  logout() {
    const { dispatch } = this.props;
    dispatch(logout());
  }

  render() {
    const { isLoggedIn, isLoginError } = this.props;
    const { user, password } = this.state;
    console.log(`Is there a login error: ${isLoginError}`);
    return (
      !isLoggedIn
        ? (
          <div>
            <div className="menu-nav-item">Login</div>
            <form className="login-form app-form" onSubmit={this.handleSubmit}>
              <label className="form-label" htmlFor="user">
                <span>Name</span>
                <input className="form-input" id="user" name="user" type="text" value={user} onChange={this.handleUserChange} />
              </label>
              <label className="form-label" htmlFor="password">
                <span>Password</span>
                <input className="form-input" id="password" name="password" type="password" value={password} onChange={this.handlePasswordChange} />
              </label>
              <input className="submit-button" type="submit" value="Login" />
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
