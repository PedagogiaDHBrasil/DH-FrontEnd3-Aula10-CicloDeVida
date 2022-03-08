import React from 'react';
import ReactDOM from 'react-dom';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {mounted: "Ainda não montado"};
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({mounted: "MONTADO"})
    }, 1000)
  }
  render() {
    return (
      <h1>Sou um componente e estou: {this.state.mounted}</h1>
    );
  }
}

ReactDOM.render(<Header />, document.getElementById('root'));