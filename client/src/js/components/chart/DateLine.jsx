/* eslint-disable no-console */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import EntriesForDate from './EntriesForDate';
import months from '../../utils/Months';

class DateLine extends Component {
  constructor(props) {
    super(props);
    this.divRef = React.createRef();
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    if (this.divRef.current) {
      window.addEventListener('scroll', this.handleScroll);
    }
  }

  componentWillUnmount() {
    if (this.divRef.current) {
      window.removeEventListener('scroll', this.handleScroll);
    }
  }

  handleScroll() {
    const {
      date,
      setMonthInFocus,
    } = this.props;
    const rect = this.divRef.current.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const y = rect.top + scrollTop;
    if (y < window.pageYOffset) {
      setMonthInFocus(months[date.split('/')[0] - 1]);
    }
  }

  render() {
    const {
      date,
      entries,
      isMonthInFocus,
      isMonthLabel,
    } = this.props;
    let stickyMonthClass = '';
    if (isMonthInFocus) {
      stickyMonthClass = 'sticky';
    }
    return (
      <div className="date-line">
        {isMonthLabel
          && (
            <div className={`month-display ${stickyMonthClass}`} ref={this.divRef}>
              <span>{`${months[date.split('/')[0] - 1]} ${date.split('/')[2]}`}</span>
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
  date: PropTypes.string.isRequired,
  entries: PropTypes.arrayOf(PropTypes.object).isRequired,
  isMonthInFocus: PropTypes.bool.isRequired,
  isMonthLabel: PropTypes.bool.isRequired,
  setMonthInFocus: PropTypes.func.isRequired,
};

export default DateLine;
/* eslint-enable no-console */
