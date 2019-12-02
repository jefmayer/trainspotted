/* eslint-disable no-console */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class EngineValues extends Component {
  constructor(props) {
    super(props);
    console.log('EngineValues');
  }

  getEngineCountByLine(line) {
    const { entries } = this.props;
    let ct = 0;
    entries.forEach((item) => {
      ct += item.engines.filter(engine => engine.line === line).length;
    });
    return ct;
  }

  render() {
    const { dataSet, trainLineList } = this.props;
    return (
      <div className="data-table">
        <div className="y-axis">
          {
            trainLineList.map((trainLine) => {
              const bgStyle = {
                backgroundColor: trainLine.color,
                transform: `scaleX(${this.getEngineCountByLine(trainLine.name) / 200})`,
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

EngineValues.defaultProps = {
  dataSet: ['0', '20', '40', '60', '80', '100', '120', '140', '160', '180', '200'],
};

EngineValues.propTypes = {
  dataSet: PropTypes.arrayOf(PropTypes.string),
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

export default connect(mapStateToProps)(EngineValues);
/* eslint-enable no-console */
