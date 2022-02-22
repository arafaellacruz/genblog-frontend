import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/statics/navbar/Navbar';
import Footer from './components/statics/footer/Footer';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import CadastroUsuario from './pages/cadastroUsuario/CadastroUsuario';
import ListaTema from './components/temas/listatema/ListaTema';
import ListaPostagem from './components/postagens/listapostagem/ListaPostagem';
import './App.css';

/*  1. yarn add @types/react-router-dom // - Para instalar a biblioteca que faz o controle de rotas na nossa aplicação. 
    2. Geralmente colocamos as rotas da nossa aplicação no App.tsx */

function App() {
  return (

    /* Dentro do Switch vão todas as minhas rotas que serão de fato alteradas.
    As rotas em nossa aplicação React.js são os caminhos das páginas da nossa aplicação. 
    
    Route é responsável por fazer a troca de cada componente pois, é ele que terá a rota de cada um, e dentro dele chamamos o componente "path" para representar o caminho do componente.*/
    <Router>
      <Navbar />
      <Switch>
        <div style={{minHeight: '100vh'}}>
        <Route exact path='/'>
            <Login />
          </Route>

        <Route path='/login'>
            <Login />
          </Route>

          <Route path='/home'>
            <Home />
          </Route>

          <Route path='/cadastrousuario'>
            <CadastroUsuario />
          </Route>

          <Route path='/temas'>
            <ListaTema />
          </Route>

          <Route path='/posts'>
            <ListaPostagem />
          </Route>
        </div>
      </Switch>
      <Footer />
    </Router> 
  );
}

/* Caso dê erro ao rodar, tentar instalar também a biblioteca: yarn add react-router-dom  */
export default App;
