import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Navbar from '../../components/navbarintro/NavbarIntro'
import M from "materialize-css";

class Cadastro extends Component {
    componentDidMount() {
        M.AutoInit();
    }
    render() {
        return (
            <div>
                <Navbar />
                <br></br>
                <ul class="collapsible">
                    <li class="active">
                        <div class="center"><h5><i class="fas fa-greater-than"></i>  Cadastre-se</h5></div>
                        <div class="container">
                            <div class="row">
                                <form class="col s12">
                                    <div class="row">
                                        <div class="input-field col s6">
                                            <input id="nome" type="text" class="validate"></input>
                                            <label for="nome">Nome</label>
                                        </div>
                                        <div class="input-field col s6">
                                            <input id="sobrenome" type="text" class="validate"></input>
                                            <label for="sobrenome">Sobrenome</label>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="input-field col s6 l12">
                                            <input type="text" class="datepicker" placeholder="Data de Nascimento"></input>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="input-field col s12">
                                            <input id="email" type="email" class="validate"></input>
                                            <label for="email">Email</label>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="input-field col s12">
                                            <input id="password" type="password" class="validate"></input>
                                            <label for="password">Senha</label>
                                        </div>
                                    </div>
                                    <div class="center">
                                        <button class="waves-effect waves-light btn">Cadastrar</button>
                                    </div>
                                    <br></br>
                                </form>
                            </div>
                        </div>
                    </li>
                </ul>

            </div>
        );
    }
}

export default Cadastro;