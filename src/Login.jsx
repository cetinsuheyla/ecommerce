import React, { Component } from 'react'

export default class Login extends Component {
  constructor(props){
    super(props);
    this.state = {email:"", password:"", message:""}
  }
  render() {
    return (
      <div className="col-lg-9">
        <h4 className="m-1 p-2 border-bottom">Login</h4>
        <div className="m-2 form-group form-row">
          <label className="col-lg-4">Email:</label>
          <input 
          type="text" 
          className="form-control" 
          value={this.state.email} 
          onChange={(event) => {this.setState({email:event.target.value})}}>
          </input>
        </div>
        <div className="m-2 form-group form-row">
          <label className="col-lg-4">Password:</label>
          <input 
          type="password" 
          className="form-control" 
          value={this.state.password}
          onChange={(event) => this.setState({password:event.target.value})}>
          </input>
        </div>
        <div className="text-end">
          {this.state.message}
          <button className="btn btn-primary" onClick={this.onLoginClick}>Login</button>
        </div>
      </div> 
    );
  }
  onLoginClick = async() => {
    
    let response = await fetch(`http://localhost:3000/users?email=${this.state.email}&password=${this.state.password}`, {method:"GET"})
    let userInfo = await response.json();

    if(userInfo.length > 0){
      this.setState({message : <span className="text-success m-2">Successfully logged in</span>})
    }else{
      this.setState({message : <span className="text-danger m-2">Invalid login, please try again</span>})
    }
  };
}
