import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

class Navbar extends Component {

  render() {
    return (
        <nav>
          <div className="nav-wrapper">
            <ul className="left hide-on-med-and-down">
              <li><a>Mocell</a></li>
              <li><Link to="/home">Home</Link></li>
              <li><Link to="/responderformulario">Responder Formulário</Link></li>
              <li><Link to="/otimizacao">Otimização</Link></li>
              <li><Link to="/feedback">Feedback</Link></li>
            </ul>
            <ul className="right hide-on-med-and-down">
              <li><a>{this.props.name}</a></li>
              <li><Link to="/login">Sair</Link></li>
            </ul>
          </div>
      </nav>
    );
  }
}

export default Navbar;