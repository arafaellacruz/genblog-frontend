/*
#Hooks são funções que permitem a você “ligar-se” aos recursos de #state e #ciclo de vida do componente a partir de componentes funcionais.

#State é uma propriedade do componente que possuem valores e quando eles sofrem alguma alteração, eles são automáticamente renderizados.

#Axios é uma biblioteca que nos permite fazer requisições HTTP, serve como ponte entre as requisições e respostas.

Recursos
1. Faça XMLHttpRequests do navegador
2. Faça solicitações http do node.js
3. Suporta a API Promise / Trata requisições assincronas
4. Interceptar solicitação e resposta
5. Transforme dados de solicitação e resposta
6. Cancelar requisições
7. Transformações automáticas para dados JSON
8. Suporte do lado do cliente para proteção contra XSRF


Comunicação com o Back-end - Login 
#Services: Faz a comunicação entre os modelos e o banco de dados. Vamos criar nossa "regra de negócio" onde vai fornecer ou até mesmo gravar os dados que a nossa API vai gerar.

*/

import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://blogdarafa.herokuapp.com'
})

/*De forma assincrona, passamos 3 parâmetros:
1. URL: será a concatenação da url baseURL + a url de login, que temos na nossa API (Exemplo: /usuarios/logar);
2. DADOS: vai conter os dados que vamos enviar para a nossa API (usuário e senha), via body vamos enviar um objeto JSON contendo o usuario e senha. Ou seja, o objeto Json ficará armazenado dentro da variável 'dados'.
3. SETDADO: vai receber a resposta da nossa API, ou seja, os dados do nosso usuário + o token. */

export const cadastroUsuario = async(url: any,dados: any,setDado: any) => {
    const resposta = await api.post(url, dados)
    setDado(resposta.data)
}

export const login = async(url: any,dados: any,setDado: any) => {
    const resposta = await api.post(url, dados)
    setDado(resposta.data.token)
}