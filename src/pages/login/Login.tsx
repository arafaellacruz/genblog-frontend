/* Dentro de pages, criar uma nova página chamada "Login" e dentro dessa nova página, criar 2 arquivos para Loginm(css e tsx).
Dentro de Login.tsx fazer as importações: */

import React, { useState, useEffect, ChangeEvent } from 'react'; // useState é responsável por fazer o controle dos estados de um componente.
import { Grid, Box, Typography, TextField, Button } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import { login } from '../../services/Service';
import UserLogin from '../../models/UserLogin';
import { useDispatch } from 'react-redux';
import { addToken } from '../../store/tokens/actions';
import { toast } from 'react-toastify';

import './Login.css';

function Login() {
    /* userLogin: variável de estado, para acessar a informação do State;
        setUserLogin: variável de alteração da variável de estado, função para alterar informação do State */
    let history = useHistory();
    const dispatch = useDispatch();
    const [token, setToken] = useState('');
    const [userLogin, setUserLogin] = useState<UserLogin>(
        {
            id: 0,
            usuario: '', // Valores iniciais do State.
            senha: '',
            token: ''
        }
    )
    // Função updatedModel: vai ser usada para atualizar a model com o valor que o usuário digitar no campo de INPUT.
    function updatedModel(e: ChangeEvent<HTMLInputElement>) {
        setUserLogin({
            ...userLogin,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        if (token != '') {
            dispatch(addToken(token));
            history.push('/home')
        }
    }, [token])

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        try {
            await login(`/usuarios/logar`, userLogin, setToken)
            toast.success('Você foi conectade a nós!☺', {
                position: 'top-right', // Posição onde o toast irá aparecer.
                autoClose: 2000, // Em qual momento a notificação deve sumir (2000 = 2000 milisegundos -> 2 segundos.)
                hideProgressBar: false, // Esconder a barra de progresso (false = a barra irá aparecer)
                closeOnClick: true, // Possibilidade de fechar a notificação em um x.
                pauseOnHover: false, // Habilitar se ao passar o mouse sobre a notificação irá pausar o autoClose.
                draggable: false, // Para movermos a notificação de lugar na tela.
                theme: 'colored', // Tipo de tema de como o alerta deve ser exibido
                progress: undefined
            });
        } catch (error) {
            toast.error('Ops... Você digitou alguma informação incorreta ou ainda não é cadastrade! Mas não desista, tente novamente.', {
                position: 'top-right', // Posição onde o toast irá aparecer.
                autoClose: 4000, // Em qual momento a notificação deve sumir (2000 = 2000 milisegundos -> 2 segundos.)
                hideProgressBar: false, // Esconder a barra de progresso (false = a barra irá aparecer)
                closeOnClick: true, // Possibilidade de fechar a notificação em um x.
                pauseOnHover: false, // Habilitar se ao passar o mouse sobre a notificação irá pausar o autoClose.
                draggable: false, // Para movermos a notificação de lugar na tela.
                theme: 'colored', // Tipo de tema de como o alerta deve ser exibido
                progress: undefined
            });

        }
    }

    /* Dentro do 'return' vamos construir todo o retorno desse componente, ou seja, todo conteúdo que será mostrado em tela. */
    return (
        /* O 'Grid container' é o container principal e dentro dele terá outros 2 Grids, que serão itens dentro do Grid container.
        Os Grids itens terão 6 colunas cada um, para ficarem lado a lado, no primeiro ficará os campos de Login e no segundo ficará a imagem para personalizar a tela de Login. 
        
        Formatação do Grid container:
        direction = row (linha), column(colunas), justifyContent = Conteúdo justificado. Use utilitários justify-content nos flex containers para alterar o alinhamento dos flex items, no eixo principal.
        */

        <Grid container direction="row" justifyContent='center' alignItems='center' className='container background'>
            <Grid className='fundo' alignItems='center' xs={6}>
                <Box paddingX={20}>
                    <form className='formsLogin' onSubmit={onSubmit}>
                        <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' style={{ fontWeight: 'bold' }} > Entrar </Typography>
                        <TextField value={userLogin.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='usuario' label='Usuário' variant='outlined' name='usuario' margin='normal' fullWidth />
                        <TextField value={userLogin.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='senha' label='Senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth />
                        <Box marginTop={2} textAlign='center'>
                            <Button type='submit' variant='contained' color='primary'>
                                Logar
                            </Button>
                        </Box>

                        <Box display='flex' justifyContent='center' alignItems='center' marginTop={2}>
                            <Box marginRight={1}>
                                <Typography variant='subtitle1' gutterBottom align='center'>Não tem uma conta?</Typography>
                            </Box>
                            <Link className='text-decorator-none' to={"/cadastrousuario"}>

                                <Typography variant='subtitle1' gutterBottom align='center' className='textos1'>Cadastre-se</Typography>

                            </Link>
                        </Box>
                    </form>
                </Box>
            </Grid>
            <Grid xs={6} className='imagem' >

            </Grid>
        </Grid>
    );
}

export default Login;