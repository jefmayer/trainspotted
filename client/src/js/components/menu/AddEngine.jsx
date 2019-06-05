/* eslint-disable no-console */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
    this.handleRemove = this.handleRemove.bind(this);
  }

  componentDidUpdate() {
    const { id, updateEngines } = this.props;
    const { line, number, position } = this.state;
    updateEngines(id, { line, number, position });
  }

  handleLineChange(event) {
    this.setState({ line: event.target.value });
  }

  handleNumberChange(event) {
    this.setState({ number: event.target.value });
  }

  handlePositionChange(event) {
    this.setState({ position: event.target.value });
  }

  handleRemove() {
    const { id, removeEngine } = this.props;
    removeEngine(id);
  }

  render() {
    const { line, number, position } = this.state;
    return (
      <div className="flex-row add-engine-row">
        <label className="form-label form-select-label form-label-line" htmlFor="line">
          <span>Line</span>
          <select className="form-select" id="line" name="line" value={line} onChange={this.handleLineChange}>
            <option>Select</option>
            <option>CP</option>
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
        <button className="remove-button" type="button" onClick={this.handleRemove} />
      </div>
    );
  }
}

AddEngine.propTypes = {
  id: PropTypes.string.isRequired,
  removeEngine: PropTypes.func.isRequired,
  updateEngines: PropTypes.func.isRequired,
};

export default AddEngine;
/* eslint-enable no-console */
