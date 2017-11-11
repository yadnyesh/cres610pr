import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props){
    super(props)
    this.yourname = "Varada";
    this.state = {}
  }

  sayHello(name){
    return "Hello " + name;
  }

  render() {
    const myName = "Yadnyesh";
    return (
      <div className="App">
        <h2> Sample Data for: {this.sayHello(this.yourname)} </h2>
      </div>
    );
  }
}

export default App;
