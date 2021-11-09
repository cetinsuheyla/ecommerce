import React, {Component} from 'react';
import Navbar from "./Navbar";
import ShoppingCart from './ShoppingCart';

class App extends Component {
  render(){
    return (
      <div>
        <Navbar />
        <ShoppingCart />
      </div>
    )
  }
}

export default App;
