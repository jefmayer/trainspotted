/* eslint-disable no-console */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddEngine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      line: '',
      location: '',
      number: '',
    };
    this.handleLineChange = this.handleLineChange.bind(this);
    this.handleNumberChange = this.handleNumberChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.isEngineValid = this.isEngineValid.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  componentDidUpdate() {
    const { id, updateEngines } = this.props;
    const { line, location, number } = this.state;
    updateEngines(id, this.isEngineValid(), line, location, number);
  }

  handleLineChange(event) {
    this.setState({ line: event.target.value });
  }

  handleNumberChange(event) {
    this.setState({ number: event.target.value });
  }

  handleLocationChange(event) {
    this.setState({ location: event.target.value });
  }

  handleRemove() {
    const { id, removeEngine } = this.props;
    removeEngine(id);
  }

  isEngineValid() {
    const { line, location, number } = this.state;
    if (line === '' || location === '' || number === '') {
      return false;
    }
    return true;
  }

  render() {
    const { trainLineList } = this.props;
    const { line, location, number } = this.state;
    return (
      <div className="flex-row add-engine-row">
        <label className="form-label form-select-label form-label-line" htmlFor="line">
          <span>Line</span>
          <select className="form-select" id="line" name="line" value={line} onChange={this.handleLineChange}>
            <option value="">Select</option>
            {
              trainLineList.map(trainLine => (
                <option value={trainLine.name} key={trainLine.id}>{trainLine.short}</option>
              ))
            }
          </select>
        </label>
        <label className="form-label form-label-number" htmlFor="number">
          <span>Number</span>
          <input className="form-input" id="number" name="number" type="number" value={number} onChange={this.handleNumberChange} />
        </label>
        <label className="form-label form-select-label form-label-location" htmlFor="location">
          <span>Location</span>
          <select className="form-select" id="location" name="location" value={location} onChange={this.handleLocationChange}>
            <option value="">Select</option>
            <option value="front">Front</option>
            <option value="middle">Middle</option>
            <option value="end">End</option>
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
  trainLineList: PropTypes.arrayOf(PropTypes.object),
  updateEngines: PropTypes.func.isRequired,
};

export default AddEngine;
/* eslint-enable no-console */
