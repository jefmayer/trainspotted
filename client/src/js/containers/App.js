/* eslint-disable no-console */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchEntries, fetchTrainLines, hideDetail, hideMenu, showMenu } from '../actions';
import AtAGlance from '../components/ataglance/AtAGlance';
import Chart from '../components/chart/Chart';
import EntryDetail from '../components/detail/EntryDetail';
import ResightingDetail from '../components/detail/ResightingDetail';
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
    const { detailContentType, detailData, dispatch, entries, isDetailOpen, isMenuOpen } = this.props;

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
        <AtAGlance />
        <Chart
          entries={entries}
        />
        {isDetailOpen && detailContentType === 'entry'
          && (
            <EntryDetail
              onDetailClose={onDetailClose}
              data={detailData}
            />
          )
        }
        {isDetailOpen && detailContentType === 'resighting'
          && (
            <ResightingDetail
              onDetailClose={onDetailClose}
              data={detailData}
            />
          )
        }
      </div>
    );
  }
}

App.propTypes = {
  detailContentType: PropTypes.string,
  detailData: PropTypes.shape(),
  dispatch: PropTypes.func.isRequired,
  entries: PropTypes.arrayOf(PropTypes.object),
  isDetailOpen: PropTypes.bool,
  isMenuOpen: PropTypes.bool,
};

const mapStateToProps = (state) => {
  const { entryData, detail, menu } = state;
  const {
    items: entries,
  } = entryData;
  const {
    contentType: detailContentType,
    data: detailData,
    isOpen: isDetailOpen,
  } = detail;
  const {
    isOpen: isMenuOpen,
  } = menu;
  return {
    detailData,
    detailContentType,
    entries,
    isDetailOpen,
    isMenuOpen,
  };
};

export default connect(mapStateToProps)(App);
/* eslint-enable no-console */
