import React, { Component } from 'react';
import './App.css';

class App extends Component {
  
  constructor() {
    super();
    this.state =  {
      monsters: []
    }
  }

  render() {
    return (
      <div className="App">
        {this.state.monsters.map((monster) => (
        <h1 key={monster.id}>{monster.name}</h1>
        ))}
      </div>
    );
  }

  componentDidMount() { //Renders this code block when a component is mounted on virtual DOM for first time
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => this.setState({monsters: users}));
  }
}

export default App;
