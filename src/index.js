import React, { Component } from 'react';
import { render } from 'react-dom';

import { createStore } from 'redux';
import { connect, Provider } from 'react-redux';

import './styles.scss';

const initialState = {
  count: 0,
};

const INCREMENT = 'INCREMENT';

const incrementValue = () => ({
  type: INCREMENT,
});

const reducer = (state = initialState, action) => {
  if (action.type === INCREMENT) {
    return {
      count: state.count + 1,
    };
  }
  return state;
};

const store = createStore(reducer);

class Counter extends Component {
  render() {
    return (
      <main className="Counter">
        <p className="count">0</p>
        <section className="controls">
          <button>Increment</button>
          <button>Decrement</button>
          <button>Reset</button>
        </section>
      </main>
    );
  }
}

render(<Counter />, document.getElementById('root'));
