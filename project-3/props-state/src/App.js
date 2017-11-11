import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
          <h3>prop number is {this.props.propNumber}</h3>
          <h3>prop string is {this.props.propString}</h3>
          <h3>prop Object is {this.props.propObject.obj1}</h3>
        <Parent />
      </div>
    );
  }
}

App.propTypes = {
  propObject: PropTypes.object,
  propString: PropTypes.string,
  propNumber: PropTypes.number
}

App.defaultProps = {
  propNumber: 3,
  propString: "This is prop String",
  propObject: {
    obj1: "I am object 1",
    obj2: "I am object 2",
    obj3: "I am object 3"
  }
}

class Parent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cars: ['s-BMW', 's-MERC', 's-CITY', 's-AUDI']
    };
  }
  render() {
    return(
      <div>
        <h2>Just some info</h2>
        <Cars msg="Cars are cool" model="34756" coolCars={this.state.cars}/>
      </div>
    );
  }
}

Parent.defaultProps = {
  cars: ['BMW', 'MERC', 'CITY', 'AUDI']
}


class Cars extends Component {
  render() {
    console.log(this.props)
    return(
      <div>
        <h3>I am from cars component</h3>
        <p>{this.props.msg}</p>
        <p>{this.props.model}</p>
        <div>{this.props.coolCars.map((item, i) => {
          return  <p key={i}>{item}</p>;
        })}</div>
      </div>
    );
  }
}


export default App;
