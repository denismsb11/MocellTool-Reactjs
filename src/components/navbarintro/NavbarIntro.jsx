import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NavbarIntro.css';

class NavbarIntro extends Component {
  render() {
    return (
        <nav>
        <div className="nav-wrapper">
          <ul id="nav-mobile" className="left hide-on-med-and-down">
          <li><a>Mocell</a></li>
          <div className="right">
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/cadastro">Cadastrar</Link></li>
          </div>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavbarIntro;