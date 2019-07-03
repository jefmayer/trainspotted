/* eslint-disable no-console */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchEntries, fetchTrainLines, hideDetail, hideMenu, showMenu } from '../actions';
import Chart from '../components/chart/Chart';
import Detail from '../components/detail/Detail';
import Menu from '../components/menu/Menu';
import logo from '../../img/trainspotted-logo.svg';
import '../../scss/App.scss';

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchEntries());
    dispatch(fetchTrainLines());
  }

  render() {
    const { detailId, dispatch, entries, isDetailOpen, isMenuOpen } = this.props;

    function onDetailClose() {
      dispatch(hideDetail());
    }

    function onMenuClick() {
      if (!isMenuOpen) {
        dispatch(showMenu());
      } else {
        dispatch(hideMenu());
      }
    }

    function getEntryById(id) {
      return entries.find(entry => entry._id === id); /* eslint-disable-line no-underscore-dangle */
    }

    return (
      <div className="App">
        <header className="app-header">
          <div className="logo-wrapper">
            <img src={logo} className="logo-graphic" alt="Trainspotted Logo" />
            <div className="logo-type">Trainspotted</div>
          </div>
          <Menu
            menuDisplayClass={isMenuOpen ? 'open' : 'closed'}
            onMenuClick={onMenuClick}
          />
        </header>
        <Chart
          entries={entries}
        />
        {isDetailOpen
          && (
            <Detail
              onDetailClose={onDetailClose}
              data={getEntryById(detailId)}
              entries={entries}
            />
          )
        }
      </div>
    );
  }
}

App.propTypes = {
  detailId: PropTypes.string,
  dispatch: PropTypes.func.isRequired,
  entries: PropTypes.arrayOf(PropTypes.object),
  isDetailOpen: PropTypes.bool,
  isMenuOpen: PropTypes.bool,
};

const mapStateToProps = (state) => {
  const { entryData, entryDetail, menu } = state;
  const {
    items: entries,
  } = entryData;
  const {
    id: detailId,
    isOpen: isDetailOpen,
  } = entryDetail;
  const {
    isOpen: isMenuOpen,
  } = menu;
  return {
    detailId,
    entries,
    isDetailOpen,
    isMenuOpen,
  };
};

export default connect(mapStateToProps)(App);
/* eslint-enable no-console */
