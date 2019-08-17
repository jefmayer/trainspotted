/* eslint-disable no-console */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import EditEntry from './EditEntry';
import months from '../../utils/Months';
import { formatDate, formatTime } from '../../utils/Formatting';
import { findMatches } from '../../utils/Lookup';

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loadedClass: '',
    };
  }

  componentDidMount() {
    const timer = setTimeout(() => {
      this.setState({ loadedClass: 'detail-loaded' });
      clearInterval(timer);
    }, 250);
  }

  editEntry() {
    console.log(this);
  }

  render() {
    const { onDetailClose, data, entries, isLoggedIn } = this.props;
    const { loadedClass } = this.state;

    return (
      <div className={`detail-overlay ${loadedClass}`}>
        <div className="detail-bg" role="none" onClick={onDetailClose} />
        <div className="detail-panel">
          <div className="detail-header">
            <div className="detail-header-inner">
              <span className="entry-number">
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
                    <th>Pos.</th>
                    <th>Sightings</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    data.engines.map((engine) => {
                      const bgStyle = {
                        backgroundColor: engine.color,
                      };
                      return (
                        <tr key={engine.number}>
                          <td><span className="engine-color-indicator" style={bgStyle}>{engine.order}</span></td>
                          <td><span>{engine.line}</span></td>
                          <td><span>{engine.number}</span></td>
                          <td><span>{engine.location}</span></td>
                          <td><span>{findMatches(engine.line, engine.number, entries)}</span></td>
                        </tr>
                      );
                    })
                  }
                </tbody>
              </table>
              <div className="detail-subhead">Notes</div>
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

const mapStateToProps = (state) => {
  const { userStatus } = state;
  const {
    isLoggedIn,
  } = userStatus;
  return {
    isLoggedIn,
  };
};

Detail.propTypes = {
  onDetailClose: PropTypes.func.isRequired,
  data: PropTypes.shape({
    date: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    direction: PropTypes.string.isRequired,
  }),
  entries: PropTypes.arrayOf(PropTypes.object),
  isLoggedIn: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(Detail);
/* eslint-enable no-console */
