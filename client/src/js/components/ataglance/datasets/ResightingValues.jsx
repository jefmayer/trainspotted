/* eslint-disable no-console */
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getDatesByInterval, getDatePositionInRange } from '../../../utils/DateUtils';
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

  handleScroll() {
    this.scrollIndicatorRef.current.classList.add('hidden');
    this.yAxis.removeEventListener('scroll', this.handleScroll);
  }

  render() {
    const { dispatch, resightings } = this.props;
    const dataSet = getDatesByInterval(12, new Date(this.initialSightingDate), new Date());
    let prevLeft = '';
    let isPrevLeft = false;

    return (
      <div className="data-table resightings-values-table initial-state" ref={this.tableRef}>
        <div className="y-axis">
          <div className="y-axis-header">
            <p className="body-copy">Resightings are the engines I&rsquo;ve observed on multiple occasions. It&rsquo;s entirely possible, more so likely, that these and others have passed back and forth at off hours. Some other observations:</p>
          </div>
          {
            resightings.map((entry) => {
              prevLeft = '';
              isPrevLeft = false;

              return (
                <div className="y-axis-row" key={getRandomNumberKey()}>
                  <div className="row-label">{entry.engine}</div>
                  <div className="row-axis" />
                  {
                    entry.dates.map((date) => {
                      function onEntryClick() {
                        dispatch(showDetail(date.entryId));
                      }
                      const left = `${getDatePositionInRange(new Date(date.date), new Date(this.initialSightingDate), new Date()) * 100}%`;
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
                            <span className="hidden">{entry.engine.substr(entry.engine.indexOf(',') + 2)}</span>
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
