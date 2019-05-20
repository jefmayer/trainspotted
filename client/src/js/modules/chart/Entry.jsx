/* eslint-disable prefer-destructuring, no-console */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Entry extends Component {
  constructor(props) {
    super(props);
    this.divRef = React.createRef();
  }

  componentDidMount() {
    const { entry } = this.props;
    // Look at time to create percentage offset
    // Add 12, not to 12PM
    const arr = entry.time.split(':');
    if (entry.time.indexOf('PM') !== -1 && entry.time.indexOf('12:') === -1) {
      arr[0] = parseInt(arr[0], 10) + 12;
    }
    // Set 12AM to 0
    if (entry.time.indexOf('AM') !== -1 && entry.time.indexOf('12:') !== -1) {
      arr[0] = parseInt(arr[0], 10) - 12;
    }
    const pct = ((arr[0] * 3600 + parseInt(arr[1], 10) * 60) / 864).toFixed(2);
    this.divRef.current.setAttribute('style', `left:${pct}%;`);
  }

  render() {
    const { entry } = this.props;

    function onEntryClick() {
      console.log('onEntryClick');
    }

    return (
      <button className="engine-manifest" ref={this.divRef} type="button" onClick={onEntryClick} onKeyDown={onEntryClick}>
        {
          entry.engines.map((engine) => {
            const bgStyle = {
              backgroundColor: engine.color,
            };
            return (
              <span className="engine-number" style={bgStyle} key={engine.number}>
                {engine.number}
              </span>
            );
          })
        }
      </button>
    );
  }
}

Entry.propTypes = {
  entry: PropTypes.shape({
    time: PropTypes.string.isRequired,
    engines: PropTypes.arrayOf(PropTypes.object),
  }),
};

export default Entry;
/* eslint-enable prefer-destructuring, no-console */
