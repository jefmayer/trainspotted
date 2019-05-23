/* eslint-disable no-console */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchEntries } from '../actions';
import Chart from '../components/chart/Chart';
import Detail from '../components/detail/Detail';
import logo from '../../img/trainspotted-logo.svg';
import '../../scss/App.scss';

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchEntries());
  }

  render() {
    const { entries } = this.props;
    return (
      <div className="App">
        <header className="app-header">
          <img src={logo} className="app-logo" alt="logo" />
          <div className="app-title">Trainspotted</div>
        </header>
        <Chart entries={entries} />
        <Detail />
      </div>
    );
  }
}

App.propTypes = {
  entries: PropTypes.arrayOf(PropTypes.object),
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  const { entryDataReducer } = state;
  const {
    items: entries,
  } = entryDataReducer || {
    items: [],
  };
  return {
    entries,
  };
};

export default connect(mapStateToProps)(App);
/* eslint-enable no-console */
