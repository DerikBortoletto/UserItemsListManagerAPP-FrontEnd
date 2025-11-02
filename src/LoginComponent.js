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
    alert('A name was submitted: ' + this.state.username + ' Password: ' + this.state.password);
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
