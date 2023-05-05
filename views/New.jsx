const React = require("react")


class New extends React.Component {
  render() {
    return(
      <div>
        <h1>Create a New Pokemon!</h1>
        <form action="/pokemon" method="POST">
          Name: <input type="text" name="name" id="name" />
          Img: <input type="text" name="img" id="img"/>
          <input type="submit" value="Create Pokemon" />       
        </form>
      </div>
    )
  }
}

module.exports = New