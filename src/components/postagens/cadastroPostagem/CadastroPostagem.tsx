import React, { ChangeEvent, useEffect, useState } from 'react'
import { Container, Typography, TextField, Button, Select, InputLabel, MenuItem, FormControl, FormHelperText } from "@material-ui/core"
import { useHistory, useParams } from 'react-router-dom';
import Tema from '../../../models/Tema';
import useLocalStorage from 'react-use-localstorage';
import Postagem from '../../../models/Postagem';
import { busca, buscaId, post, put } from '../../../services/Service';
import '././CadastroPostagem.css';

function CadastroPostagem() {

        let history = useHistory(); // Redirect de páginas.
        const { id } = useParams<{ id: string }>(); // Vai capturar os id's das rotas, em casos de atualizações.
        const [temas, setTemas] = useState<Tema[]>([]) // Listagem de temas da nossa API.
        const [token, setToken] = useLocalStorage('token'); // Token armazenado no LocalStorage

        // Se o token estiver autenticado no LocalStorage indica que o usuário está logado e poderá fazer requisições, caso não esteja autenticado (estiver vazio) o usuário é redirecionado para o Login.
        useEffect(() => {
            if (token == "") {
                alert("Você precisa estar logado")
                history.push("/login")

            }
        }, [token])

        // Vai armazenar UM tema especifico da nossa API de acordo com o ID.
        const [tema, setTema] = useState<Tema>(
            {
                id: 0,
                descricao: ''
            })

        // Realizar cadastro das postagens, e por isso os valores vazios pois, será assim que a variável iniciará (parecido com mecanica do body/JSON Postman).
        const [postagem, setPostagem] = useState<Postagem>({
            id: 0,
            titulo: '',
            texto: '',
            tema: null
        })

        // Monitora o state Tema, verifica se tem um tema especifico ali e preenche o state de Postagem, caso eu esteja mexendo no 'select' de temas.
        useEffect(() => {
            setPostagem({
                ...postagem,
                tema: tema
            })
        }, [tema])

        // Vai acionar o a function 'getTemas', enquanto monitora o id da url, se o id for diferente, fará uma busca na nossa api  
        useEffect(() => {
            getTemas()
            if (id !== undefined) {
                findByIdPostagem(id)
            }
        }, [id])

        async function getTemas() {
            await busca("/tema", setTemas, {
                headers: {
                    'Authorization': token
                }
            })
        }

        // Coloca após a url, o id daquela postagem especifica, e as informações retornadas serão armazenadas no setPostagem.
        async function findByIdPostagem(id: string) {
            await buscaId(`postagem/${id}`, setPostagem, {
                headers: {
                    'Authorization': token
                }
            })
        }

        // Preenche o state Postagem, se estivermos alterarmos os inputs de 'titulo' ou 'texto'.
        function updatedPostagem(e: ChangeEvent<HTMLInputElement>) {

            setPostagem({
                ...postagem,
                [e.target.name]: e.target.value,
                tema: tema
            })

        }

        // Realiza envio das informações que o usuário preencher da postagem.
        async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
            e.preventDefault()

            if (id !== undefined) {
                put(`/postagem/atualizar`, postagem, setPostagem, {
                    headers: {
                        'Authorization': token
                    }
                })
                alert('Postagem atualizada com sucesso');
            } else {
                post(`/postagem/cadastrar`, postagem, setPostagem, {
                    headers: {
                        'Authorization': token
                    }
                })
                alert('Postagem cadastrada com sucesso');
            }
            back()

        }

        // A partir do momento que o usuário preencher as informações da postagem (cadastrando ou atualizando), após realizá-lo, essa função o redireciona para a Lista de Postagem.
        function back() {
            history.push('/postagem')
        }
        return (
            <Container maxWidth="sm" className="topo">
                <form onSubmit={onSubmit}>
                    <Typography variant="h3" color="textSecondary" component="h1" align="center" >Crie ou altere uma postagem: </Typography>
                    <TextField value={postagem.titulo} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPostagem(e)} id="titulo" label="Título" variant="outlined" name="titulo" margin="normal" fullWidth />
                    <TextField value={postagem.texto} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPostagem(e)} id="texto" label="Texto" name="texto" variant="outlined" margin="normal" fullWidth />

                    <FormControl >
                        <InputLabel id="demo-simple-select-helper-label">Tema </InputLabel>
                        <Select
                            labelId="demo-simple-select-helper-label"
                            id="demo-simple-select-helper"
                            onChange={(e) => buscaId(`/tema/${e.target.value}`, setTema, {
                                headers: {
                                    'Authorization': token
                                }
                            })}>
                            {
                                // Vamos mapear todos os temas, pegar o ID de cada um e montar um Menu de Temas, onde o usuário pode selecionar o desejado. 
                                temas.map(tema => (
                                    <MenuItem value={tema.id}>{tema.descricao}</MenuItem>
                                ))
                            }
                        </Select>
                        <FormHelperText>Selecione um tema para essa postagem:</FormHelperText>
                        <Button type="submit" variant="contained" color="primary">
                            Finalizar
                        </Button>
                    </FormControl>
                </form>
            </Container>
        )
    }

export default CadastroPostagem;