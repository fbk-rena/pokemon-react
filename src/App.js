import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Pokemon from "./components/Pokemon.jsx"

class App extends Component {
  constructor(){
    super();
    this.state =
    {
      apiResponse:
        {
          pokemon:[]
        }
    }
  }

  render() {
    return(
      <div>
        <Pokemon estatus={this.state.apiResponse} />
      </div>
    );
  }

  componentDidMount(){
    fetch("http://pokeapi.co/api/v1/pokedex/1/")
    .then((response) => {
      return(response.json())
    })
    .then((response)=>{
      this.setState({apiResponse:response})
    })
  }
}

export default App;
