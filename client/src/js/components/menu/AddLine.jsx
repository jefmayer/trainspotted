/* eslint-disable no-console */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addTrainLine } from '../../actions';

class AddLine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lineName: '',
      isEntryValid: true,
    };
    this.handleLineNameChange = this.handleLineNameChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.displayForm = this.displayForm.bind(this);
  }

  handleLineNameChange(event) {
    this.setState({ lineName: event.target.value });
  }

  handleSubmit(event) {
    const { dispatch } = this.props;
    const { lineName } = this.state;
    console.log(`${lineName},`);
    let isValid = true;
    event.preventDefault();
    if (lineName === '') {
      isValid = false;
    }
    if (isValid) {
      dispatch(addTrainLine({
        lineName,
      }));
      // Should wait for callback...
      this.reset();
    }
    this.setState({ isEntryValid: isValid });
  }

  handleCancel(event) {
    event.preventDefault();
    this.reset();
  }

  reset() {
    this.setState({
      lineName: '',
    });
  }

  displayForm() {
    const { setActiveMenuItem } = this.props;
    setActiveMenuItem('add-line');
  }

  render() {
    const { isActive } = this.props;
    const { lineName, isEntryValid } = this.state;
    let errorDisplayClass = 'hidden';
    if (!isEntryValid) {
      errorDisplayClass = '';
    }
    return (
      <div>
        <button className="menu-nav-item menu-nav-button" onClick={this.displayForm} type="button">Add a Train Line</button>
        <form className={`login-form app-form ${isActive ? '' : 'hidden'}`} onSubmit={this.handleSubmit}>
          <label className="form-label form-label-line-name" htmlFor="lineName">
            <span>Name</span>
            <input className="form-input" id="lineName" name="lineName" type="text" value={lineName} onChange={this.handleLineNameChange} />
          </label>
          <div className="form-action-buttons">
            <button className="submit-button add-button" type="submit">Add Train Line</button>
            <button className="cancel-button" type="button" onClick={this.handleCancel} />
          </div>
          <div className={`form-error ${errorDisplayClass}`}>There was an error signing in. Please recheck.</div>
        </form>
      </div>
    );
  }
}

AddLine.propTypes = {
  dispatch: PropTypes.func,
  isActive: PropTypes.bool.isRequired,
  setActiveMenuItem: PropTypes.func.isRequired,
};

export default connect()(AddLine);
/* eslint-enable no-console */
