import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

class App extends Component {

  //to get the state from Component
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ""
    }
  }

  //arrow function binds the function to the context where it is defined, here App component
  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  }

  render() {
    //object destructuring - make a constant copy of state here without affecting original state, for later use
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <SearchBox placeholder="search monsters" handleChange={this.handleChange} />
        <CardList monsters={filteredMonsters} />
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
