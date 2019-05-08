import React from 'react';
import logo from './img/trainspotted-logo.svg';
import './scss/App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="app-logo" alt="logo" />
        <div className="app-title">Trainspotted</div>
      </header>
    </div>
  );
}

export default App;
