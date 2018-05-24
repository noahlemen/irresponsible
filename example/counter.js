import React from 'react';
import { render } from 'react-dom';
import irresponsible from "../src/irresponsible";

const Counter = ({ state, increment, decrement }) => (
  <center>
    <h1>{state.count}</h1>
    <button onClick={decrement}>-</button>
    <button onClick={increment}>+</button>
  </center>
);

const App = irresponsible(
  {
    state: {
      count: 0
    },
    increment() {
      this.setState({ count: this.state.count + 1 });
    },
    decrement() {
      this.setState({ count: this.state.count - 1 });
    }
  },
  Counter
);

render(<App />, document.getElementById('root'));
