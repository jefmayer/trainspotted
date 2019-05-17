/* eslint-disable react/prefer-stateless-function, no-console */
import React, { Component } from 'react';
import Entry from './Entry';

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
    fetch('/getRecords')
      .then(res => res.json())
      .then(entries => this.setState({ entries }));
  }

  render() {
    const { entries } = this.state;
    const dates = [...new Set(entries.map(entry => entry.date))];

    return (
      <div className="container train-chart">
        <div className="x-axis-header">
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
        <div>
          {
            dates.map(date => (
              <div key={date}>
                { date }
                {
                  entries.map((entry) => {
                    if (entry.date === date) {
                      return <Entry key={entry._id} entry={entry} />; /* eslint-disable-line no-underscore-dangle */
                    }
                    return '';
                  })
                }
              </div>
            ))
          }
        </div>
      </div>
    );
  }
}

export default Chart;
/* eslint-enable react/prefer-stateless-function, no-console */
