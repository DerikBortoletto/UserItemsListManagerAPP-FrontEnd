import React, { Component } from "react";
import UserLists from "./UserLists";

export default class LoginComponent extends Component {
  state = { username: "", password: "" }; // não precisa de constructor

  handleChange = (e) => {
    this.setState({ username: e.target.value });
  };

  handleChangePassword = (e) => {
    this.setState({ password: e.target.value });
  };
 
  handleSubmit = (e) => {
    var url = 'http://3.21.162.220:8000/api-token-auth/';
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: this.state.username, password: this.state.password })
    };
    fetch(url, requestOptions)
        .then(response => response.json())
        .then(data => {
            localStorage.setItem('token', data.token)
            this.setState({token: data.token});
        });
    e.preventDefault();
    
  };

  logout (){
    localStorage.removeItem('token');
    this.setState({token: null})
  }

  render() {
    
    const { username, password } = this.state;
    var token = localStorage.getItem('token');

    if(!token)
        return (
        <form onSubmit={this.handleSubmit}>
            <input
            type="text"
            value={username}
            onChange={this.handleChange}
            placeholder="Usuário"
            />
            <input
            type="password"
            value={password}
            onChange={this.handleChangePassword}
            placeholder="Senha"
            />
            <label />
            <input
            type="submit"
            value="Login"
            onChange={this.handleSubmit}
            placeholder="Enviar"
            />
        </form>
        );
    else
        return (
            <div>
                <UserLists />
                <button onClick={() => this.logout()}>Logout</button>
            </div>
        )

  }
}
