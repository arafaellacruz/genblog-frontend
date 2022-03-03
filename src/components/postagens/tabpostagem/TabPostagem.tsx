import { AppBar, Box, Grid, Tab, Tabs, Typography } from '@material-ui/core';
import { TabContext, TabPanel } from '@material-ui/lab';
import React, { useState } from 'react'
import ListaPostagem from '../listapostagem/ListaPostagem';
import './TabPostagem.css';

/*  A function handleChange é responsavel por fazer à mudança de estado(State) em nosso código, nessa página.)
return.
    O atribuito value=[] serve para setar o valor digitado no campo, e onde ele deve ser salvo. */

function TabPostagem() {
    const [value, setValue] = useState('1')
    function handleChange(event: React.ChangeEvent<{}>, newValue: string) {
        setValue(newValue);
    }
    return (

        <>
            <TabContext value={value} >
                <AppBar position="static" className='tabPanel'>
                    <Tabs centered indicatorColor="secondary" onChange={handleChange}>
                        <Tab label="Todas as postagens" value="1" className='hover' />
                        <Tab label="Sobre nós" value="2" className='hover' />
                    </Tabs>
                </AppBar>
                <TabPanel value="1" >
                    <Box display="flex" flexWrap="wrap" justifyContent="center">
                        <ListaPostagem />
                    </Box>
                </TabPanel>
                <TabPanel value="2">
                    <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className="titulo">Sobre nós</Typography>
                    <Grid container>
                        <Grid alignItems="center" item xs={6}>
                            <img src="https://i.imgur.com/ZrqN8rA.jpg" alt="" width="500px" height="500px" />
                        </Grid>
                        <Grid alignItems="center" item xs={6}>
                            <Typography variant="body1" gutterBottom color="textPrimary" align="justify">
                                <br />
                                <br />
                                Mussum Ipsum, cacilds vidis litro abertis. A ordem dos tratores não altera o pão duris.Tá deprimidis, eu conheço uma cachacis que pode alegrar sua vidis.Copo furadis é disculpa de bebadis, arcu quam euismod magna.Cevadis im ampola pa arma uma pindureta.
                                <br />
                                <br />
                                Nec orci ornare consequat. Praesent lacinia ultrices consectetur. Sed non ipsum felis.Diuretics paradis num copo é motivis de denguis.A ordem dos tratores não altera o pão duris.Quem manda na minha terra sou euzis!
                                <br />
                                <br />
                                Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo!Admodum accumsan disputationi eu sit. Vide electram sadipscing et per.Mais vale um bebadis conhecidiss, que um alcoolatra anonimis.Quem num gosta di mé, boa gentis num é.
                                <br />
                                <br />
                                Mussum Ipsum, cacilds vidis litro abertis. Manduma pindureta quium dia nois paga.Delegadis gente finis, bibendum egestas augue arcu ut est.Si num tem leite então bota uma pinga aí cumpadi!Viva Forevis aptent taciti sociosqu ad litora torquent.
                            </Typography>
                        </Grid>
                    </Grid>
                </TabPanel>
            </TabContext>
        </>
    );
}

export default TabPostagem;