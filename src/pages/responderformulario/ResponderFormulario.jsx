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
                                            <input name="group1" type="radio"></input>
                                            <span>Ensino Médio Concluido</span>
                                        </label>
                                    </p>
                                    <p>
                                        <label>
                                            <input name="group1" type="radio"></input>
                                            <span>Graduação em Andamento</span>
                                        </label>
                                    </p>
                                    <p>
                                        <label>
                                            <input name="group1" type="radio"></input>
                                            <span>Graduação Concluida</span>
                                        </label>
                                    </p>
                                    <p>
                                        <label>
                                            <input name="group1" type="radio"></input>
                                            <span>Pós-Graduação em Andamento</span>
                                        </label>
                                    </p>
                                    <p>
                                        <label>
                                            <input name="group1" type="radio"></input>
                                            <span>Pós-Graduação Concluída</span>
                                        </label>
                                    </p>
                                    <span>2) Escreva abaixo sua atual atuação profissional:</span>
                                    <div class="input-field col s6">
                                        <input id="last_name" type="text" class="validate"></input>
                                        <label for="last_name"></label>
                                    </div>
                                    <span>3) Quanto tempo de experiência você possui na área de TI?</span>
                                    <div class="input-field col s6">
                                        <input id="last_name" type="text" class="validate"></input>
                                        <label for="last_name"></label>
                                    </div>
                                    <span>4) Como você classificaria a sua experiência em desenvolvimento de software.</span>
                                    <p>
                                        <label>
                                            <input name="group2" type="radio"></input>
                                            <span>Alta</span>
                                        </label>
                                    </p>
                                    <p>
                                        <label>
                                            <input name="group2" type="radio"></input>
                                            <span>Média</span>
                                        </label>
                                    </p>
                                    <p>
                                        <label>
                                            <input name="group2" type="radio"></input>
                                            <span>Baixa</span>
                                        </label>
                                    </p>
                                    <span>5) Como você classificaria seu conhecimento com relação a seleção de requisitos:</span>
                                    <p>
                                        <label>
                                            <input name="group3" type="radio"></input>
                                            <span>Alta</span>
                                        </label>
                                    </p>
                                    <p>
                                        <label>
                                            <input name="group3" type="radio"></input>
                                            <span>Média</span>
                                        </label>
                                    </p>
                                    <p>
                                        <label>
                                            <input name="group3" type="radio"></input>
                                            <span>Baixa</span>
                                        </label>
                                    </p>
                                    <span>6) Você utiliza ou já utilizou algum método de seleção automática de requisitos no seu ambiente
                                         de trabalho? Por favor, marque uma das alternativas e complemente se necessário</span>
                                    <div class="row">
                                        <div>Sim, usei a(o):</div>
                                        <input id="last_name" type="text" class="validate"></input>
                                    </div>
                                    <p>
                                        <label>
                                            <input name="group4" type="radio"></input>
                                            <span>Não, nunca tive conhecimento de métodos com essa característica.</span>
                                        </label>
                                    </p>
                                    <p>
                                        <label>
                                            <input name="group4" type="radio"></input>
                                            <span>Não, os métodos automáticos que conheço não são satisfatórios.</span>
                                        </label>
                                    </p>
                                    <div class="row">
                                        <div>Sim, usei a(o):</div>
                                        <input id="last_name" type="text" class="validate"></input>
                                    </div>
                                    <span>7)  Você utiliza ou já utilizou algum método de seleção manual de requisitos
                                        no seu ambiente de trabalho? Se sim, qual? </span>
                                    <div class="input-field col s6">
                                        <input id="resposta7" type="text" class="validate"></input>
                                        <label for="resposta7"></label>
                                    </div>
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