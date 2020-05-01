/* eslint-disable no-console */
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getDatePositionInRange, getMonthsByInterval, getRoundedEndDate } from '../../../utils/DateUtils';
import { getRandomNumberKey } from '../../../utils/Formatting';
import { showDetail } from '../../../actions';
import { getResightings } from '../../../selectors';

class ResightingValues extends Component {
  constructor(props) {
    super(props);
    this.initialSightingDate = this.getInitialSightingDate();
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
    }, 6000);
    this.yAxis = this.tableRef.current.querySelector('.y-axis');
    this.yAxis.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
    clearInterval(this.scrollIndicatorTimer);
  }

  getInitialSightingDate() {
    const { entries } = this.props;
    const dates = entries.slice().sort((a, b) => new Date(a.date) - new Date(b.date));
    // Get 1st day of the start month
    const initial = new Date(dates[0].date);
    // return initial;
    return `${initial.getMonth() + 1}/1/${initial.getFullYear()}`;
  }

  handleScroll() {
    this.scrollIndicatorRef.current.classList.add('hidden');
    this.yAxis.removeEventListener('scroll', this.handleScroll);
  }

  render() {
    const { dispatch, resightings } = this.props;
    const endDate = getRoundedEndDate(new Date(this.initialSightingDate), new Date());
    const dataSet = getMonthsByInterval(new Date(this.initialSightingDate), endDate);
    let prevLeft = '';
    let isPrevLeft = false;
    console.log(resightings);

    return (
      <div className="data-table resightings-values-table" ref={this.tableRef}>
        <div className="table-title" />
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
                          dispatch(showDetail(date.entryId));
                        }
                        const left = `${getDatePositionInRange(new Date(date.date), new Date(this.initialSightingDate), endDate) * 100}%`;
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
  return {
    entries,
    resightings,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ResightingValues);
/* eslint-enable no-console */
