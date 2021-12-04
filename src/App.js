import React from 'react';
// import logo from './logo.svg';
import './App.css';
import ScoreKeeper from './components/ScoreKeeper/index';

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <div className='match'>
        <ScoreKeeper team='Red Team'/>
        <h2>vs.</h2>
        <ScoreKeeper team='Blue Team'/>
      </div>
    </div>
  );
}

export default App;
