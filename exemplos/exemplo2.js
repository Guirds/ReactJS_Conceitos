/*
import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { render } from "react-dom";

class Button extends Component {
  render() {
    return (
      <a href="" onClick={this.props.onClick}>
        {this.props.children}
      </a>
    );
  }
}

Button.defaultProps = {
  //Definindo as propriedades padrão do Children
  children: "Salvar"
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired, //Definindo os parametros do onclick, o que ele é? isRequired(obrigatorio a inserção de algum valor)
  children: PropTypes.string //É uma string
};

class App extends Component {
  handleClick() {
    alert("Botão clicado");
  }

  render() {
    return (
      <Fragment>
        <h1>Hello Rocketseat</h1>
        <Button
          onClick={() => {
            alert("Button 1");
          }}
        />
        <Button onClick={this.handleClick}>Enviar</Button>
      </Fragment>
    );
  }
}

render(<App />, document.getElementById("app"));
*/
