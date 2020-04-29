/* eslint-disable no-console */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DateLine from './DateLine';

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeMonth: '',
    };
    this.handleScroll = this.handleScroll.bind(this);
    this.currentMonth = -1;
    this.chartWrapperRef = React.createRef();
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    let month = '';
    [].map.call(document.querySelectorAll('.month-display'), (item) => {
      if (item.parentNode.getBoundingClientRect().top + scrollTop < window.pageYOffset) {
        // Should set the active month to whatever the last item less than scrollTop is...
        month = item.getAttribute('data-month');
      }
    });
    this.setState({ activeMonth: month });
    //
    if (this.chartWrapperRef !== null) {
      if (this.chartWrapperRef.current.getBoundingClientRect().top + scrollTop < window.pageYOffset) {
        this.chartWrapperRef.current.classList.add('sticky');
      } else {
        this.chartWrapperRef.current.classList.remove('sticky');
      }
    }
  }

  render() {
    const { entries } = this.props;
    const { activeMonth } = this.state;
    const dates = [...new Set(entries.map(entry => entry.date))];
    let isMonthLabel = false;

    return (
      <div className="train-chart-wrapper" ref={this.chartWrapperRef}>
        <div className="page-heading-divider fixed-page-heading-divider">
          <h2 className="heading-lg">Sightings</h2>
        </div>
        <div className="train-chart">
          <div className="x-axis-header clearfix">
            <div className="page-heading-divider">
              <h2 className="heading-lg">Sightings</h2>
            </div>
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
                if (this.currentMonth !== date.split('/')[0]) {
                  this.currentMonth = date.split('/')[0]; /* eslint-disable-line prefer-destructuring */
                  isMonthLabel = true;
                } else {
                  isMonthLabel = false;
                }
                return (
                  <DateLine
                    activeMonth={activeMonth}
                    key={date.replace(/\//, '')}
                    date={date}
                    entries={entries}
                    isMonthLabel={isMonthLabel}
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
