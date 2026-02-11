/* eslint-disable no-console */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DataFilter from './DataFilter';
import EngineValues from './datasets/EngineValues';
import OverviewValues from './datasets/OverviewValues';
import ResightingValues from './datasets/ResightingValues';
import ScheduleValues from './datasets/ScheduleValues';

class AtAGlance extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSet: {
        label: '',
        values: [],
      },
    };
    this.handleDataSetChange = this.handleDataSetChange.bind(this);
  }

  componentDidMount() {
    const { dataSets } = this.props;
    this.setState({
      activeSet: dataSets[0],
    });
  }

  handleDataSetChange(value) {
    const { dataSets } = this.props;
    const dataSet = dataSets.find(item => item.label === value);
    this.setState({ activeSet: dataSet });
  }

  render() {
    const { dataSets } = this.props;
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
                    <DataFilter
                      isActive={item.label === activeSet.label}
                      key={item.label}
                      label={item.label}
                      onFilterClick={this.handleDataSetChange}
                    />
                  ))
                }
              </ul>
            </div>
            <div className="data-visualization">
              {activeSet.label === 'Overview'
                && (
                  <OverviewValues />
                )
              }
              {activeSet.label === 'Resightings'
                && (
                  <ResightingValues />
                )
              }
              {activeSet.label === 'Engines'
                && (
                  <EngineValues />
                )
              }
              {activeSet.label === 'Schedule'
                && (
                  <ScheduleValues />
                )
              }
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
      label: 'Overview',
    },
    {
      label: 'Resightings',
    },
    {
      label: 'Engines',
    },
    {
      label: 'Schedule',
    },
  ],
};

AtAGlance.propTypes = {
  dataSets: PropTypes.arrayOf(PropTypes.object),
};

export default AtAGlance;
/* eslint-enable no-console */
