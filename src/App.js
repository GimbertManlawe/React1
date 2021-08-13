import React, { Component }  from 'react';
import { CardList, } from './components/card-list/card-list.component';
import './App.css';
import {SearchBox} from './components/search-box/search-box.component';


class App extends Component{
  constructor(){
    super();

    this.state = {
    Vaccine:[
    ],
    searchField: ''
    };
  }

  componentDidMount(){
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ Vaccine:users }));
  }
handleChange = e => {
  this.setState({ searchField: e.target.value});
}
  render(){
    const { Vaccine, searchField } = this.state;
    const filteredVaccine = Vaccine.filter(Vaccine =>
      Vaccine.name.toLowerCase().includes(searchField.toLocaleLowerCase())
    )
    return(
          <div className="App">
          <h1>Vaccine Monsters</h1>
          <SearchBox
            placeholder='search Vaccine'
            handleChange={this.handleChange}
          />
          <CardList Vaccine={filteredVaccine}/>
          </div>
        );
      }
    }

export default App;
