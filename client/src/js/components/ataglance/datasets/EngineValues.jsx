/* eslint-disable no-console */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getRandomNumberKey } from '../../../utils/Formatting';
import { getLineWithMostSightings } from '../../../selectors';

class EngineValues extends Component {
  constructor(props) {
    super(props);
    this.tableRef = React.createRef();
  }

  componentDidMount() {
    setTimeout(() => {
      this.tableRef.current.classList.remove('initial-state');
    }, 100);
  }

  getEngineCountByLine(line) {
    const { entries } = this.props;
    return entries.reduce((a, b) => (a + b.engines.filter(engine => engine.line === line).length), 0);
  }

  render() {
    const { lineWithMostSightings, trainLineList } = this.props;
    // Get line w/ max number of entries, round to nearest 100
    // Divide by 10 (start at 0)
    const maxEngineCt = Math.ceil(lineWithMostSightings.value / 100) * 100;
    const xAxisInterval = maxEngineCt / 10;
    const dataSet = [0];
    let ct = 0;
    do {
      ct += xAxisInterval;
      dataSet.push(ct);
    }
    while (ct <= maxEngineCt);
    return (
      <div className="data-table engine-values-table initial-state" ref={this.tableRef}>
        <div className="y-axis">
          {
            trainLineList.map((trainLine) => {
              const bgStyle = {
                backgroundColor: trainLine.color,
                transform: `scaleX(${this.getEngineCountByLine(trainLine.name) / maxEngineCt})`,
              };
              return (
                <div className="y-axis-row" key={trainLine.id}>
                  <div className="row-label">{trainLine.name}</div>
                  <div className="row-axis" />
                  <div className="value-display" style={bgStyle} />
                </div>
              );
            })
          }
        </div>
        <div className="x-axis">
          <div className="data-set">
            <ul className="data-set-values">
              {
                dataSet.map(item => (
                  <li key={getRandomNumberKey()}>{item}</li>
                ))
              }
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

EngineValues.propTypes = {
  entries: PropTypes.arrayOf(PropTypes.object),
  lineWithMostSightings: PropTypes.shape({
    name: PropTypes.string,
    value: PropTypes.number,
  }),
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
  const lineWithMostSightings = getLineWithMostSightings(state);
  return {
    entries,
    lineWithMostSightings,
    trainLineList,
  };
};

export default connect(mapStateToProps)(EngineValues);
/* eslint-enable no-console */
