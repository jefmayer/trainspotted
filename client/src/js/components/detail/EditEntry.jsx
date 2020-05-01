/* eslint-disable no-console */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AddEngine from '../menu/AddEngine';
import { addEntry, removeEntry } from '../../actions';
import { createEntryId, formatDateForDB, formatTimeForDB, formatDateForSelect, formatTimeForSelect } from '../../utils/Formatting';

class EditEntry extends Component {
  constructor(props) {
    super(props);
    const { entryData } = this.props;
    // Map id property to engine objects
    entryData.engines = entryData.engines.map((engine, index) => ({ ...engine, id: `engine-no-${index}` }));
    // State defaults
    this.state = {
      date: formatDateForSelect(new Date(entryData.date)),
      direction: entryData.direction,
      engines: entryData.engines,
      idIter: entryData.engines.length,
      isActive: false,
      isEntryValid: true,
      notes: entryData.notes,
      time: formatTimeForSelect(entryData.time),
    };
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleTimeChange = this.handleTimeChange.bind(this);
    this.handleDirectionChange = this.handleDirectionChange.bind(this);
    this.handleNotesChange = this.handleNotesChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.showForm = this.showForm.bind(this);
    this.hideForm = this.hideForm.bind(this);
    this.addEngine = this.addEngine.bind(this);
    this.removeEngine = this.removeEngine.bind(this);
    this.updateEngines = this.updateEngines.bind(this);
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

  handleNotesChange(event) {
    this.setState({ notes: event.target.value });
  }

  handleSubmit(event) {
    const { dispatch } = this.props;
    const { date, direction, engines, notes, time } = this.state;
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
        notes,
        time: formatTimeForDB(time),
      }));
      this.hideForm();
    }
    this.setState({ isEntryValid: isValid });
  }

  handleCancel() {
    this.hideForm();
  }

  handleRemove() {
    const { dispatch, entryData } = this.props;
    this.hideForm();
    dispatch(removeEntry({
      id: entryData._id, /* eslint-disable-line no-underscore-dangle */
    }));
  }

  showForm() {
    this.setState({ isActive: true });
  }

  hideForm() {
    this.setState({ isActive: false });
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
    const { trainLineList } = this.props;
    const {
      date,
      direction,
      engines,
      isActive,
      isEntryValid,
      notes,
      time,
    } = this.state;

    let errorDisplayClass = 'hidden';
    if (!isEntryValid) {
      errorDisplayClass = '';
    }
    return (
      <div className="form-wrapper">
        {
          isActive
            ? (
              <button className="edit-entry-button" onClick={this.hideForm} type="button">
                <div>
                  <span className="text-button">Close Edit</span>
                </div>
              </button>
            ) : (
              <button className="edit-entry-button" onClick={this.showForm} type="button">
                <div>
                  <span className="text-button">Edit Entry</span>
                </div>
              </button>
            )
        }
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
          <label className="form-label form-label-notes" htmlFor="notes">
            <span>Notes</span>
            <textarea className="form-textarea" id="notes" name="notes" value={notes} onChange={this.handleNotesChange} />
          </label>
          <div className="form-action-buttons">
            <button className="submit-button" type="submit">Update Entry</button>
            <button className="urgent-button" type="button" onClick={this.handleRemove}>Remove Entry</button>
          </div>
          <div className={`form-error ${errorDisplayClass}`}>There was an error updating the entry. Please try again.</div>
        </form>
      </div>
    );
  }
}

EditEntry.propTypes = {
  dispatch: PropTypes.func,
  entryData: PropTypes.shape({
    date: PropTypes.string,
    direction: PropTypes.string,
    engines: PropTypes.arrayOf(PropTypes.object),
    id: PropTypes.string,
    notes: PropTypes.string,
    number: PropTypes.number,
    time: PropTypes.string,
    _id: PropTypes.string,
  }),
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

export default connect(mapStateToProps)(EditEntry);
/* eslint-enable no-console */
