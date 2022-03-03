import { Box, Button, Card, CardActions, CardContent, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import Tema from '../../../models/Tema';
import { busca } from '../../../services/Service';

/* variant='h5': Estou pedindo para que os estilos de um h5 sejam atribuidos a Typography
 component='h2': efine como renderizamos no html. */
function ListaTema() {

    const [temas, setTemas] = useState<Tema[]>([])  // Criação do nosso state do tipo 'UseTema', e esses temas serão armazenados em um array.
    const [token, setToken] = useLocalStorage('token'); // Quando solicitarmos a lista, precisamos do token que está armazenado no nosso LocalStorage.
    let history = useHistory(); //O useHistory fará o redirect de páginas, por exemplo: o usuário não  estiver autenticado, ele será redirecionado para a tela de Login.

    useEffect(() => {  // O useEffect, junto com useHistory, vai verificar se está vazio ou não, e se estiver vai ser acionado pra redirecionar o usuário para a tela de Login e na segunda situação, ele será usado pra fazer as requisições na nossa API, chamando um tema cadastrado, por exemplo.  
        if (token == '') {
            alert("Você precisa estar logado!")
            history.push('/login')
        }
    }, [token])

    // Função GetTema, que fará a requisição de todos os nossos temas da API.
    async function getTema() {
        await busca("/tema", setTemas, {
            headers: {
                'Authorization': token
            }
        })
    }

    useEffect(() => {
        getTema()
    }, [temas.length])

    return (
        <>
            {
                temas.map(tema => (
                    <Box m={2} >
                        <Card variant="outlined">
                            <CardContent>
                                <Typography color="textSecondary" gutterBottom>
                                    Tema
                                </Typography>
                                <Typography variant="h5" component="h2">
                                    {tema.descricao}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Box display="flex" justifyContent="center" mb={1.5} >

                                    <Link to={`/formularioTema/${tema.id}`} className="text-decorator-none">
                                        <Box mx={1}>
                                            <Button variant="contained" className="marginLeft" size='small' color="primary" >
                                                Atualizar
                                            </Button>
                                        </Box>
                                    </Link>
                                    <Link to={`/deletarTema/${tema.id}`} className="text-decorator-none">
                                        <Box mx={1}>
                                            <Button variant="contained" size='small' color="secondary">
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
    );
}
export default ListaTema;