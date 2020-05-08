/* eslint-disable no-console */
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { showDetail } from '../../actions';
import { getRandomNumberKey } from '../../utils/Formatting';

class EngineDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loadedClass: '',
    };
    this.onEntryClick = this.onEntryClick.bind(this);
  }

  componentDidMount() {
    const timer = setTimeout(() => {
      this.setState({ loadedClass: 'detail-loaded' });
      clearInterval(timer);
    }, 250);
  }

  onEntryClick(id) {
    const { dispatch, entries } = this.props;
    dispatch(showDetail(entries.find(e => e._id === id), 'entry')); /* eslint-disable-line no-underscore-dangle */
  }

  render() {
    const { onDetailClose, data } = this.props;
    const { loadedClass } = this.state;
    return (
      <div className={`detail-overlay ${loadedClass}`}>
        <div className="detail-bg" role="none" onClick={onDetailClose} />
        <div className="detail-panel">
          <div className="detail-header">
            <div className="detail-header-inner">
              <span className="header-title">Engine Sightings</span>
              <button className="close-button" type="button" onClick={onDetailClose} />
            </div>
          </div>
          <div className="detail-body">
            <div className="detail-body-inner">
              <div className="detail-headline">{`${data.day}s`}</div>
              <div className="detail-subhead">{`${data.startTime}\u2014${data.endTime}`}</div>
              <table className="detail-table" cellPadding="0" cellSpacing="0">
                <thead>
                  <tr>
                    <th>Time</th>
                    <th>Date</th>
                    <th>Line</th>
                    <th>No.</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="row-spacer">
                    <td colSpan="4" />
                  </tr>
                  {
                    data.engines.map(engine => (
                      <tr className="clickable-data-row" key={getRandomNumberKey()} onClick={() => this.onEntryClick(engine.id)}>
                        <td><span>{engine.time.replace(':00 ', ' ')}</span></td>
                        <td><span>{engine.date}</span></td>
                        <td><span>{engine.line}</span></td>
                        <td><span>{engine.number}</span></td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
            </div>
            <div className="detail-subhead" />
          </div>
        </div>
      </div>
    );
  }
}

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
  return {
    entries,
  };
};

EngineDetail.propTypes = {
  dispatch: PropTypes.func.isRequired,
  onDetailClose: PropTypes.func.isRequired,
  data: PropTypes.shape(),
  entries: PropTypes.arrayOf(PropTypes.object),
};

export default connect(mapStateToProps, mapDispatchToProps)(EngineDetail);
/* eslint-enable no-console */
