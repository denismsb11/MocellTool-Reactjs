import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navbarintro from './Navbars/NavbarIntro';
import Login from './Login/input';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <div>
        <Navbarintro />
        <Login />
    </div>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
