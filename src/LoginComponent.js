import React, { Component } from "react";

export default class LoginComponent extends Component {
  state = { username: "", password: "" }; // não precisa de constructor

  handleChange = (e) => {
    this.setState({ username: e.target.value });
  };

  handleChangePassword = (e) => {
    this.setState({ password: e.target.value });
  };
 
  handleSubmit = (e) => {
    var url = 'http://localhost:8000/api-token-auth/';
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: this.state.username, password: this.state.password })
    };
    fetch(url, requestOptions)
        .then(response => response.json())
        .then(data => localStorage.setItem('token', data.token));
    e.preventDefault();
    
  };

  render() {
    const { username, password } = this.state;
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
        <input
          type="submit"
          value="Submit"
          onChange={this.handleSubmit}
          placeholder="Enviar"
        />
      </form>
    );
  }
}
