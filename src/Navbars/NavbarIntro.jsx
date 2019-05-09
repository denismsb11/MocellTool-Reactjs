import React, { Component } from 'react';
import './Navbarintro.css';

class NavbarIntro extends Component {
  render() {
    return (
        <nav>
        <div className="nav-wrapper">
          <ul id="nav-mobile" className="left hide-on-med-and-down">
          <li><a href="#">Mocell</a></li>
            <li><a href="#">Início</a></li>
            <li><a href="#">Cadastrar</a></li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavbarIntro;