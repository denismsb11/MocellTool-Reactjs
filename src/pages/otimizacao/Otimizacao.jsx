import React, { Component } from 'react'
import Navbar from '../../components/navbar/Navbar'
import M from "materialize-css";

class Otimizacao extends Component {
    componentDidMount() {
        M.AutoInit();
    }

    render() {
        return (
            <div>
                <Navbar name="Denis" />
            </div>
        )
    }
}

export default Otimizacao;