import React, { Component } from 'react';
import './App.css';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>working on redux</h1>
        <AddTodo />
        <Todos />
      </div>
    );
  }
}

export default App;
