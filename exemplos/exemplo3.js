/*import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { render } from "react-dom";

class Button extends Component {
  static defaultProps = {
    //Definindo as propriedades padrão do Children
    children: "Salvar"
  };

  static propTypes = {
    onClick: PropTypes.func.isRequired, //Definindo os parametros do onclick, o que ele é? isRequired(obrigatorio a inserção de algum valor)
    children: PropTypes.string //É uma string
  };

  render() {
    return <button onClick={this.props.onClick}>{this.props.children}</button>;
  }
}

class App extends Component {
  state = {
    counter: 0
  };

  handleClick = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  /*Exemplo executa a fila do state e finaliza ela
  handleClick = () => {
    this.setState(state => ({ counter: state.counter + 1 }));
    this.setState(state => ({ counter: state.counter + 1 }));
  };
  */
/*
  render() {
    return (
      <Fragment>
        <h1>Hello Rocketseat</h1>
        <h2>{this.state.counter}</h2>
        <Button
          onClick={() => {
            alert("Button 1");
          }}
        />
        <Button onClick={this.handleClick}>Somar</Button>
      </Fragment>
    );
  }
}

render(<App />, document.getElementById("app"));
*/
