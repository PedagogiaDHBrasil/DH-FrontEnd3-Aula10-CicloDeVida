import React from 'react';
import ReactDOM from 'react-dom';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {imHungryFor: "Pastel"};
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({imHungryFor: "Pizza"})
    }, 1000)
  }
  componentDidUpdate() {
    document.getElementById("myH2").innerHTML =
    "Agora eu sinto vontade de comer " + this.state.imHungryFor;
    console.log("O componente foi atualizado!");
  }
  render() {
    return (
      <div>
      <h1>Agora eu sinto vontade de comer {this.state.imHungryFor}</h1>
      <h2 id="myH2"></h2>
      </div>
    );
  }
}

ReactDOM.render(<Header />, document.getElementById('root'));