import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Coursesales from './Coursesales';

class App extends Component {
  render() {
    var courses = [
      {name: 'Complete iOS10 dev course', price: 199},
      {name: 'Complete Pentesting course', price: 299},
      {name: 'Complete Front End Dev dev course', price: 180},
      {name: 'Big bounty Pen testing', price: 190}
    ]
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Course Purchase page</h1>
        </header>
        <Coursesales items={courses}/>
      </div>
    );
  }
}

export default App;
