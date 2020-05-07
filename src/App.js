import React from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

function App() {
  return (
    <div className="App">
      <UserInput />
      <UserOutput username="pmueller"/>
      <UserOutput username="tzollner"/>
      <UserOutput username="zmeier"/>
    </div>
  );
}

export default App;
