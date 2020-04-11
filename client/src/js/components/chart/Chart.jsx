/* eslint-disable no-console */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DateLine from './DateLine';
import months from '../../utils/Months';

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      monthInFocus: '',
    };
    this.setMonthInFocus = this.setMonthInFocus.bind(this);
  }

  setMonthInFocus(month) {
    this.setState({ monthInFocus: month });
  }

  render() {
    const { entries } = this.props;
    const { monthInFocus } = this.state;
    const dates = [...new Set(entries.map(entry => entry.date))];
    let currentMonth = -1;
    let isMonthLabel = false;
    // console.log(monthInFocus);

    return (
      <div>
        <div className="page-heading-divider">
          <h2 className="heading-lg">Sightings</h2>
        </div>
        <div className="train-chart">
          <div className="x-axis-header clearfix">
            <ul>
              <li><span>12 AM</span></li>
              <li><span>2 AM</span></li>
              <li><span>4 AM</span></li>
              <li><span>6 AM</span></li>
              <li><span>8 AM</span></li>
              <li><span>10 AM</span></li>
              <li><span>12 PM</span></li>
              <li><span>2 PM</span></li>
              <li><span>4 PM</span></li>
              <li><span>6 PM</span></li>
              <li><span>8 PM</span></li>
              <li><span>10 PM</span></li>
            </ul>
          </div>
          <div className="time-table">
            <div className="month-bar" />
            {
              dates.map((date) => {
                if (currentMonth !== date.split('/')[0]) {
                  currentMonth = date.split('/')[0]; /* eslint-disable-line prefer-destructuring */
                  isMonthLabel = true;
                } else {
                  isMonthLabel = false;
                }
                return (
                  <DateLine
                    key={date.replace(/\//, '')}
                    date={date}
                    entries={entries}
                    isMonthLabel={isMonthLabel}
                    isMonthInFocus={monthInFocus === months[date.split('/')[0] - 1]}
                    setMonthInFocus={this.setMonthInFocus}
                  />
                );
              })
            }
          </div>
        </div>
      </div>
    );
  }
}

Chart.propTypes = {
  entries: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Chart;
/* eslint-enable no-console */
