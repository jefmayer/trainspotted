/* eslint-disable no-console */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AddEngine from './AddEngine';

class AddEntry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
      direction: '',
      engines: [...Array(1)],
      time: '',
    };
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleTimeChange = this.handleTimeChange.bind(this);
    this.handleDirectionChange = this.handleDirectionChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.displayForm = this.displayForm.bind(this);
    this.addEngine = this.addEngine.bind(this);
  }

  componentDidMount() {
    const today = new Date();
    let date = today.getDate().toString();
    if (date.length === 1) {
      date = `0${date}`;
    }
    let month = (today.getMonth() + 1).toString();
    if (month.length === 1) {
      month = `0${month}`;
    }
    this.setState({ date: `${today.getFullYear()}-${month}-${date}` });
    let hours = today.getHours().toString();
    if (hours.length === 1) {
      hours = `0${hours}`;
    }
    let mins = today.getMinutes().toString();
    if (mins.length === 1) {
      mins = `0${mins}`;
    }
    this.setState({ time: `${hours}:${mins}` });
  }

  handleDateChange(event) {
    this.setState({ date: event.target.value });
  }

  handleTimeChange(event) {
    this.setState({ time: event.target.value });
  }

  handleDirectionChange(event) {
    this.setState({ direction: event.target.value });
  }

  handleSubmit(event) {
    const { date, direction, time } = this.state;
    console.log(`${date}, ${time}, ${direction}`);
    event.preventDefault();
  }

  displayForm() {
    const { setActiveMenuItem } = this.props;
    setActiveMenuItem('add-entry');
  }

  addEngine() {
    const { engines } = this.state;
    engines.push([...Array(1)]);
    console.log(engines.length);
    this.setState({ engines });
  }

  render() {
    const { isActive } = this.props;
    const { date, direction, engines, time } = this.state;
    const errorDisplayClass = 'hidden';
    console.log(isActive);
    return (
      <div>
        <button className="menu-nav-item menu-nav-button" onClick={this.displayForm} type="button">Add an Entry</button>
        <form className={`login-form app-form ${isActive ? '' : 'hidden'}`} onSubmit={this.handleSubmit}>
          <label className="form-label form-label-date" htmlFor="date">
            <span>Date</span>
            <input className="form-input" id="date" name="date" type="date" value={date} onChange={this.handleDateChange} />
          </label>
          <div className="flex-row">
            <label className="form-label form-label-time" htmlFor="time">
              <span>Time</span>
              <input className="form-input" id="time" name="time" type="time" value={time} onChange={this.handleTimeChange} />
            </label>
            <label className="form-label form-select-label form-label-direction" htmlFor="direction">
              <span>Direction</span>
              <select className="form-select" id="direction" name="direction" value={direction} onChange={this.handleDirectionChange}>
                <option>North</option>
                <option>South</option>
              </select>
            </label>
          </div>
          {
            engines.map((engine, index) => {
              const key = `engine-no-${index}`;
              console.log(engine);
              return (
                <AddEngine key={key} />
              );
            })
          }
          <button className="text-button add-engine-button" type="button" onClick={this.addEngine}>Add Another Engine</button>
          <div className="form-action-buttons">
            <button className="submit-button add-button" type="submit">Add Entry</button>
            <button className="cancel-button" type="button" />
          </div>
          <div className={`form-error ${errorDisplayClass}`}>There was an error signing in. Please recheck.</div>
        </form>
      </div>
    );
  }
}

AddEntry.propTypes = {
  isActive: PropTypes.bool.isRequired,
  setActiveMenuItem: PropTypes.func.isRequired,
};

export default AddEntry;
/* eslint-enable no-console */
