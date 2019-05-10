import React, { Component } from 'react'
import Navbar from '../../components/navbar/Navbar'
import M from "materialize-css";

class ResponderFormulario extends Component {
    componentDidMount() {
        M.AutoInit();
    }

    render() {
        return (
            <div>
                <Navbar name="Denis" />
                <div class="container">
                    <h1>Mocell</h1>
                    <hr></hr>
                    <ul class="collapsible">
                        <li class="active">
                            <div class="collapsible-header"><i class="material-icons">bookmarks</i>Cadastro</div>
                            <div class="collapsible-body">
                                <form action="#">
                                    <span>1) Qual a sua formação acadêmica? Marque a opção que representa a sua última
                                        formação.</span>
                                    <p>
                                        <label>
                                            <input type="checkbox"></input>
                                            <span>Ensino Médio Concluido</span>
                                        </label>
                                    </p>
                                    <p>
                                        <label>
                                            <input type="checkbox"></input>
                                            <span>Graduação em Andamento</span>
                                        </label>
                                    </p>
                                    <p>
                                        <label>
                                            <input type="checkbox"></input>
                                            <span>Graduação Concluida</span>
                                        </label>
                                    </p>
                                    <p>
                                        <label>
                                            <input type="checkbox"></input>
                                            <span>Pós-Graduação em Andamento</span>
                                        </label>
                                    </p>
                                    <p>
                                        <label>
                                            <input type="checkbox"></input>
                                            <span>Pós-Graduação Concluída</span>
                                        </label>
                                    </p>
                                    <span>2) Escreva abaixo sua atual atuação profissional:</span>
                                    <div class="input-field col s6">
                                        <input id="last_name" type="text" class="validate"></input>
                                        <label for="last_name">Responda aqui</label>
                                    </div>
                                    <span>3) Quanto tempo de experiência você possui na área de TI?</span>
                                    <div class="input-field col s6">
                                        <input id="last_name" type="text" class="validate"></input>
                                        <label for="last_name">Responda aqui</label>
                                    </div>
                                    <span>4) Como você classificaria a sua experiência em desenvolvimento de software</span>
                                    <p>
                                        <label>
                                            <input type="checkbox"></input>
                                            <span>Alta</span>
                                        </label>
                                    </p>
                                    <p>
                                        <label>
                                            <input type="checkbox"></input>
                                            <span>Média</span>
                                        </label>
                                    </p>
                                    <p>
                                        <label>
                                            <input type="checkbox"></input>
                                            <span>Baixa</span>
                                        </label>
                                    </p>

                                </form>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default ResponderFormulario;