import React from 'react';
import logo from './logo.svg';
import './App.css';
import Player from  './components/Player/Player.component'
import TopContainer from './components/TopContainer/TopContainer.component'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TopContainer/>
        <Player/>
        
      </header>
    </div>
  );
}

export default App;
