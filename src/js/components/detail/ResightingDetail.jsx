/* eslint-disable no-console */
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { showDetail } from '../../actions';
import { getRandomNumberKey } from '../../utils/Formatting';

class ResightingDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loadedClass: '',
    };
    this.onDateClick = this.onDateClick.bind(this);
  }

  componentDidMount() {
    const timer = setTimeout(() => {
      this.setState({ loadedClass: 'detail-loaded' });
      clearInterval(timer);
    }, 250);
  }

  onDateClick(id) {
    const { dispatch, entries } = this.props;
    dispatch(showDetail(entries.find(e => e._id === id), 'entry')); /* eslint-disable-line no-underscore-dangle */
  }

  render() {
    const { onDetailClose, data, entries } = this.props;
    const { loadedClass } = this.state;
    return (
      <div className={`detail-overlay ${loadedClass}`}>
        <div className="detail-bg" role="none" onClick={onDetailClose} />
        <div className="detail-panel">
          <div className="detail-header">
            <div className="detail-header-inner">
              <span className="header-title">Engine</span>
              <button className="close-button" type="button" onClick={onDetailClose} />
            </div>
          </div>
          <div className="detail-body">
            <div className="detail-body-inner">
              <div className="detail-headline">{`${data.line} ${data.number}`}</div>
              <div className="detail-subhead">Sightings</div>
              <table className="detail-table" cellPadding="0" cellSpacing="0">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Dir.</th>
                    <th>Pos.</th>
                    <th>Loc.</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="row-spacer">
                    <td colSpan="5" />
                  </tr>
                  {
                    data.engines.map((engine) => {
                      const entry = entries.find(e => e._id === engine.entryId); /* eslint-disable-line no-underscore-dangle */
                      const engineData = entry.engines.find(e => e.line === data.line && e.number === data.number);
                      return (
                        <tr className="clickable-data-row" key={getRandomNumberKey()} onClick={() => this.onDateClick(engine.entryId)}>
                          <td><span>{engine.date}</span></td>
                          <td><span>{entry.time.replace(':00 ', ' ')}</span></td>
                          <td><span>{entry.direction}</span></td>
                          <td><span>{`${engineData.order}/${entry.engines.length}`}</span></td>
                          <td><span>{engineData.location}</span></td>
                        </tr>
                      );
                    })
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

ResightingDetail.propTypes = {
  dispatch: PropTypes.func.isRequired,
  onDetailClose: PropTypes.func.isRequired,
  data: PropTypes.shape({
    line: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    engines: PropTypes.arrayOf(PropTypes.object),
  }),
  entries: PropTypes.arrayOf(PropTypes.object),
};

export default connect(mapStateToProps, mapDispatchToProps)(ResightingDetail);
/* eslint-enable no-console */
