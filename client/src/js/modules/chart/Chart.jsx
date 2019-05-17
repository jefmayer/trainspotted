/* eslint-disable react/prefer-stateless-function, no-console */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Entry from './Entry';

class Chart extends Component {
  render() {
    const {
      data,
    } = this.props;

    const entires = [];
    let lastDate = null;

    data.forEach((entry) => {
      if (entry.date !== lastDate) {
        // Test
      }
      console.log(entry.date);
      entires.push(
        <Entry entry={entry} key={entry.id.$oid} />,
      );
      lastDate = entry.date;
    });

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
          {data.map(entry => <Entry key={entry.id.$oid} entry={entry} />)}
        </div>
      </div>
    );
  }
}

Chart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
};

export default Chart;
/* eslint-enable react/prefer-stateless-function, no-console */
