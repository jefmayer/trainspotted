/* eslint-disable no-console, no-useless-constructor */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getDaysBetweenDates } from '../../../utils/DateUtils';
import { getLineWithMostSightings, getResightings } from '../../../selectors';

class OveviewValues extends Component {
  constructor(props) {
    super(props);
  }

  getDirectionPercentage() {
    const { entries } = this.props;
    const north = entries.filter(entry => entry.direction === 'north');
    const perc = Math.round(north.length / entries.length * 100);
    return `${Number.isNaN(perc) ? '...' : perc}%`;
  }

  getLineWithMostSightings() {
    const { entries, trainLineList } = this.props;
    return trainLineList
      .map(line => ({
        name: line.name,
        value: entries.reduce((a, b) => (a + b.engines.filter(engine => engine.line === line.name).length), 0),
      }))
      .sort((a, b) => b.value - a.value)[0];
  }

  getDistinctResightings() {
    const { resightings } = this.props;
    // Need to create a second array because there are more resightings,
    // than items in the resightings array (one engine can have more than
    // one resighting...
    const arr = [];
    resightings
      // It's actually fine, prob somewhat inefficient, if we're looking
      // for the duration of the last item in the array and itself... it'll just be 0
      .map(item => item.dates.reduce((a, b, c, array) => arr.push({ engine: item.engine, time: getDaysBetweenDates(new Date(b.date), new Date(array[Math.min(c + 1, array.length - 1)].date)) }), 0));
    // Filter out all the 0's here
    return arr.filter(item => item.time !== 0);
  }

  render() {
    const { trainLineList, entries, lineWithMostSightings } = this.props;
    const distinctResightings = this.getDistinctResightings();
    let sightingLeader = lineWithMostSightings;
    if (!sightingLeader) {
      sightingLeader = {
        name: '',
        value: '...',
      };
    }
    let avgResightingDays = Math.round(distinctResightings.reduce((a, b) => (a + b.time), 0) / distinctResightings.length);
    if (Number.isNaN(avgResightingDays)) {
      avgResightingDays = 0;
    }
    let minResightingDays = distinctResightings.reduce((a, b) => Math.min(a, b.time), Infinity);
    if (minResightingDays === Infinity) {
      minResightingDays = 0;
    }
    return (
      <div className="data-table">
        <div className="table-values-grid">
          <div className="table-value">
            <div className="heading-xl">{ trainLineList.length }</div>
            <div className="body-copy">Different Freight Lines Observed</div>
          </div>
          <div className="table-value">
            <div className="heading-xl">{ entries.length }</div>
            <div className="body-copy">Number of Trains Observed</div>
          </div>
          <div className="table-value">
            <div className="heading-xl">{ entries.reduce((a, b) => (a + b.engines.length), 0) }</div>
            <div className="body-copy">Number of Diesel Engines</div>
          </div>
          <div className="table-value">
            <div className="heading-xl">{ sightingLeader.value }</div>
            <div className="body-copy">
              { sightingLeader.name }
              &nbsp;is Observed Most Often
            </div>
          </div>
          <div className="table-value">
            <div className="heading-xl">{ this.getDirectionPercentage() }</div>
            <div className="body-copy">Percentage of Trains Headed North</div>
          </div>
          <div className="table-value">
            <div className="heading-xl">{ distinctResightings.length }</div>
            <div className="body-copy">Number of Resightings*</div>
          </div>
          <div className="table-value">
            <div className="heading-xl">{ avgResightingDays }</div>
            <div className="body-copy">Average Number of Days Between a Resighting</div>
          </div>
          <div className="table-value">
            <div className="heading-xl">{ minResightingDays }</div>
            <div className="body-copy">Fewest Days Between a Resighting</div>
          </div>
          <div className="table-value">
            <div className="heading-xl">{ distinctResightings.reduce((a, b) => Math.max(a, b.time), 0) }</div>
            <div className="body-copy">Most Days Between a Resighting</div>
          </div>
          <div className="table-value">
            <div className="heading-xl">...</div>
            <div className="body-copy">Diesel Engine Number With the Most Resightings</div>
          </div>
        </div>
        <div className="table-notes">
          <p className="body-xsmall">*Resightings are the engines I&rsquo;ve observed on multiple occasions. It&rsquo;s entirely possible, more so likely, that these and others have passed back and forth at off hours. Some other observations:</p>
        </div>
      </div>
    );
  }
}

OveviewValues.propTypes = {
  entries: PropTypes.arrayOf(PropTypes.object),
  lineWithMostSightings: PropTypes.shape({
    name: PropTypes.string,
    value: PropTypes.number,
  }),
  resightings: PropTypes.arrayOf(PropTypes.object),
  trainLineList: PropTypes.arrayOf(PropTypes.object),
};

const mapStateToProps = (state) => {
  const { entryData } = state;
  const {
    items: entries,
  } = entryData;
  const { trainLines } = state;
  const {
    items: trainLineList,
  } = trainLines;
  const resightings = getResightings(state);
  const lineWithMostSightings = getLineWithMostSightings(state);
  return {
    entries,
    lineWithMostSightings,
    resightings,
    trainLineList,
  };
};

export default connect(mapStateToProps)(OveviewValues);
/* eslint-enable no-console, no-useless-constructor */
