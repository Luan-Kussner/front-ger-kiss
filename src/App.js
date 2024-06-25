import React from 'react';
import logo from './logo.png';
import './App.css';
import RoutesApp from "./routes";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" style={{ width: 115, height: 115, marginTop: 10 }} />
        <RoutesApp />
      </header>
    </div>
  );
}

export default App;
