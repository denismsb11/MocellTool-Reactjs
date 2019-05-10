import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Login from './pages/login/Login';
import Home from './pages/home/Home';
import Cadastro from './pages/cadastro/Cadastro'
import Feedback from './pages/feedback/Feedback'
import Formulario from './pages/formulario/Formulario'
import Otimizacao from './pages/otimizacao/Otimizacao'
import ResponderFormulario from './pages/responderformulario/ResponderFormulario'
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css';
import { Provider } from 'react-redux';
import { createStore,  applyMiddleware } from 'redux';
import rootReducer from './redux/reducers/index';
import ReduxThunk from 'redux-thunk';

ReactDOM.render(
    <div>
        <Provider store={createStore(rootReducer, {}, applyMiddleware(ReduxThunk))}>
        <Router>
            <Switch>
                <Route path="/" exact={true} component={App} />
                <Route path="/login" component={Login} />
                <Route path="/home" component={Home} />
                <Route path="/cadastro" component={Cadastro} />
                <Route path="/feedback" component={Feedback} />
                <Route path="/formulario" component={Formulario} />
                <Route path="/otimizacao" component={Otimizacao} />
                <Route path="/responderformulario" component={ResponderFormulario} />
            </Switch>
        </Router>
        </Provider>
    </div>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
