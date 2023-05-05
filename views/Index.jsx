const React = require('react')

const myStyle = {
    color: '#4e03fc',
    textAlign: "center",
    };

class Index extends React.Component {
    render() {
        const {pokemon} = this.props
        return (
            
        <div style={myStyle}>
        <h1>See All The Pokemon!</h1>
        <ul>
        {pokemon.map((pokemon, i) => {
         return (
         <li key={i}>
         <a href={`/pokemon/${pokemon._id}`}>
         {`${pokemon?.name?.charAt(0)?.toUpperCase()}${pokemon?.name?.slice(1)}`}
          </a>
             </li>
                    )
                 })}
             </ul>
         </div>
            
        )
    }
}
module.exports = Index;