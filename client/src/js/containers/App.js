/* eslint-disable no-console */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPostsIfNeeded } from '../actions';
import Chart from '../components/chart/Chart';
import Detail from '../components/detail/Detail';
import logo from '../../img/trainspotted-logo.svg';
import '../../scss/App.scss';

class App extends Component {
  componentDidMount() {
    const { dispatch, selectedSubreddit } = this.props;
    dispatch(fetchPostsIfNeeded(selectedSubreddit));
  }

  render() {
    const { posts } = this.props;
    return (
      <div className="App">
        <header className="app-header">
          <img src={logo} className="app-logo" alt="logo" />
          <div className="app-title">Trainspotted</div>
          <div>{posts}</div>
        </header>
        <Chart />
        <Detail />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { selectedSubreddit, postsBySubreddit } = state;
  const {
    items: posts,
  } = postsBySubreddit[selectedSubreddit] || {
    isFetching: true,
    items: [],
  };

  return {
    selectedSubreddit,
    posts,
  };
};

App.propTypes = {
  selectedSubreddit: PropTypes.string.isRequired,
  posts: PropTypes.arrayOf(PropTypes.object),
  dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(App);
/* eslint-enable no-console */
