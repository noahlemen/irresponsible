# irresponsible
> reckless state wrapper for stateless functional react components

ever working with a stateless functional component and then realize you need state? do you wish you could add state without the """"hassle"""" of switching it to extend `React.Component`? _LOOK NO FURTHER!!!_

⚠️ **probably don't actually use this** ⚠️ 

<sup>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i>or do, i don't care...</i></sup>

<sub>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<sup>it was just a silly idea i wanted to try out, ok?</sup></sub>

## install
```sh
npm install --save @kedromelon/irresponsible
```

## api

### `irresponsible(componentDescriptor, StatelessComponent)`
returns a `React.Component` wrapping `StatelessComponent` with `componentDescriptor` passed as props. any other props passed to the returned component pass through to `StatelessComponent`.
#### arguments
- `componentDescriptor`: object containing properties to apply to the parent component instance.
- `StatelessComponent`: component to wrap with a stateful `React.Component`. all entries on `componentDescriptor` are provided. any functions provided on `componentDescriptor` are bound to the parent component instance's `this`.

## example
```sh
npm run example
```

```jsx
import irresponsible from "@kedromelon/irresponsible";

const Counter = ({ state, increment, decrement }) => (
  <div>
    <h1>{state.count}</h1>
    <button onClick={decrement}>-</button>
    <button onClick={increment}>+</button>
  </div>
);

export default irresponsible(
  {
    state: { count: 0 },
    increment() {
      this.setState({ count: this.state.count + 1 });
    },
    decrement() {
      this.setState({ count: this.state.count - 1 });
    }
  },
  Counter
);
```


