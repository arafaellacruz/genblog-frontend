/* Redux - é uma biblioteca JavaScript independente do React e seu papel é centralizar todos os controles de estado para um único lugar. (Centralização de informações de stado, deixando este acessivel á todos os componentes que precisem usar).

O Redux trabalha com 3 recursos:
1. Store;
2. Action;
3. Reducer.

-- Estavamos usando o LocalStorage para armazenar o nosso token, porém, temos um problema de segurança por o LocalStorage armazenar o nosso token no navegador que estamos usando, ficando disponivel para vizualização de qualquer um. O Redux fará um melhor controle para não permitir essa exposição.*/

export type Action = {type: "ADD_TOKEN" | "ADD_ID"; payload: string}; // Armazenará os nossos tokens.

export const addToken = (token: string): Action => ({
    type: "ADD_TOKEN",
    payload: token,
});

export const addId = (id: string): Action => ({
    type: "ADD_ID",
    payload: id
});

/* São fontes de informações que são enviadas da aplicação para o store pelos reducers. São disparadas (dispatch) pelos actions creators (funções puras responsáveis por criarem as actions). Ainda vamos falar mais sobre os actions creators.
Tecnicamente, uma action é um objeto que possui, obrigatoriamente, um atributo nomeado type que indica que ação é. 
*/