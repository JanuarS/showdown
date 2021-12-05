import React from 'react';
import './App.css';
import ScoreKeeper from './components/ScoreKeeper/index';
import Match from './components/Match/index'
import UserForm from './components/UserForm';

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <UserForm />
      <Match />
    </div>
  );
}

export default App;
