/* Redux - é uma biblioteca JavaScript independente do React e seu papel é centralizar todos os controles de estado para um único lugar. (Centralização de informações de stado, deixando este acessivel á todos os componentes que precisem usar).

O Redux trabalha com 3 recursos:
1. Store: uma grande caixa que armazena todos os estados dentro dele;

2. Action: é a ação que estou enviando pra ser armazenada dentro do store;

3. Reducer: responsável por receber a ação e fazer com que ela seja armazernada no store, também recebe o estado atual do componente, recebe a ação (o que deve ser feito com o componente), e assim, o Reducer atualiza/altera o estado do componente. 

-- Estamos usando o LocalStorage para armazenar o nosso token, porém, temos um problema de segurança por o LocalStorage armazenar o nosso token no navegador que estamos usando, ficando disponivel para vizualização de qualquer um. O Redux fará um melhor controle para não permitir essa exposição.*/

export type Action = {type: "ADD_TOKEN"; payload: string}; // Armazenará os nossos tokens.

export const addToken = (token: string): Action => ({
    type: "ADD_TOKEN",
    payload: token,
});