import React, { useState, useEffect, ChangeEvent } from 'react'
import { Container, Typography, TextField, Button } from "@material-ui/core"
import { useHistory, useParams } from 'react-router-dom'
import Tema from '../../../models/Tema';
import { buscaId, post, put } from '../../../services/Service';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/userReducer';
import './CadastroTema.css';


function CadastroTema() {
    let history = useHistory(); // Faz o redirect de páginas.
    const { id } = useParams<{ id: string }>(); //  useParams serve para capturar parametros enviados por uma url, ou seja, além de criarmos dados por esse componente, pelo que definimos no id da url, também podemos alterar e deletar dados também.
    const [temas, setTemas] = useState<Tema>({
        id: 0,
        descricao: ''
    });
    const token = useSelector<TokenState, TokenState['tokens']>(
        (state) => state.tokens
      );

    useEffect(() => {
        if (token == "") {
            alert("Você precisa estar logado")
            history.push("/login")

        }
    }, [token])

    useEffect(() => {
        if (id !== undefined) {
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

    function updatedTema(e: ChangeEvent<HTMLInputElement>) {

        setTemas({
            ...temas,
            [e.target.name]: e.target.value,
        })

    }

    // Nessa função o usuário vai preencher os dados e clicar em Finalizar, nesse momento precisamos ter em mente que esse componente vai Cadastrar(post) e Atualizar(put) o tema.
    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        
        //Se a rota tiver um id existente, ele irá atualizar/reescrever o tema existente.
        if (id !== undefined) {
            console.log(temas)
            put(`/tema`, temas, setTemas, {
                headers: {
                    'Authorization': token
                }
            })
            alert('Seu tema foi criado!');
        // Se a rota não tem um id existente, ele irá direcionar pra criar um novo tema.
        } else {
            post(`/tema/cadastrar`, temas, setTemas, {
                headers: {
                    'Authorization': token
                }
            })
            console.log("tema " + JSON.stringify(temas))
            alert('Seu tema foi criado!');
        }
        back()

    }

    function back() {
        history.push('/tema')
    }

    return (
        <Container maxWidth="sm" className="topo">
            <form onSubmit={onSubmit}>
                <Typography variant="h3" color="textSecondary" component="h1" align="center" >Crie ou atualize um tema</Typography>
                <TextField value={temas.descricao} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedTema(e)} id="descricao" label='Nome do tema' variant="outlined" name="descricao" margin="normal" fullWidth />
                <Button type="submit" variant="contained" color="primary">
                    Finalizar
                </Button>
            </form>
        </Container>
    )
}

export default CadastroTema;