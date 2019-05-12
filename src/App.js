import React from 'react';
import Chart from './js/modules/chart/Chart';
import logo from './img/trainspotted-logo.svg';
import './scss/App.scss';

const data = [
  {
    id: {
      $oid: '5cd1cc73e7179a596b1c743f',
    },
    engines: [
      {
        number: '8750',
        line: 'Canadian Pacific',
        order: 1,
        location: 'front',
      },
    ],
    date: '3/19/2019',
    time: '10:27:00 AM',
    direction: 'south',
  },
  {
    id: {
      $oid: '5cd1cca0e7179a596b1c745a',
    },
    engines: [
      {
        number: '8870',
        line: 'Canadian Pacific',
        order: 1,
        location: 'front',
      },
      {
        number: '4805',
        line: 'Kansas City Southern',
        order: 2,
        location: 'front',
      },
      {
        number: '9833',
        line: 'Canadian Pacific',
        order: 1,
        location: 'front',
      },
    ],
    date: '3/20/2019',
    time: '9:21:00 AM',
    direction: 'south',
  },
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="app-logo" alt="logo" />
        <div className="app-title">Trainspotted</div>
      </header>
      <Chart data={data} />
    </div>
  );
}

export default App;
