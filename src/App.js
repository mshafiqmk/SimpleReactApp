import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HelloMessage from './Components/HelloMessage';
import Timer from './Components/Timer';
import TodoList from './Components/Todo';

import "bootstrap/dist/css/bootstrap.min.css";
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <HelloMessage name="shafiq" />
        <Timer />
        <TodoList />
      </div>
    );
  }
}

export default App;
