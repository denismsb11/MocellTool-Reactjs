import React, { Component } from 'react'
import Navbar from '../../components/navbar/Navbar'
import M from "materialize-css";

class Home extends Component {
    componentDidMount() {
        M.AutoInit();
    }

    render(){
        return (
            <div>
                <Navbar name="Denis"/>
                <div class="container">
                <h1>Mocell</h1>
                <hr></hr>
                <div class="row">
                    <div class="col s12">
                        <ul class="tabs">
                            <li class="tab col s3"><a href="#test1" class="blue-text">Início</a></li>
                            <li class="tab col s3"><a href="#test2" class="blue-text">Introduções</a></li>
                            <li class="tab col s3"><a href="#test3" class="blue-text">Instância</a></li>
                        </ul>
                    </div>

                    <div id="test1" class="col s12">It is a long established fact that a reader will be distracted by the
                        readable content of a page when looking at its layout.
                        The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed
                        to using Content here, content here', making it look like readable English.
                        Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,
                        and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have
                        evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                    </div>
                    <div id="test2" class="col s12">IThere are many variations of passages of Lorem Ipsum available, but the
                        majority have suffered alteration in some form, by injected humour, or randomised words which don't look
                        even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there
                        isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet
                        tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It
                        uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to
                        generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from
                        repetition, injected humour, or non-characteristic words etc.
                    </div>
                    <div id="test3" class="col s12">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                        doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                        architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                        aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque
                        porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non
                        numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad
                        minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea
                        commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil
                        molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur
                    </div>
                </div>
            </div>
                <div class="container">
                    <ul class="collapsible">
                        <li class="active">
                            <div class="collapsible-header"><i class="material-icons">done_outline</i>Preferências</div>
                            <div class="collapsible-body">
                                <div class="container">
                                    <br></br>
                                    <h5>Satisfação</h5>
                                    <form action="#">
                                        <p class="range-field">
                                            <input type="range" id="test8" min="0" max="100"></input>
                                        </p>
                                    <h5>Risco</h5>
                                        <p class="range-field">
                                            <input type="range" id="test8" min="0" max="100"></input>
                                        </p>
                                    </form>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
        </div>
        )
    }
}

export default Home;