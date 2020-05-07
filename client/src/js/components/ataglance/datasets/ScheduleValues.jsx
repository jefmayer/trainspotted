/* eslint-disable no-console, no-useless-constructor, react/prefer-stateless-function */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import weekdays from '../../../utils/Weekdays';
import { getRandomNumberKey } from '../../../utils/Formatting';
import { groupAllEntriesByDayAndTime } from '../../../selectors';

class ScheduleValues extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { dataSet, entries } = this.props;
    return (
      <div className="data-table schedule-values-table">
        <div className="table-title">
          <h3>Times during the week when the various freight train lines have been observed</h3>
        </div>
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
              const groupStyle = {
                left: entry.time,
                top: `${40 * entry.day}px`,
              };
              return (
                <button
                  className="line-group"
                  key={getRandomNumberKey()}
                  style={groupStyle}
                  type="button"
                >
                  {
                    entry.values.map((line) => {
                      const itemStyle = {
                        backgroundColor: line.color,
                        height: line.occurance,
                      };
                      return (
                        <div
                          className="line-group-item"
                          key={getRandomNumberKey()}
                          style={itemStyle}
                        />
                      );
                    })
                  }
                </button>
              );
            })
          }
        </div>
      </div>
    );
  }
}

ScheduleValues.defaultProps = {
  dataSet: ['12 AM', '2 AM', '4AM', '6 AM', '8 AM', ' 10 AM', '12 PM', '2 PM', '4 PM', '6 PM', '8 PM', '10 PM', '12 AM'],
};

ScheduleValues.propTypes = {
  dataSet: PropTypes.arrayOf(PropTypes.string),
  entries: PropTypes.arrayOf(PropTypes.object),
};

const mapStateToProps = (state) => {
  const entries = groupAllEntriesByDayAndTime(state);
  return {
    entries,
  };
};

export default connect(mapStateToProps)(ScheduleValues);
/* eslint-enable no-console, no-useless-constructor, react/prefer-stateless-function */
