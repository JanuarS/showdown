import React from 'react';
import './App.css';
// import ScoreKeeper from './components/ScoreKeeper/index';
import Match from './components/Match/index'
// import UserForm from './components/UserForm';
import UsersList from './components/UsersList';

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <UsersList />
      {/* <UserForm /> */}
      <Match />
    </div>
  );
}

export default App;
