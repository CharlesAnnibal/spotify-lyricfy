import React from 'react';
import logo from './logo.svg';
import './App.css';
import Player from './components/Player/Player.component'
import Sidebar from './components/Sidebar/Sidebar.component'
import TopContainer from './components/TopContainer/TopContainer.component';
import LyricArea from './components/LyricArea/LyricArea.component';
function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <div className="app-container">
        <Sidebar />
        <LyricArea />
      </div>
      <Player />

    </div>
  );
}

export default App;
