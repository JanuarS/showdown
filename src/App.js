import React from 'react';
// import logo from './logo.svg';
import './App.css';
import ScoreKeeper from './ScoreKeeper';

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <div className="ScoreKeeper">
        <ScoreKeeper team='Red Team'/>
        <ScoreKeeper team='Blue Team'/>
      </div>
    </div>
  );
}

export default App;
