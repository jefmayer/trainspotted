/* eslint-disable no-console */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class AtAGlance extends Component {
  constructor(props) {
    super(props);
    console.log('test');
  }

  render() {
    const { trainLineList } = this.props;
    console.log(trainLineList);
    return (
      <div className="at-a-glance">
        <div className="page-heading-divider">
          <h2 className="heading-lg">At A Glance</h2>
        </div>
        <div className="aggregate-data-visualization-module">
          <div className="data-filters" />
          <div className="data-visualization" />
          {
            trainLineList.map(trainLine => (
              <div key={trainLine.id}>{trainLine.name}</div>
            ))
          }
        </div>
      </div>
    );
  }
}

AtAGlance.propTypes = {
  trainLineList: PropTypes.arrayOf(PropTypes.object),
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
