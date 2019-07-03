/* eslint-disable no-console */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AddEngine from './AddEngine';
import { addEntry } from '../../actions';
import { createEntryId, formatDateForDB, formatTimeForDB, formatDateForSelect, formatTimeForSelect } from '../../utils/Formatting';

class AddEntry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
      direction: 'north',
      idIter: 0,
      isEntryValid: true,
      engines: [{
        id: 'engine-no-0',
        line: '',
        number: '',
        location: '',
        isValid: false,
      }],
      time: '',
    };
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleTimeChange = this.handleTimeChange.bind(this);
    this.handleDirectionChange = this.handleDirectionChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.displayForm = this.displayForm.bind(this);
    this.addEngine = this.addEngine.bind(this);
    this.removeEngine = this.removeEngine.bind(this);
    this.updateEngines = this.updateEngines.bind(this);
    this.reset = this.reset.bind(this);
  }

  componentDidMount() {
    const today = new Date();
    this.setState({
      date: formatDateForSelect(today),
      time: formatTimeForSelect(today),
    });
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
    const { dispatch } = this.props;
    const { date, direction, engines, time } = this.state;
    let isValid = true;
    event.preventDefault();
    engines.forEach((engine) => {
      if (!engine.isValid) {
        isValid = false;
      }
    });
    if (isValid) {
      dispatch(addEntry({
        date: formatDateForDB(date),
        direction,
        engines: engines.map((engine, index) => (
          {
            line: engine.line,
            number: engine.number,
            order: index + 1,
            location: engine.location,
          }
        )),
        id: createEntryId(date, time),
        time: formatTimeForDB(time),
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
    const today = new Date();
    this.setState({
      date: formatDateForSelect(today),
      direction: 'north',
      idIter: 0,
      isEntryValid: true,
      engines: [{
        id: 'engine-no-0',
        line: '',
        number: '',
        location: '',
        isValid: false,
      }],
      time: formatTimeForSelect(today),
    });
  }

  displayForm() {
    const { setActiveMenuItem } = this.props;
    setActiveMenuItem('add-entry');
  }

  addEngine() {
    const { engines, idIter } = this.state;
    const id = idIter + 1;
    engines.push({
      id: `engine-no-${id}`,
      line: '',
      number: '',
      location: '',
      isValid: false,
    });
    this.setState({ idIter: id });
    this.setState({ engines });
  }

  removeEngine(id) {
    const { engines } = this.state;
    const index = engines.findIndex(engine => engine.id === id);
    engines.splice(index, 1);
    this.setState({ engines });
  }

  updateEngines(id, isValid, line, location, number) {
    const { engines } = this.state;
    const item = engines.find(engine => engine.id === id);
    if (item !== null) {
      item.line = line;
      item.location = location;
      item.number = number;
      item.isValid = isValid;
    }
  }

  render() {
    const { isActive, trainLineList } = this.props;
    const { date, direction, engines, isEntryValid, time } = this.state;
    let errorDisplayClass = 'hidden';
    if (!isEntryValid) {
      errorDisplayClass = '';
    }
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
                <option value="north">North</option>
                <option value="south">South</option>
              </select>
            </label>
          </div>
          {
            engines.map(engine => (
              <AddEngine
                id={engine.id}
                key={engine.id}
                line={engine.line}
                location={engine.location}
                number={engine.number}
                removeEngine={this.removeEngine}
                trainLineList={trainLineList}
                updateEngines={this.updateEngines}
              />
            ))
          }
          <button className="text-button add-engine-button" type="button" onClick={this.addEngine}>Add Another Engine</button>
          <div className="form-action-buttons">
            <button className="submit-button add-button" type="submit">Add Entry</button>
            <button className="cancel-button" type="button" onClick={this.handleCancel} />
          </div>
          <div className={`form-error ${errorDisplayClass}`}>There was an error adding the entry. Please try again.</div>
        </form>
      </div>
    );
  }
}

AddEntry.propTypes = {
  dispatch: PropTypes.func,
  isActive: PropTypes.bool.isRequired,
  setActiveMenuItem: PropTypes.func.isRequired,
  trainLineList: PropTypes.arrayOf(PropTypes.object),
};

const mapStateToProps = (state) => {
  const { trainLines } = state;
  const {
    items: trainLineList,
  } = trainLines;
  return {
    trainLineList,
  };
};

export default connect(mapStateToProps)(AddEntry);
/* eslint-enable no-console */
