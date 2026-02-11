/* eslint-disable no-console */
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import weekdays from '../../../utils/Weekdays';
import { getTimeFromPercentage } from '../../../utils/DateUtils';
import { getRandomNumberKey } from '../../../utils/Formatting';
import { showDetail } from '../../../actions';
import { groupAllEntriesByDayAndTime } from '../../../selectors';

class ScheduleValues extends Component {
  constructor(props) {
    super(props);
    this.onEntryClick = this.onEntryClick.bind(this);
  }

  onEntryClick(entry) {
    const { dispatch } = this.props;
    dispatch(showDetail({
      day: weekdays.find(day => day.index === entry.day).full,
      startTime: getTimeFromPercentage(`${parseInt(entry.percentTime, 10) - 0.5}%`),
      endTime: getTimeFromPercentage(`${parseInt(entry.percentTime, 10) + 0.5}%`),
      engines: entry.engines,
    }, 'engine'));
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
                left: entry.percentTime,
                top: `${40 * entry.day}px`,
              };
              return (
                <button
                  className="line-group"
                  onClick={() => this.onEntryClick(entry)}
                  key={getRandomNumberKey()}
                  style={groupStyle}
                  type="button"
                >
                  {
                    entry.values.map((line) => {
                      const itemStyle = {
                        backgroundColor: line.color,
                        flex: line.occurance,
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
  dispatch: PropTypes.func.isRequired,
  dataSet: PropTypes.arrayOf(PropTypes.string),
  entries: PropTypes.arrayOf(PropTypes.object),
};

const mapDispatchToProps = dispatch => ({
  dispatch,
  ...bindActionCreators({ showDetail }, dispatch),
});

const mapStateToProps = (state) => {
  const entries = groupAllEntriesByDayAndTime(state);
  return {
    entries,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ScheduleValues);
/* eslint-enable no-console */
