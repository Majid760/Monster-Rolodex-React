import React from 'react';
import './App.css';
//components

import {CardList} from './components/card-list/card-list.component';
import {Searchbox} from './components/search-box/search-box.component';

class App extends React.Component {
  constructor() {
    super();
    this.state={
      monsters:[],
      searchField: '',
    };
  }
  componentDidMount(){
     fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=> response.json())
    .then(monsters=> this.setState({monsters:monsters}));
  }

  handleChange=(e)=>{
    this.setState({searchField:e.target.value});
  }
  render(){
    const {monsters,searchField}=this.state;
    const filteredMonsters=monsters.filter(monster=>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      );
    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <Searchbox placeholder='search monster' handleChange={this.handlevalue}></Searchbox>
        <CardList monster={filteredMonsters}>
        </CardList>
      </div>
    );
  }
}

export default App;
