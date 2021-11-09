import React, { Component } from 'react'
import Product from './Product'

export default class ShoppingCart extends Component {

  state = {
    products: [
      {id:1, productName:"iPhone", price: 1500, quantity: 0},
      {id:2, productName:"Samsung", price: 2800, quantity: 0},
      {id:3, productName:"LG", price: 1600, quantity: 0},
      {id:4, productName:"Google", price: 1700, quantity: 0},
      {id:5, productName:"Motorola", price: 1890, quantity: 0},
      {id:6, productName:"Nokia", price: 1800, quantity: 0},
      {id:7, productName:"Fizz", price: 1450, quantity: 0},

    ]
  }

  render() {
    return (
      <div className="container-fluid">
        <h4>Shopping Cart</h4>
        <div className="row">{this.state.products.map((prod) => {
          return <Product key={prod.id} product={prod} onIncrement={this.handleIncrement} onDecrement={this.handleDecrement}>
            <button className="btn btn-primary">Buy now</button>
          </Product>
        })}</div>
      </div>
    )
  }

  handleIncrement = (product, maxValue) => {
    //get index of the selected product
    let allProducts = [...this.state.products];
    let index = allProducts.indexOf(product);
    if(allProducts[index].quantity < maxValue){allProducts[index].quantity++;}
    this.setState({products:allProducts})
  };
  handleDecrement = (product, minValue) => {
    let allProducts = [...this.state.products];
    let index = allProducts.indexOf(product);
    if(allProducts[index].quantity > minValue) {allProducts[index].quantity--;}
    this.setState({products:allProducts})
  };
}
