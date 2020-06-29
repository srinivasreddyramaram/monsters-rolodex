import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';

class App extends Component {

  //to get the state from Component
  constructor() {
    super();
    this.state = {
      monsters: []
    }
  }

  render() {
    return (
      <div className="App">
        <CardList monsters={this.state.monsters}>
        </CardList>
      </div>
    );
  }

  componentDidMount() { //Renders this code block when a component is mounted on virtual DOM for first time
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }
}

export default App;
