/* eslint-disable no-console */
import React, { Component } from 'react';
import EntriesForDate from './EntriesForDate';

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      entries: [],
    };
  }

  componentDidMount() {
    this.getEntries();
  }

  getEntries() {
    fetch('/getEntries')
      .then(res => res.json())
      .then(entries => this.setState({ entries }));
  }

  render() {
    const { entries } = this.state;
    const dates = [...new Set(entries.map(entry => entry.date))];

    return (
      <div className="train-chart">
        <div className="x-axis-header clearfix">
          <ul>
            <li>12 AM</li>
            <li>2 AM</li>
            <li>4 AM</li>
            <li>6 AM</li>
            <li>8 AM</li>
            <li>10 AM</li>
            <li>12 PM</li>
            <li>2 PM</li>
            <li>4 PM</li>
            <li>6 PM</li>
            <li>8 PM</li>
            <li>10 PM</li>
          </ul>
        </div>
        <div className="time-table">
          {
            dates.map(date => (
              <div className="date-line" key={date}>
                <div className="date-display">
                  {date.split('/')[1]}
                </div>
                <EntriesForDate date={date} entries={entries} />
              </div>
            ))
          }
        </div>
      </div>
    );
  }
}

export default Chart;
/* eslint-enable no-console */
