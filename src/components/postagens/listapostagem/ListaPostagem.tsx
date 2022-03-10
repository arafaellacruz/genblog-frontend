import { Box, Button, Card, CardActions, CardContent, Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom'
import Postagem from '../../../models/Postagem';
import { busca } from '../../../services/Service';
import { TokenState } from '../../../store/tokens/userReducer';
import { toast } from 'react-toastify';

import './ListaPostagem.css';

function ListaPostagem() {

    const [postagens, setPostagens] = useState<Postagem[]>([])
    let history = useHistory();
    const token = useSelector<TokenState, TokenState['tokens']>(
        (state) => state.tokens
    );

    useEffect(() => {
        if (token == '') {
            toast.error("Você precisa estar conectade." , {
                position: 'top-right', // Posição onde o toast irá aparecer.
                autoClose: 2000, // Em qual momento a notificação deve sumir (2000 = 2000 milisegundos -> 2 segundos.)
                hideProgressBar: false, // Esconder a barra de progresso (false = a barra irá aparecer)
                closeOnClick: true, // Possibilidade de fechar a notificação em um x.
                pauseOnHover: false, // Habilitar se ao passar o mouse sobre a notificação irá pausar o autoClose.
                draggable: false, // Para movermos a notificação de lugar na tela.
                theme: 'colored', // Tipo de tema de como o alerta deve ser exibido
                progress: undefined
            });  
            history.push('/login')
        }
    }, [token])

    async function getPostagens() {
        await busca("/postagem", setPostagens, {
            headers: {
                'Authorization': token
            }
        })
    }

    useEffect(() => {

        getPostagens()

    }, [postagens.length])

    return (
        <>
            {
                postagens.map(postagens => (

                    <Box m={2} justifyContent='center' alignItems='center' >
                        <Card variant='outlined' className='cardPostagem'>
                            <CardContent>
                                <Typography color='textSecondary' gutterBottom>
                                    Postagens
                                </Typography>
                                <Typography variant='h5' component='h2'>
                                    {postagens.titulo}
                                </Typography>
                                <br />
                                <Typography variant='body2' component='p'>
                                    {postagens.texto}
                                </Typography>
                                <Typography variant='body2' component='p'>
                                    {postagens.tema?.descricao}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Box display='flex' justifyContent='center' mb={1.5}>
                                    <Link to={`/formularioPostagem/${postagens.id}`} className='text-decorator-none'>
                                        <Box m={1}>
                                            <Button variant='contained' className='marginLeft' size='small' color='primary'>
                                                Atualizar
                                            </Button>
                                        </Box>
                                    </Link>
                                    <Link to={`/deletarPostagem/${postagens.id}`} className='text-decorator-none'>
                                        <Box m={1}>
                                            <Button variant='contained' size='small' color='secondary'>
                                                Deletar
                                            </Button>
                                        </Box>
                                    </Link>
                                </Box>
                            </CardActions>
                        </Card>
                    </Box>
                ))
            }
        </>
    )
}

export default ListaPostagem;