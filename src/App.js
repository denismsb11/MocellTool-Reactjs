import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Bem vindo ao MocellTool</h1>
        <h4>Vamos começar nosso processo de planejamento de release!</h4>
        <hr></hr>
        <Link class="waves-effect waves-light btn button-google App-button" to="/login">
          Entrar
        </Link>
      </div>
    );
  }
}

export default App;
