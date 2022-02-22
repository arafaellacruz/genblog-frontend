/* 
Comunicação com o Back-end - Login 
#Models: Cuida da parte de modelo da nossa aplicação. Vai armazenar os nossos modelos, ou seja, vai armazenar os campos que estarão ligados ao nosso database. 
*/

interface UserLogin {
    id: number;
    usuario: string;
    senha: string;
    token?: string|null;
}

export default UserLogin;