/* eslint-disable prefer-destructuring, no-console */
import React, { Component } from 'react';
import EntriesForDate from './EntriesForDate';

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      entries: [],
      activeDataSet: {},
    };
  }

  componentDidMount() {
    this.getEntries();
  }

  onEntryClick(data) {
    this.setState({
      activeDataSet: data,
    });
    const { activeDataSet } = this.state;
    console.log(activeDataSet);
  }

  getEntries() {
    fetch('/getEntries')
      .then(res => res.json())
      .then(entries => this.setState({ entries }));
  }

  render() {
    const { entries, activeDataSet } = this.state;
    const dates = [...new Set(entries.map(entry => entry.date))];
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];

    return (
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
            dates.map(date => (
              <div className="date-line" key={date}>
                <div className="month-display">
                  <span>{`${months[date.split('/')[0] - 1]} ${date.split('/')[2]}`}</span>
                </div>
                <div className="date-display">
                  <span>{date.split('/')[1]}</span>
                </div>
                <EntriesForDate
                  date={date}
                  entries={entries}
                  onClick={activeDataSet}
                />
              </div>
            ))
          }
        </div>
      </div>
    );
  }
}

export default Chart;
/* eslint-enable prefer-destructuring, no-console */
