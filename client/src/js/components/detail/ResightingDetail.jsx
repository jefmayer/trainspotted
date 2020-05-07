/* eslint-disable no-console */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getRandomNumberKey } from '../../utils/Formatting';

class ResightingDetail extends Component {
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

  render() {
    const { onDetailClose, data, trainLineList } = this.props;
    const { loadedClass } = this.state;
    console.log(trainLineList);

    return (
      <div className={`detail-overlay ${loadedClass}`}>
        <div className="detail-bg" role="none" onClick={onDetailClose} />
        <div className="detail-panel">
          <div className="detail-header">
            <div className="detail-header-inner">
              <span className="header-title">Engine Resightings</span>
              <button className="close-button" type="button" onClick={onDetailClose} />
            </div>
          </div>
          <div className="detail-body">
            <div className="detail-body-inner">
              <div className="detail-headline">
                Sightings of&nbsp;
                { data.line }
                &nbsp;
                { data.number }
              </div>
              <div className="detail-subhead">Engines</div>
              <table className="detail-table" cellPadding="0" cellSpacing="0">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Engines in Train</th>
                    <th>Ord.</th>
                    <th>Pos.</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    data.engines.map((engine) => {
                      console.log(engine);
                      return (
                        <tr key={getRandomNumberKey()}>
                          <td><span>{engine.date}</span></td>
                          <td><span>&nbsp;</span></td>
                          <td><span>&nbsp;</span></td>
                          <td><span>&nbsp;</span></td>
                        </tr>
                      );
                    })
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { trainLines } = state;
  const {
    items: trainLineList,
  } = trainLines;
  return {
    trainLineList,
  };
};

ResightingDetail.propTypes = {
  onDetailClose: PropTypes.func.isRequired,
  data: PropTypes.shape({
    line: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    engines: PropTypes.arrayOf(PropTypes.object),
  }),
  trainLineList: PropTypes.arrayOf(PropTypes.object),
};

export default connect(mapStateToProps)(ResightingDetail);
/* eslint-enable no-console */
