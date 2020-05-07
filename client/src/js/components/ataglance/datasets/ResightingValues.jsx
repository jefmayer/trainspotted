/* eslint-disable no-console */
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getDatePositionInRange, getMonthsByInterval, getRoundedEndDate } from '../../../utils/DateUtils';
import { getRandomNumberKey } from '../../../utils/Formatting';
import { showDetail } from '../../../actions';
import { getResightings, getInitialSightingDate, getInitialSightingMonthStart } from '../../../selectors';

class ResightingValues extends Component {
  constructor(props) {
    super(props);
    this.tableRef = React.createRef();
    this.yAxis = null;
    this.scrollIndicatorRef = React.createRef();
    this.handleScroll = this.handleScroll.bind(this);
    this.scrollIndicatorTimer = null;
  }

  componentDidMount() {
    this.scrollIndicatorTimer = setTimeout(() => {
      this.scrollIndicatorRef.current.classList.add('hidden');
      this.yAxis.removeEventListener('scroll', this.handleScroll);
    }, 3000);
    this.yAxis = this.tableRef.current.querySelector('.y-axis');
    this.yAxis.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
    clearInterval(this.scrollIndicatorTimer);
  }

  handleScroll() {
    this.scrollIndicatorRef.current.classList.add('hidden');
    this.yAxis.removeEventListener('scroll', this.handleScroll);
  }

  render() {
    const { dispatch, entries, initialSightingDate, initialSightingMonthStart, resightings } = this.props;
    const endDate = getRoundedEndDate(new Date(initialSightingMonthStart), new Date());
    const dataSet = getMonthsByInterval(new Date(initialSightingMonthStart), endDate);
    let prevLeft = '';
    let isPrevLeft = false;

    return (
      <div className="data-table resightings-values-table" ref={this.tableRef}>
        <div className="table-title">
          <h3>
            { resightings.reduce((a, b) => a + b.dates.length - 1, 0) }
            &nbsp;repeated sightings of&nbsp;
            { resightings.length }
            &nbsp;engines since&nbsp;
            { initialSightingDate }
          </h3>
        </div>
        <div className="y-axis">
          {
            resightings.map((entry) => {
              prevLeft = '';
              isPrevLeft = false;

              return (
                <div className="y-axis-row" key={getRandomNumberKey()}>
                  <div className="row-label">{entry.engine}</div>
                  <div className="row-axis">
                    {
                      entry.dates.map((date) => {
                        function onEntryClick() {
                          dispatch(showDetail(entries.find(e => e._id === date.entryId), 'entry')); /* eslint-disable-line no-underscore-dangle */
                        }
                        const left = `${getDatePositionInRange(new Date(date.date), new Date(initialSightingMonthStart), endDate) * 100}%`;
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
                            >
                              <span>{entry.engine.substr(entry.engine.indexOf(',') + 2)}</span>
                            </button>
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
  dispatch: PropTypes.func.isRequired,
  entries: PropTypes.arrayOf(PropTypes.object),
  initialSightingDate: PropTypes.string.isRequired,
  initialSightingMonthStart: PropTypes.string.isRequired,
  resightings: PropTypes.arrayOf(PropTypes.object),
};

// https://react-redux.js.org/using-react-redux/connect-mapdispatch
const mapDispatchToProps = dispatch => ({
  dispatch,
  ...bindActionCreators({ showDetail }, dispatch),
});

const mapStateToProps = (state) => {
  const { entryData } = state;
  const {
    items: entries,
  } = entryData;
  const resightings = getResightings(state);
  const initialSightingDate = getInitialSightingDate(state);
  const initialSightingMonthStart = getInitialSightingMonthStart(state);
  return {
    entries,
    initialSightingDate,
    initialSightingMonthStart,
    resightings,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ResightingValues);
/* eslint-enable no-console */
