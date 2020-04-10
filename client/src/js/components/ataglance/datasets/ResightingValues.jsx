/* eslint-disable no-console, no-underscore-dangle */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getDatesByInterval, getDatePositionInRange } from '../../../utils/DateUtils';

class ResightingValues extends Component {
  constructor(props) {
    super(props);
    this.initialSightingDate = this.getInitialSightingDate();
  }

  getInitialSightingDate() {
    const { entries } = this.props;
    const dates = entries.slice().sort((a, b) => new Date(a.date) - new Date(b.date));
    return new Date(dates[0].date);
  }

  // Move to Lookup.js (utils)
  getResightingsList() {
    const { entries, trainLineList } = this.props;
    // Build list of all engines with entry keys, dates, colors?
    const allEntryEngines = [];
    entries.forEach(entry => entry.engines.forEach(engine => allEntryEngines.push({
      engine: `${trainLineList.find(line => engine.line === line.name).short}, ${engine.number}`,
      entryId: entry._id,
      date: entry.date,
      color: trainLineList.find(line => engine.line === line.name).color,
    })));
    // Find all engines seen more than once
    const seen = new Set();
    const resightings = allEntryEngines
      .filter(currentObject => seen.size === seen.add(currentObject.engine).size)
      .map((match) => {
        // Find all sighting dates
        const dates = allEntryEngines
          .filter(entry => match.engine === entry.engine)
          .map(entry => entry.date)
          .sort();
        return {
          engine: match.engine,
          dates,
          entryId: match.entryId,
          color: match.color,
        };
      });
    return resightings;
  }

  render() {
    const dataSet = getDatesByInterval(12, new Date(this.initialSightingDate), new Date());
    return (
      <div className="data-table resightings-values-table">
        <div className="y-axis">
          {
            this.getResightingsList().map(entry => (
              <div className="y-axis-row" key={`${entry.entryId}-${Math.round(Math.random() * 1000)}`}>
                <div className="row-label">{entry.engine}</div>
                <div className="row-axis" />
                {
                  entry.dates.map((date) => {
                    const bgStyle = {
                      backgroundColor: entry.color,
                      left: `${getDatePositionInRange(new Date(date), new Date(this.initialSightingDate), new Date()) * 100}%`,
                    };
                    return (
                      <div
                        className="sighting-marker"
                        key={`marker-${Math.round(Math.random() * 1000)}`}
                        style={bgStyle}
                      />
                    );
                  })
                }
              </div>
            ))
          }
        </div>
        <div className="x-axis">
          <div className="data-set">
            <ul className="data-set-values">
              {
                dataSet.map(item => (
                  <li key={`${item}-${Math.round(Math.random() * 1000)}`}>{item}</li>
                ))
              }
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

ResightingValues.propTypes = {
  entries: PropTypes.arrayOf(PropTypes.object),
  trainLineList: PropTypes.arrayOf(PropTypes.object),
};

const mapStateToProps = (state) => {
  const { entryData, trainLines } = state;
  const {
    items: entries,
  } = entryData;
  const {
    items: trainLineList,
  } = trainLines;
  return {
    entries,
    trainLineList,
  };
};

export default connect(mapStateToProps)(ResightingValues);
/* eslint-enable no-console, no-underscore-dangle */
