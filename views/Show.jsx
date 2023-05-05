const React = require("react");

class Show extends React.Component {
  render() {
    const pokemon = this.props.pokemons;
    return (
      <div>
        <h1>Gotta Catch Them All</h1>
        <h2>{pokemon.name[0].toUpperCase() + pokemon.name.substring(1)}</h2>
        <img src={`${pokemon.img}.jpg`} alt={pokemon.name} />
        <a href="/pokemon">Return</a>
      </div>
    );
  }
}

module.exports = Show;
