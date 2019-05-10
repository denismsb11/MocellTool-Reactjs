import React, { Component } from 'react'
import Navbar from '../../components/navbar/Navbar'
import M from "materialize-css";

class Feedback extends Component {
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
                            <div class="collapsible-header"><i class="fas fa-comment-dots"></i>Feedback</div>
                            <div class="collapsible-body">
                                <form action="#">
                                    <span>1) O que você achou das explicações antes do uso efetivo da ferramenta?</span>
                                    <p>
                                        <label>
                                            <input type="radio" name="group" checked></input>
                                            <span>Ótimas</span>
                                        </label>
                                    </p>
                                    <p>
                                        <label>
                                            <input type="radio" name="group"></input>
                                            <span>Boas</span>
                                        </label>
                                    </p>
                                    <p>
                                        <label>
                                            <input type="radio"></input>
                                            <span>Razoáveis</span>
                                        </label>
                                    </p>
                                    <p>
                                        <label>
                                            <input type="radio"></input>
                                            <span>Ruins</span>
                                        </label>
                                    </p>
                                    <p>
                                        <label>
                                            <input type="radio"></input>
                                            <span>Péssimas</span>
                                        </label>
                                    </p>
                                    <span>2) No geral, quçao eficaz você achou a experiência de auxiliar interativamente a resolução
                                        do Planejamento de Releases de Software? Por favor, marque a resposta mais apropriada.</span>
                                    <p>
                                        <label>
                                            <input type="radio"></input>
                                            <span>Muito Eficaz</span>
                                        </label>
                                    </p>
                                    <p>
                                        <label>
                                            <input type="radio"></input>
                                            <span>Eficaz</span>
                                        </label>
                                    </p>
                                    <p>
                                        <label>
                                            <input type="radio"></input>
                                            <span>Indiferente</span>
                                        </label>
                                    </p>
                                    <p>
                                        <label>
                                            <input type="radio"></input>
                                            <span>Ineficaz</span>
                                        </label>
                                    </p>
                                    <p>
                                        <label>
                                            <input type="radio"></input>
                                            <span>Muito Ineficaz</span>
                                        </label>
                                    </p>
                                    <span>3) O quão fácil foi expressar sua opinião através do conjunto de preferências
                                        disponíveis? Por favor, marque a respotas mais apropriada.</span>
                                </form>
                                <br></br>
                                <a class="waves-effect waves-light btn button-google"><i class="fas fa-paper-plane"></i> Enviar</a>
                                <br></br>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Feedback;