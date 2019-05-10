import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Navbar from '../../components/navbarintro/NavbarIntro'
import './Login.css'

class Login extends Component {
  render() {
    return (
      <div>
      <Navbar />
      <br></br>
      <div className="container">
      <div class="center"><h5><i class="fas fa-greater-than"></i>  Login</h5></div>
        <form className="col s12">
          <div class="input-field col s6 row">
            <input type="text" class="validate"></input>
            <label for="Email">Email</label>
          </div>

          <div class="input-field col s6 row">
            <input type="password" class="validate"></input>
            <label for="Senha">Senha</label>
          </div>
          <div className="row">
            <Link class="waves-effect waves-light btn button-google" to="/home">
              Entrar
            </Link>
          </div>
        </form>
      </div>
      </div>
    );
  }
}

export default Login;