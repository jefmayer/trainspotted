/* eslint-disable no-console */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import EntriesForDate from './EntriesForDate';
import months from '../../utils/Months';

class DateLine extends Component {
  constructor(props) {
    super(props);
    this.divRef = React.createRef();
  }

  render() {
    const {
      activeMonth,
      date,
      entries,
      isMonthLabel,
    } = this.props;
    const month = months[date.split('/')[0] - 1];
    const year = date.split('/')[2];

    return (
      <div className="date-line" ref={this.divRef}>
        {isMonthLabel
          && (
            <div className={`month-display ${`${month}-${year}` === activeMonth ? 'sticky' : ''}`} data-month={`${month}-${year}`}>
              <span>{`${month} ${year}`}</span>
            </div>
          )
        }
        <div className="date-display">
          <span>{date.split('/')[1]}</span>
        </div>
        <EntriesForDate
          date={date}
          entries={entries}
        />
      </div>
    );
  }
}

DateLine.propTypes = {
  activeMonth: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  entries: PropTypes.arrayOf(PropTypes.object).isRequired,
  isMonthLabel: PropTypes.bool.isRequired,
};

export default DateLine;
/* eslint-enable no-console */
