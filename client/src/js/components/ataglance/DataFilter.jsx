import React, { Component } from 'react';
import PropTypes from 'prop-types';

class DataFilter extends Component {
  onFilterClick = () => {
    const { label, onFilterClick } = this.props;
    onFilterClick(label);
  }

  render() {
    const { isActive, label } = this.props;
    return (
      <li key={label}>
        <button className={isActive ? 'active' : ''} onClick={this.onFilterClick} type="button">
          <span>{label}</span>
        </button>
      </li>
    );
  }
}

DataFilter.propTypes = {
  isActive: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  onFilterClick: PropTypes.func.isRequired,
};

export default DataFilter;
