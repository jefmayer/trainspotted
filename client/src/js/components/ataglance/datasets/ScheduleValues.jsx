/* eslint-disable no-console, no-useless-constructor, react/prefer-stateless-function */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import weekdays from '../../../utils/Weekdays';
import { getRandomNumberKey } from '../../../utils/Formatting';
import { convertTimeToMinutesElapsed } from '../../../utils/DateUtils';
import { getAllEntriesWithDayAndTime } from '../../../selectors';

class ScheduleValues extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { dataSet, entries } = this.props;
    console.log(entries[0]);
    return (
      <div className="data-table schedule-values-table">
        <div className="y-axis">
          {
            weekdays.map(day => (
              <div className="y-axis-row" key={day.index}>
                <div className="row-label">{day.full}</div>
                <div className="row-axis" />
              </div>
            ))
          }
        </div>
        <div className="x-axis">
          <div className="data-set">
            <ul className="data-set-values">
              {
                dataSet.map(item => (
                  <li key={getRandomNumberKey()}>{item}</li>
                ))
              }
            </ul>
          </div>
        </div>
        <div className="scatterplot">
          {
            entries.map((entry) => {
              /* function onEntryClick() {
                dispatch(showDetail(entry.entryId));
              } */
              // console.log(`${Math.round(convertTimeToMinutesElapsed(entry.time))}/1440`);
              const bgStyle = {
                backgroundColor: entry.color,
                left: `${Math.round(convertTimeToMinutesElapsed(entry.time) / 14.4)}%`,
                top: `${38 * entry.day}px`,
                marginTop: `${entry.offset * 3}px`,
              };
              return (
                <div
                  className="sighting-marker"
                  // onClick={onEntryClick}
                  // onKeyDown={onEntryClick}
                  key={getRandomNumberKey()}
                  style={bgStyle}
                  type="button"
                />
              );
            })
          }
        </div>
      </div>
    );
  }
}

ScheduleValues.defaultProps = {
  dataSet: ['12 AM', '2 AM', '4AM', '6 AM', '8 AM', ' 10 AM', '12 PM', '2 PM', '4 PM', '6 PM', '8 PM', '10 PM'],
};

ScheduleValues.propTypes = {
  dataSet: PropTypes.arrayOf(PropTypes.string),
  entries: PropTypes.arrayOf(PropTypes.object),
};

const mapStateToProps = (state) => {
  const entries = getAllEntriesWithDayAndTime(state);
  return {
    entries,
  };
};

export default connect(mapStateToProps)(ScheduleValues);
/* eslint-enable no-console, no-useless-constructor, react/prefer-stateless-function */
