/* eslint-disable no-console */
import React, { Component } from 'react';

class AddEngine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      line: '',
      number: '',
      position: '',
    };
    this.handleLineChange = this.handleLineChange.bind(this);
    this.handleNumberChange = this.handleNumberChange.bind(this);
    this.handlePositionChange = this.handlePositionChange.bind(this);
  }

  handleLineChange(event) {
    console.log(event);
    this.setState({ line: event.target.value });
  }

  handleNumberChange(event) {
    console.log(event);
    this.setState({ number: event.target.value });
  }

  handlePositionChange(event) {
    console.log(event);
    this.setState({ position: event.target.value });
  }

  render() {
    const { line, number, position } = this.state;
    return (
      <div className="flex-row add-engine-row">
        <label className="form-label form-select-label form-label-line" htmlFor="line">
          <span>Line</span>
          <select className="form-select" id="line" name="line" value={line} onChange={this.handleLineChange}>
            <option>Select</option>
            <option>Canadian Pacific</option>
          </select>
        </label>
        <label className="form-label form-label-number" htmlFor="number">
          <span>Number</span>
          <input className="form-input" id="number" name="number" type="number" value={number} onChange={this.handleNumberChange} />
        </label>
        <label className="form-label form-select-label form-label-position" htmlFor="position">
          <span>Position</span>
          <select className="form-select" id="position" name="position" value={position} onChange={this.handlePositionChange}>
            <option>Select</option>
            <option>Front</option>
            <option>Middle</option>
            <option>End</option>
          </select>
        </label>
      </div>
    );
  }
}

export default AddEngine;
/* eslint-enable no-console */
