/* eslint-disable no-console, no-useless-constructor, react/prefer-stateless-function */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import weekdays from '../../../utils/Weekdays';
import { getRandomNumberKey } from '../../../utils/Formatting';
import { getLinesByDayOfWeek } from '../../../selectors';

class EngineValues extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { trainLineList, linesByDayOfWeek } = this.props;
    return (
      <div className="data-table weekday-values-table">
        <div className="y-axis">
          {
            trainLineList.map((trainLine) => {
              const lineWeek = linesByDayOfWeek.find(line => line.name === trainLine.name).days;
              const maxDiscSize = lineWeek.reduce((a, b) => Math.max(a, b.value), 0);
              console.log(maxDiscSize);
              return (
                <div className="y-axis-row" key={trainLine.id}>
                  <div className="row-label">{trainLine.name}</div>
                  <div className="row-axis">
                    {
                      lineWeek.map((day) => {
                        const bgStyle = {
                          backgroundColor: trainLine.color,
                          height: `${Math.round(day.value / maxDiscSize * maxDiscSize)}px`,
                          left: `${Math.round(day.index / 6 * 100)}%`,
                          width: `${Math.round(day.value / maxDiscSize * maxDiscSize)}px`,
                        };
                        return (
                          <div className="value-density-disc" style={bgStyle} key={getRandomNumberKey()} />
                        );
                      })
                    }
                  </div>
                </div>
              );
            })
          }
        </div>
        <div className="x-axis">
          <div className="data-set">
            <ul className="data-set-values">
              {
                weekdays.map(item => (
                  <li key={`${item.short}-${Math.round(Math.random() * 1000)}`}>{item.short}</li>
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
  linesByDayOfWeek: PropTypes.arrayOf(PropTypes.object),
  trainLineList: PropTypes.arrayOf(PropTypes.object),
};

const mapStateToProps = (state) => {
  const { trainLines } = state;
  const {
    items: trainLineList,
  } = trainLines;
  const linesByDayOfWeek = getLinesByDayOfWeek(state);
  return {
    linesByDayOfWeek,
    trainLineList,
  };
};

export default connect(mapStateToProps)(EngineValues);
/* eslint-enable no-console, no-useless-constructor, react/prefer-stateless-function */
