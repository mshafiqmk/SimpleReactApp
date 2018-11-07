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
            Learning React is Fun 😍
          </p>
        </header>
        <HelloMessage name="shafiq" />
        <Timer />
        <TodoList />
      </div>
    );
  }
}

export default App;
