import React, { useState, useEffect, ChangeEvent } from "react";
import { useHistory } from "react-router-dom";
import User from "../../models/User";
import { cadastroUsuario } from "../../services/Service";
import { Box, Button, Grid, TextField, Typography } from '@material-ui/core';
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';
import './CadastroUsuario.css';


function CadastroUsuario() {

    let history = useHistory();
    const [confirmarSenha, setConfirmarSenha] = useState<String>("")
    const [user, setUser] = useState<User>(
        {
            id: 0,
            nome: '',
            usuario: '',
            senha: ''
        })

    const [userResult, setUserResult] = useState<User>(
        {
            id: 0,
            nome: '',
            usuario: '',
            senha: ''
        })

    useEffect(() => {
        if (userResult.id != 0) {
            history.push("/login")
        }
    }, [userResult])


    function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>) {
        setConfirmarSenha(e.target.value)
    }


    function updatedModel(e: ChangeEvent<HTMLInputElement>) {

        setUser({
            ...user,
            [e.target.name]: e.target.value
        })

    }
    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        if (confirmarSenha === user.senha && user.senha.length >= 8) {
            cadastroUsuario(`/usuarios/cadastrar`, user, setUserResult)
            toast.success('Usuário criado! Seja bem vinde a nossa rede! ☺', {
                position: 'top-right', // Posição onde o toast irá aparecer.
                autoClose: 2000, // Em qual momento a notificação deve sumir (2000 = 2000 milisegundos -> 2 segundos.)
                hideProgressBar: false, // Esconder a barra de progresso (false = a barra irá aparecer)
                closeOnClick: true, // Possibilidade de fechar a notificação em um x.
                pauseOnHover: false, // Habilitar se ao passar o mouse sobre a notificação irá pausar o autoClose.
                draggable: false, // Para movermos a notificação de lugar na tela.
                theme: 'colored', // Tipo de tema de como o alerta deve ser exibido
                progress: undefined
            });
        } else {
            toast.error('Ops... Você digitou alguma informação incorreta! Tente novamente.', {
                position: 'top-right', // Posição onde o toast irá aparecer.
                autoClose: 4000,
                hideProgressBar: false, // Esconder a barra de progresso (false = a barra irá aparecer)
                closeOnClick: true, // Possibilidade de fechar a notificação em um x.
                pauseOnHover: false, // Habilitar se ao passar o mouse sobre a notificação irá pausar o autoClose.
                draggable: false, // Para movermos a notificação de lugar na tela.
                theme: 'colored', // Tipo de tema de como o alerta deve ser exibido
                progress: undefined
            });
        }
    }

    return (
        <Grid container direction="row" justifyContent="center" alignItems="center">
            <Grid item xs={6} className='imagem2' >
            </Grid>

            <Grid item xs={6} alignItems="center">
                <Box paddingX={10}>
                    <form className="formsCadastro" onSubmit={onSubmit}>
                        <Typography variant='h5' gutterBottom color='textPrimary' component='h5' align='center' className="textos2" > Cadastrar </Typography>
                        <TextField className="border" value={user.nome} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='nome' label='Nome' variant='outlined' name='nome' margin='normal' fullWidth required />
                        <TextField value={user.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='usuario' label='Usuário' variant='outlined' name='usuario' margin='normal' type='email' fullWidth required />
                        <TextField value={user.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='senha' label='Senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth required placeholder="Insira no mínimo 8 caracteres." />
                        <TextField value={confirmarSenha} onChange={(e: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(e)} id='confirmarSenha' label='Confirmar Senha' variant='outlined' name='confirmarSenha' margin='normal' type='password' fullWidth required placeholder="Insira no mínimo 8 caracteres." />
                        <TextField value={user.foto} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='foto' label='Foto' variant='outlined' name='foto' margin='normal' fullWidth placeholder="Se quiser adicionar uma foto de perfil, deixe o link da imagem aqui." />

                        <Box marginTop={2} textAlign='center'>
                            <Link to='/login' className="text-decorator-none">
                                <Button variant='contained' color='secondary' className="btnCancelar">
                                    Cancelar
                                </Button>
                            </Link>
                            <Button type='submit' variant='contained' color='primary'>
                                Finalizar Cadastro
                            </Button>
                        </Box>
                    </form>
                </Box>
            </Grid>
        </Grid>
    );
}

export default CadastroUsuario;