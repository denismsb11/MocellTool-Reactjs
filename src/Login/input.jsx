import React, { Component } from 'react';
import './Input.css'

class Login extends Component {
  render() {
    return (
      <div className="container">
        <form className="col s12">
          <div class="input-field col s6 row">
            <input type="text" class="validate"></input>
            <label for="Email">Email</label>
          </div>

          <div class="input-field col s6 row">
            <input type="password" class="validate"></input>
            <label for="Senha">Senha</label>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;