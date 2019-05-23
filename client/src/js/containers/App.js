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
    const { dispatch } = this.props;
    dispatch(fetchPostsIfNeeded());
  }

  render() {
    const { posts } = this.props;
    return (
      <div className="App">
        <header className="app-header">
          <img src={logo} className="app-logo" alt="logo" />
          <div className="app-title">Trainspotted</div>
        </header>
        <Chart entries={posts} />
        <Detail />
      </div>
    );
  }
}

App.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object),
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  const { postsBySubreddit } = state;
  const {
    items: posts,
  } = postsBySubreddit || { /* eslint-disable-line dot-notation */
    items: [],
  };
  return {
    posts,
  };
};

export default connect(mapStateToProps)(App);
/* eslint-enable no-console */
