/* eslint-disable no-console */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Entry from './Entry';

class EntriesForDate extends Component {
  constructor(props) {
    super(props);
    this.divRef = React.createRef();
    this.entryHeight = 0;
  }

  componentDidMount() {
    this.divRef.current.setAttribute('style', `height:${this.entryHeight}px;`);
  }

  render() {
    const { date } = this.props;
    const { entries } = this.props;

    return (
      <div className="entries-for-date" ref={this.divRef}>
        {
          entries.map((entry) => {
            if (entry.date === date) {
              if (this.entryHeight < 20 * entry.engines.length) {
                this.entryHeight = 20 * entry.engines.length;
              }
              return <Entry key={entry._id} entry={entry} />; /* eslint-disable-line no-underscore-dangle */
            }
            return '';
          })
        }
      </div>
    );
  }
}

EntriesForDate.propTypes = {
  date: PropTypes.string.isRequired,
  entries: PropTypes.arrayOf(PropTypes.object),
};

export default EntriesForDate;
/* eslint-enable no-console */
