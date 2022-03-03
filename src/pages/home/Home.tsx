import React, { useEffect } from "react";
import { Typography, Box, Button, Grid } from '@material-ui/core'
import TabPostagem from "../../components/postagens/tabpostagem/TabPostagem";
import ModalPostagem from "../../components/postagens/modalPostagem/ModalPostagem";
import { Link, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { TokenState } from "../../store/tokens/userReducer";
import './Home.css';

//Componentes, nada mais são que funções.
function Home() {

    let history = useHistory();
    const token = useSelector<TokenState, TokenState['tokens']>(
        (state) => state.tokens
    );
    useEffect(() => {
        if (token == "") {
            alert("Você precisa estar logado.")
            history.push("/login")
        }
    }, [token])

    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" className="box">
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                        <Typography variant="h4" gutterBottom color="textPrimary" component="h4" align="center" className="title" >Seja bem vinde a BAZINGA!☺</Typography>
                        <Typography variant="h6" gutterBottom color="textSecondary" component="h6" align="center" className="title">Física básica de uma forma simples e divertida!</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                            <ModalPostagem />
                        </Box>
                        <Link to="/postagem" className="text-decorator-none">
                        <Button variant="outlined" className='botao btnVerPostagens'>Ver Postagens</Button>
                        </Link>
                    </Box>
                </Grid>
                <Grid item xs={6} >
                    <img src="https://i.imgur.com/wPSvXqy.gif" alt="" width="100%" height="100%" />
                </Grid>
                <Grid xs={12} className='posts'>
                    <TabPostagem />
                </Grid>
            </Grid>
        </>
    );
}

export default Home;