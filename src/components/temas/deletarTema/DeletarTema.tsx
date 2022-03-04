import React, { useEffect, useState } from 'react'
import {Box, Card, CardActions, CardContent, Button, Typography} from '@material-ui/core';
import { useHistory, useParams } from 'react-router-dom';
import { buscaId, deleteId } from '../../../services/Service';
import Tema from '../../../models/Tema';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/userReducer';
import { toast } from 'react-toastify';

import './DeletarTema.css';

function DeletarTema() {
    let history = useHistory();
    const { id } = useParams<{id: string}>();
    const [temas, setTemas] = useState<Tema>()
    const token = useSelector<TokenState, TokenState['tokens']>(
      (state) => state.tokens
    );

    useEffect(() => {
        if (token == "") {
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
            history.push("/login")
    
        }
    }, [token])

    useEffect(() =>{
        if(id !== undefined){
            findById(id)
        }
    }, [id])

    async function findById(id: string) {
        buscaId(`/tema/${id}`, setTemas, {
            headers: {
              'Authorization': token
            }
          })
        }

        function sim() {
            history.push('/tema')
            deleteId(`/tema/${id}`, {
              headers: {
                'Authorization': token
              }
            });
            toast.success("Seu tema foi deletado." , {
              position: 'top-right', // Posição onde o toast irá aparecer.
              autoClose: 2000, // Em qual momento a notificação deve sumir (2000 = 2000 milisegundos -> 2 segundos.)
              hideProgressBar: false, // Esconder a barra de progresso (false = a barra irá aparecer)
              closeOnClick: true, // Possibilidade de fechar a notificação em um x.
              pauseOnHover: false, // Habilitar se ao passar o mouse sobre a notificação irá pausar o autoClose.
              draggable: false, // Para movermos a notificação de lugar na tela.
              theme: 'colored', // Tipo de tema de como o alerta deve ser exibido
              progress: undefined
          });  
          }
        
          function nao() {
            history.push('/tema')
          }
          
  return (
    <>
      <Box m={2}>
        <Card variant="outlined">
          <CardContent>
            <Box justifyContent="center">
              <Typography color="textSecondary" gutterBottom>
                Gostaria de deletar este tema:
              </Typography>
              <Typography color="textSecondary">
                {temas?.descricao}
              </Typography>
            </Box>
          </CardContent>
          <CardActions>
            <Box display="flex" justifyContent="start" ml={1.0} mb={2} >
              <Box mx={2}>
                <Button onClick={sim} variant="contained" className="marginLeft" size='large' color="primary">
                  Sim
                </Button>
              </Box>
              <Box mx={2}>
                <Button  onClick={nao} variant="contained" size='large' color="secondary">
                  Não
                </Button>
              </Box>
            </Box>
          </CardActions>
        </Card>
      </Box>
    </>
  );
}
export default DeletarTema;
