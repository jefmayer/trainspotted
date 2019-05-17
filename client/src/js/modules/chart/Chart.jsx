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
            entries.map(entry => <Entry key={entry._id} entry={entry} />) /* eslint-disable-line no-underscore-dangle */
          }
        </div>
      </div>
    );
  }
}

export default Chart;
/* eslint-enable react/prefer-stateless-function, no-console */
