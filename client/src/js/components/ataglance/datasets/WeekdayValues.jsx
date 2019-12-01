/* eslint-disable no-console */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class EngineValues extends Component {
  constructor(props) {
    super(props);
    console.log('values');
  }

  render() {
    const { dataSet, trainLineList } = this.props;
    return (
      <div className="data-table">
        <div className="y-axis">
          {
            trainLineList.map(trainLine => (
              <div className="y-axis-row" key={trainLine.id}>
                <div className="row-label">{trainLine.name}</div>
                <div className="row-axis" />
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

EngineValues.defaultProps = {
  dataSet: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
};

EngineValues.propTypes = {
  trainLineList: PropTypes.arrayOf(PropTypes.object),
  dataSet: PropTypes.arrayOf(PropTypes.string),
};

const mapStateToProps = (state) => {
  const { trainLines } = state;
  const {
    items: trainLineList,
  } = trainLines;
  return {
    trainLineList,
  };
};

export default connect(mapStateToProps)(EngineValues);
/* eslint-enable no-console */
