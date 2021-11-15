import React, {Component} from 'react';
import Navbar from "./Navbar";
import Dashboard from './Dashboard';
import Login from './Login';
import ShoppingCart from './ShoppingCart';
import CustomersList from './CustomersList';
import NoMatchPage from './NoMatchPage';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

class App extends Component {
  render(){
    return (
      <BrowserRouter>
        <Navbar />
        <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/cart" element={<ShoppingCart/>} />
        <Route path="/customers" element={<CustomersList/>} />
        <Route path="*" element={<NoMatchPage />}/>
        </Routes>
      </BrowserRouter>
    )
  }
}

export default App;
