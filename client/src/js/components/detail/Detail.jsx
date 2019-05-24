/* eslint-disable no-console */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Detail extends Component {
  componentDidMount() {
    console.log('Detail.jsx, componentDidMount');
  }

  render() {
    const { onDetailClose, data } = this.props;
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];

    function formatDate(date) {
      const arr = date.split('/');
      return `${months[arr[0] - 1]} ${arr[1]}, ${arr[2]}`;
    }

    function formatTime(time) {
      const arr = time.split(':');
      let ampm = 'a.m.';
      if (time.indexOf('PM') !== -1) {
        ampm = 'p.m.';
      }
      return `${arr[0]}:${arr[1]} ${ampm}`;
    }

    return (
      <div className="detail-overlay">
        <div className="detail-panel">
          <div className="detail-header">
            <div className="detail-header-inner">
              <span className="entry-number">
                Entry No.&nbsp;
                {data.number}
              </span>
              <button className="close-button" type="button" onClick={onDetailClose}>Close</button>
            </div>
          </div>
          <div className="detail-body">
            <div className="detail-body-inner">
              <div className="detail-headline">
                {`${data.engines.length} engine train observed on ${formatDate(data.date)} at ${formatTime(data.time)} heading ${data.direction}.`}
              </div>
              <div className="detail-subhead">Engines</div>
              <table className="detail-table" cellPadding="0" cellSpacing="0">
                <thead>
                  <tr>
                    <th>Ord.</th>
                    <th>Line</th>
                    <th>No.</th>
                    <th>Pos.</th>
                    <th>History</th>
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
                          <td><span>&nbsp;</span></td>
                        </tr>
                      );
                    })
                  }
                </tbody>
              </table>
              <div className="detail-subhead">Notes</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Detail.propTypes = {
  onDetailClose: PropTypes.func.isRequired,
  data: PropTypes.shape({
    date: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    direction: PropTypes.string.isRequired,
  }),
};

export default Detail;
/* eslint-enable no-console */
