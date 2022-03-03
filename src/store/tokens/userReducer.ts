/*
Reducers são funções puras (funções que não geram efeitos colaterais, isto é, para a mesma entrada, temos a mesma saída) com a capacidade de disparar eventos e que podem alterar um atributo da store, evoluindo o estado global da aplicação.
Funcionam como filtros recebendo e tratando as informações, enviando essas informações à store. É encarregado de lidar com todas as ações, como algum componente pedindo para alterar algum dado da store, por exemplo.
Para todo dado contido na store, deve existir um reducer próprio daquele dado.
*/

import { Action } from "./actions";

export interface TokenState {
    tokens: string
}

const initialState = {
    tokens: ""
}

export const tokenReducer = (state: TokenState = initialState, action: Action) => {
    switch (action.type) {
        case "ADD_TOKEN": {
            return { tokens: action.payload }
        }
        
        default:
            return state
    }
}