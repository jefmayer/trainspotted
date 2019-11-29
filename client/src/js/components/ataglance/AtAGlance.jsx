/* eslint-disable no-console */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class AtAGlance extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSet: [],
    };
    this.handleDataSetChange = this.handleDataSetChange.bind(this);
  }

  componentDidMount() {
    const { dataSets } = this.props;
    this.setState({
      activeSet: dataSets[0].values,
    });
  }

  handleDataSetChange(event) {
    const { dataSets } = this.props;
    const arr = dataSets.find(item => item.label === event.target.value);
    this.setState({ activeSet: arr.values });
  }

  render() {
    const { dataSets, trainLineList } = this.props;
    const { activeSet } = this.state;
    return (
      <div className="at-a-glance">
        <div className="page-heading-divider">
          <h2 className="heading-lg">At A Glance</h2>
        </div>
        <div className="aggregate-data-visualization-module">
          <div className="module-inner">
            <div className="data-filters">
              <ul className="data-filters-inner">
                {
                  dataSets.map(item => (
                    <li key={item.label}><input onClick={this.handleDataSetChange} type="button" value={item.label} /></li>
                  ))
                }
              </ul>
            </div>
            <div className="data-visualization">
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
                        activeSet.map(item => (
                          <li key={`${item}-${Math.round(Math.random() * 1000)}`}>{item}</li>
                        ))
                      }
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

AtAGlance.defaultProps = {
  dataSets: [
    {
      label: 'Engines',
      values: ['0', '10', '20', '30', '40', '50', '60', '70', '80', '90', '100'],
    },
    {
      label: 'Time',
      values: ['12 AM', '2 AM', '4AM', '6 AM', '8 AM', ' 10 AM', '12 PM', '2 PM', '4 PM', '6 PM', '8 PM', '10 PM'],
    },
    {
      label: 'Weekday',
      values: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
    },
    {
      label: 'Resightings', // Need to create dynamically, based on values entered... at some point
      values: ['3/19', '4/19', '5/19', '6/19', '7/19', '8/19', '9/19', '10/19', '11/19'],
    },
  ],
};

AtAGlance.propTypes = {
  trainLineList: PropTypes.arrayOf(PropTypes.object),
  dataSets: PropTypes.arrayOf(PropTypes.object),
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

export default connect(mapStateToProps)(AtAGlance);
/* eslint-enable no-console */
