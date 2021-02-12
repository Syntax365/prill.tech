import React, { Component } from 'react';

import Component1 from '../../Components/Component1.jsx'

import './App.css';

class App extends Component {

  constructor(props) {

    super(props);
    this.state = {
      testResponse: {}
    }

    this.getTestData();

  }

  getTestData() {
    fetch('/test')
      .then(response => response.json())
      .then(data => {
        this.setState({
          testResponse: data
        });
      });
  }

  render() {
    return (
      
        <div className="App">
          <h1>{this.state.testResponse.fullName}</h1>
          <p>Test Response: {this.state.testResponse.integrationTest}</p>
          <Component1 />
        </div>
      
    );
  }
}

export default App;