import React from "react";
import { Typography, Box, Button } from '@material-ui/core'
import { Grid } from '@material-ui/core'
import TabPostagem from "../../components/postagens/tabpostagem/TabPostagem";
import ModalPostagem from "../../components/postagens/modalPostagem/ModalPostagem";
import './Home.css';


//Componentes, nada mais são que funções.
function Home() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" className="box">
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                        <Typography variant="h4" gutterBottom color="textPrimary" component="h4" align="center" className="title" >Seja bem vinde!☺</Typography>
                        <Typography variant="h6" gutterBottom color="textSecondary" component="h6" align="center" className="title">Conteúdos de física básica de uma forma simples e divertida!</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                            <ModalPostagem />
                        </Box>
                        <Button variant="outlined" className='botao btnVerPostagens'>Ver Postagens</Button>
                    </Box>
                </Grid>
                <Grid item xs={6} >
                    <img src="https://i.imgur.com/tnxFrha.png" alt="" width="100%" height="100%" />
                </Grid>
                <Grid xs={12} className='posts'>
                    <TabPostagem/>
                </Grid>
            </Grid>
        </>
    );
}

export default Home;