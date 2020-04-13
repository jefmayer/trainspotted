/* eslint-disable no-console */
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getDatesByInterval, getDatePositionInRange } from '../../../utils/DateUtils';
import { getRandomNumberKey } from '../../../utils/Formatting';
import { showDetail } from '../../../actions';

class ResightingValues extends Component {
  constructor(props) {
    super(props);
    this.initialSightingDate = this.getInitialSightingDate();
    this.tableRef = React.createRef();
    this.yAxis = null;
    this.scrollIndicatorRef = React.createRef();
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    setTimeout(() => {
      this.tableRef.current.classList.remove('initial-state');
    }, 100);
    this.yAxis = this.tableRef.current.querySelector('.y-axis');
    this.yAxis.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  getInitialSightingDate() {
    const { entries } = this.props;
    const dates = entries.slice().sort((a, b) => new Date(a.date) - new Date(b.date));
    return new Date(dates[0].date);
  }

  // Move to Lookup.js (utils)
  getResightingsList() {
    const { entries, trainLineList } = this.props;
    // Build list of all engines with entry keys, dates, colors
    const allEntryEngines = [];
    entries.forEach(entry => entry.engines.forEach(engine => allEntryEngines.push({
      engine: `${trainLineList.find(line => engine.line === line.name).short}, ${engine.number}`,
      entryId: entry._id, /* eslint-disable-line no-underscore-dangle */
      date: entry.date,
      color: trainLineList.find(line => engine.line === line.name).color,
    })));
    // Find all engines seen more than once
    const duplicates = new Set();
    const resightings = allEntryEngines
      .filter(entry => duplicates.size === duplicates.add(entry.engine).size)
      // But there can be more than 2 matches... so now need to remove duplicates
      .reduce((acc, current) => {
        const match = acc.find(entry => entry.engine === current.engine);
        // If match is false, then return accumulator w/ match addee
        if (!match) {
          return acc.concat([current]);
        }
        // If exists, then just return accumulator as is
        return acc;
      }, [])
      .map((match) => {
        // Find all sighting dates
        const dates = allEntryEngines
          .filter(entry => match.engine === entry.engine)
          .map(entry => entry.date)
          .sort((a, b) => new Date(a) - new Date(b));
        return {
          engine: match.engine,
          dates,
          entryId: match.entryId,
          color: match.color,
        };
      })
      .sort((a, b) => new Date(a.dates[0]) - new Date(b.dates[0]));
    return resightings;
  }

  handleScroll() {
    this.scrollIndicatorRef.current.classList.add('hidden');
    this.yAxis.removeEventListener('scroll', this.handleScroll);
  }

  render() {
    const { dispatch } = this.props;
    const dataSet = getDatesByInterval(12, new Date(this.initialSightingDate), new Date());
    let prevLeft = '';
    let isPrevLeft = false;

    return (
      <div className="data-table resightings-values-table initial-state" ref={this.tableRef}>
        <div className="y-axis">
          {
            this.getResightingsList().map((entry) => {
              prevLeft = '';
              isPrevLeft = false;

              function onEntryClick() {
                dispatch(showDetail(entry.entryId));
              }

              return (
                <div className="y-axis-row" key={getRandomNumberKey()}>
                  <div className="row-label">{entry.engine}</div>
                  <div className="row-axis" />
                  {
                    entry.dates.map((date) => {
                      const left = `${getDatePositionInRange(new Date(date), new Date(this.initialSightingDate), new Date()) * 100}%`;
                      const bgStyle = {
                        backgroundColor: entry.color,
                        left,
                      };
                      const lineStyle = {
                        backgroundColor: entry.color,
                        left: prevLeft,
                        width: `calc(${left} - ${prevLeft})`,
                      };
                      if (prevLeft !== '') {
                        isPrevLeft = true;
                      }
                      prevLeft = left;
                      return (
                        <div key={getRandomNumberKey()}>
                          <button
                            className="sighting-marker"
                            onClick={onEntryClick}
                            onKeyDown={onEntryClick}
                            style={bgStyle}
                            type="button"
                          />
                          {isPrevLeft
                            && (
                              <div
                                className="sighting-connector"
                                style={lineStyle}
                              />
                            )
                          }
                        </div>
                      );
                    })
                  }
                </div>
              );
            })
          }
        </div>
        <div className="x-axis">
          <div className="data-set">
            <ul className="data-set-values">
              {
                dataSet.map(item => (
                  <li key={getRandomNumberKey()}>{item}</li>
                ))
              }
            </ul>
          </div>
        </div>
        <div className="scroll-indicator-icon" ref={this.scrollIndicatorRef}>
          <div />
        </div>
      </div>
    );
  }
}

ResightingValues.propTypes = {
  entries: PropTypes.arrayOf(PropTypes.object),
  trainLineList: PropTypes.arrayOf(PropTypes.object),
  dispatch: PropTypes.func.isRequired,
};

// https://react-redux.js.org/using-react-redux/connect-mapdispatch
const mapDispatchToProps = (dispatch) => { /* eslint-disable-line arrow-body-style */
  return {
    dispatch,
    ...bindActionCreators({ showDetail }, dispatch),
  };
};

const mapStateToProps = (state) => {
  const { entryData, trainLines } = state;
  const {
    items: entries,
  } = entryData;
  const {
    items: trainLineList,
  } = trainLines;
  return {
    entries,
    trainLineList,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ResightingValues);
/* eslint-enable no-console */
