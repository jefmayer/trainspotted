/* eslint-disable no-console */
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import EditEntry from './EditEntry';
import months from '../../utils/Months';
import { showDetail } from '../../actions';
import { formatDate, formatTime } from '../../utils/Formatting';
import { getResightings } from '../../selectors';

class EntryDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loadedClass: '',
    };
    this.onResightingClick = this.onResightingClick.bind(this);
  }

  componentDidMount() {
    const timer = setTimeout(() => {
      this.setState({ loadedClass: 'detail-loaded' });
      clearInterval(timer);
    }, 250);
  }

  onResightingClick(line, number, engines) {
    const { dispatch } = this.props;
    dispatch(showDetail({ line, number, engines }, 'resighting'));
  }

  findMatches(trainline, number) {
    const { resightings, trainLineList } = this.props;
    const engine = `${trainLineList.find(line => trainline === line.name).short}, ${number}`;
    const sighting = resightings.find(entry => entry.engine === engine);
    if (sighting) {
      return sighting.dates;
    }
    return null;
  }

  render() {
    const { onDetailClose, data, isLoggedIn } = this.props;
    const { loadedClass } = this.state;

    return (
      <div className={`detail-overlay ${loadedClass}`}>
        <div className="detail-bg" role="none" onClick={onDetailClose} />
        <div className="detail-panel">
          <div className="detail-header">
            <div className="detail-header-inner">
              <span className="header-title">
                Entry No.&nbsp;
                {data.number}
              </span>
              <button className="close-button" type="button" onClick={onDetailClose} />
            </div>
          </div>
          <div className="detail-body">
            <div className="detail-body-inner">
              <div className="detail-headline">
                {`${data.engines.length} engine train observed on ${formatDate(data.date, months)} at ${formatTime(data.time)} heading ${data.direction}.`}
              </div>
              <div className="detail-subhead">Engines</div>
              <table className="detail-table" cellPadding="0" cellSpacing="0">
                <thead>
                  <tr>
                    <th>Ord.</th>
                    <th>Line</th>
                    <th>No.</th>
                    <th>Loc.</th>
                    <th>Sightings</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="row-spacer">
                    <td colSpan="5" />
                  </tr>
                  {
                    data.engines.map((engine) => {
                      const bgStyle = {
                        backgroundColor: engine.color,
                      };
                      const matches = this.findMatches(engine.line, engine.number);
                      return (
                        <tr key={engine.number}>
                          <td><span className="engine-color-indicator" style={bgStyle}>{engine.order}</span></td>
                          <td><span>{engine.line}</span></td>
                          <td><span>{engine.number}</span></td>
                          <td><span>{engine.location}</span></td>
                          <td>
                            {matches
                              ? <button className="engine-details-button" type="button" onClick={() => this.onResightingClick(engine.line, engine.number, matches)}>{`${matches.length}`}</button>
                              : <span>1</span>
                            }
                          </td>
                        </tr>
                      );
                    })
                  }
                </tbody>
              </table>
              <div className="detail-subhead">Notes</div>
              <p className="detail-notes">{data.notes}</p>
            </div>
          </div>
          {isLoggedIn
            && (
              <EditEntry
                entryData={data}
              />
            )
          }
        </div>
      </div>
    );
  }
}

EntryDetail.propTypes = {
  dispatch: PropTypes.func.isRequired,
  onDetailClose: PropTypes.func.isRequired,
  data: PropTypes.shape({
    date: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    direction: PropTypes.string.isRequired,
  }),
  isLoggedIn: PropTypes.bool.isRequired,
  resightings: PropTypes.arrayOf(PropTypes.object),
  trainLineList: PropTypes.arrayOf(PropTypes.object),
};

// https://react-redux.js.org/using-react-redux/connect-mapdispatch
const mapDispatchToProps = dispatch => ({
  dispatch,
  ...bindActionCreators({ showDetail }, dispatch),
});

const mapStateToProps = (state) => {
  const { trainLines, userStatus } = state;
  const {
    items: trainLineList,
  } = trainLines;
  const {
    isLoggedIn,
  } = userStatus;
  const resightings = getResightings(state);
  return {
    isLoggedIn,
    resightings,
    trainLineList,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EntryDetail);
/* eslint-enable no-console */
