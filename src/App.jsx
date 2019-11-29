import React from 'react';
import Grid from './components/Grid';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className = "App" >
      <header className = "App-header" >
        <img src = { logo }
        className = "App-logo"
        alt = "logo" />
        <h1>Responsive Background Grid</h1>
        {/* <a className = "App-link" href = "https://reactjs.org"
        target = "_blank" rel = "noopener noreferrer" >Learn React yeah yeah</a> */}
      </header>
      <main>
        <Grid/>
      </main>
    </div>
  );
}

export default App;