import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';

import Button from './Button';

import './style.scss';

// StateFul
class App extends Component {
  state = {
    counter: 0,
  };

  handleClick = () => {
    this.setState({ counter: state.counter + 1 });
  };

  render() {
    return (
      <Fragment>
        <h1>Hello Rocketseat</h1>
        <h2>{this.state.counter}</h2>
        <Button
          onClick={() => {
            alert('Button 1');
          }}
        />
        <Button onClick={this.handleClick}>Somar</Button>
      </Fragment>
    );
  }
}

render(<App />, document.getElementById('app'));
