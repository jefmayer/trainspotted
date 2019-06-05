/* eslint-disable no-console */
import React, { Component } from 'react';
import PropTypes from 'prop-types';


class AddLine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lineName: '',
      formDisplayClass: 'hidden',
    };
    this.handleLineNameChange = this.handleLineNameChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.displayForm = this.displayForm.bind(this);
  }

  handleLineNameChange(event) {
    this.setState({ lineName: event.target.value });
  }

  handleSubmit(event) {
    const { lineName } = this.state;
    console.log(`${lineName},`);
    event.preventDefault();
  }

  displayForm() {
    const { setActiveMenuItem } = this.props;
    setActiveMenuItem('add-line');
    this.setState({ formDisplayClass: '' });
  }

  render() {
    const { formDisplayClass, lineName } = this.state;
    const errorDisplayClass = 'hidden';
    return (
      <div>
        <button className="menu-nav-item menu-nav-button" onClick={this.displayForm} type="button">Add a Train Line</button>
        <form className={`login-form app-form ${formDisplayClass}`} onSubmit={this.handleSubmit}>
          <label className="form-label form-label-line-name" htmlFor="lineName">
            <span>Name</span>
            <input className="form-input" id="lineName" name="lineName" type="text" value={lineName} onChange={this.handleLineNameChange} />
          </label>
          <div className={`form-error ${errorDisplayClass}`}>There was an error signing in. Please recheck.</div>
        </form>
      </div>
    );
  }
}

AddLine.propTypes = {
  setActiveMenuItem: PropTypes.func.isRequired,
};

export default AddLine;
/* eslint-enable no-console */
