import { Box, Button, Card, CardActions, CardContent, Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom'
import Postagem from '../../../models/Postagem';
import { busca } from '../../../services/Service';
import { TokenState } from '../../../store/tokens/userReducer';
import ModalPostagem from '../modalPostagem/ModalPostagem';
import './ListaPostagem.css';

function ListaPostagem() {

    const [postagens, setPostagens] = useState<Postagem[]>([])
    let history = useHistory();
    const token = useSelector<TokenState, TokenState['tokens']>(
        (state) => state.tokens
    );

    useEffect(() => {
        if (token == '') {
            alert("Você precisa estar logado!")
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

                    <Box m={2} >
                        <Card variant='outlined' className='card'>
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
                                    <Link to={`/formularioPostagem/$postagens.id`} className='text-decorator-none'>
                                        <Box m={1}>
                                            <Button variant='contained' className='marginLeft' size='small' color='primary'>
                                                Atualizar
                                            </Button>
                                        </Box>
                                    </Link>
                                    <Link to={`/deletarPostagem/$postagens.id`} className='text-decorator-none'>
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