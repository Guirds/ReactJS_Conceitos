/*
import React, { Component, Fragment } from "react";
import { render } from "react-dom";

import Button from "./Button";

//StateFul
class App extends Component {
  state = {
    counter: 0
  };

  componentDidMount() {}

  //Atualizações ates de chegar no render, define um parametro de <= 10 counter.
  shouldComponentUpdate(nextProps, nextState) {
    return nextState.counter <= 10;
  }

  handleClick = () => {
    this.setState(state => ({ counter: state.counter + 1 }));
    this.setState(state => ({ counter: state.counter + 1 }));
  };

  //Desmontagem
  componentWillUnmount() {}

  //Error
  componentDidCatch(error, info) {
    this.setState({ error: "Aconteuceu um erro" });
  }

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
