import React, { Component } from 'react';
import './App.css';

class App extends Component {
  
  constructor() {
    super();
    this.state =  {
      monsters: [
        {
          id: 1,
          name: 'Banshee'
        },
        {
          id: 2,
          name: 'Troll'
        },
        {
          id: 3,
          name: 'Dwarf'
        },
        {
          id: 4,
          name: 'Frankenstein'
        }
      ]
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
}

export default App;
