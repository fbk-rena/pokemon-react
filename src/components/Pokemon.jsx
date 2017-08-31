import React from "react"

class Pokemon extends React.Component{
  render(){
    let pokeStatus = this.props.estatus.pokemon.map((pokemon) =>{
      return <div>{pokemon.name} {pokemon.resource_uri}</div>;
    });

    console.log(pokeStatus);

    return(
      <div>{pokeStatus}</div>
    );
  }
}

export default Pokemon;
