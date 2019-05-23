/* eslint-disable no-console */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchEntries, hideDetail } from '../actions';
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
    const { entries, isOpen, detailId, dispatch } = this.props;

    function onDetailClose() {
      dispatch(hideDetail());
    }

    return (
      <div className="App">
        <header className="app-header">
          <img src={logo} className="app-logo" alt="logo" />
          <div className="app-title">Trainspotted</div>
        </header>
        <Chart
          entries={entries}
        />
        {isOpen
          && <Detail onDetailClose={onDetailClose} id={detailId} />
        }
      </div>
    );
  }
}

App.propTypes = {
  detailId: PropTypes.string,
  isOpen: PropTypes.bool,
  entries: PropTypes.arrayOf(PropTypes.object),
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  const { entryData, entryDetail } = state;
  const {
    items: entries,
  } = entryData;
  const {
    id: detailId, /* eslint-disable-line no-unused-vars */
    isOpen, /* eslint-disable-line no-unused-vars */
  } = entryDetail;
  return {
    entries,
    detailId,
    isOpen,
  };
};

export default connect(mapStateToProps)(App);
/* eslint-enable no-console */
