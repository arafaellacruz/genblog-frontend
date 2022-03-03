/*
É um container imutável, isto é, não há alteração dele, e sim evolução, que armazena e centraliza o estado global da aplicação. Com isso, podemos dizer que é o conjunto de estados da aplicação centralizados/reunidos em um apenas um lugar.
O Store segue um dos princípios que formam e definem o conceito do Redux: Um único ponto de verdade.
*/

import { createStore } from "redux";
import { tokenReducer } from './tokens/userReducer';

const store = createStore(tokenReducer);

export default store;