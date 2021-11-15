import React, { Component } from 'react'
import Product from './Product'

export default class ShoppingCart extends Component {

  constructor(props){
    super(props);
    this.state = {
      products: [],
    }
  }

  render() {
    return (
      <div className="container-fluid">
        <h4>Shopping Cart</h4>
        <div className="row">{this.state.products.map((prod) => {
          return <Product key={prod.id} product={prod} onIncrement={this.handleIncrement} onDecrement={this.handleDecrement} onDelete={this.handleDelete}>
            <button className="btn btn-primary">Buy now</button>
          </Product>
        })}</div>
      </div>
    )
  }

  componentDidMount= async() => {

    const response = await fetch("http://localhost:3000/products", {method:"GET"});
    const productsArray = await response.json();
    this.setState({products:productsArray})
  }

  handleIncrement = (product, maxValue) => {
    //map through the array to increment the quantity
    let allProducts = [...this.state.products];
    if(product.quantity < maxValue){
      allProducts.map((item) => {return item.id===product.id ? item.quantity++ : null})
    }
    this.setState({products:allProducts})
  };
  handleDecrement = (product, minValue) => {
    //this is another way. Get index of the selected product
    let allProducts = [...this.state.products];
    let index = allProducts.indexOf(product);
    if(allProducts[index].quantity > minValue) {allProducts[index].quantity--;}
    this.setState({products:allProducts})
  };
  handleDelete = (product) => {
    if(window.confirm("Are you sure to delete?")){
    const newProducts = this.state.products.filter((item) => item.id !== product.id);
    this.setState({products:newProducts}); 
  }}
}
