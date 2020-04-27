/* eslint-disable no-console, no-useless-constructor, react/prefer-stateless-function */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class TimeValues extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { dataSet, trainLineList } = this.props;
    return (
      <div className="data-table time-values-table">
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

TimeValues.defaultProps = {
  dataSet: ['12 AM', '2 AM', '4AM', '6 AM', '8 AM', ' 10 AM', '12 PM', '2 PM', '4 PM', '6 PM', '8 PM', '10 PM'],
};

TimeValues.propTypes = {
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

export default connect(mapStateToProps)(TimeValues);
/* eslint-enable no-console, no-useless-constructor, react/prefer-stateless-function */
