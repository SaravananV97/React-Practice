import React, { Component } from 'react';
import './App.css';
import BurgerBuilder from './container/BurgerBuilder/burgerbuilder';
class App extends Component {
  render() {
    return (
      <div>
          <BurgerBuilder />
      </div>
      );
  }
}

export default App;
