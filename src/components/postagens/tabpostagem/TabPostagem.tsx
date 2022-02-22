import { AppBar, Box, Tab, Tabs, Typography } from '@material-ui/core';
import { TabContext, TabPanel } from '@material-ui/lab';
import React, {useState} from 'react'
import ListaPostagem from '../listapostagem/ListaPostagem';

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
                <AppBar className='tabPanel' position='static'>
                    <Tabs centered indicatorColor='secondary' onChange={handleChange}>
                        <Tab label='Todas as Postagens'value='1'/>
                        <Tab label='Sobre nós' value='2' />
                    </Tabs>
                </AppBar>
                <TabPanel value='1'>
                    <Box display='flex' flexWrap='wrap' justifyContent='center'>
                        <ListaPostagem/>
                    </Box>
                </TabPanel>
                <TabPanel value='2' >
                    <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className="titulo"> Sobre Nós</Typography>
                    <Typography variant="body1" gutterBottom color="textPrimary" align="justify"> Mussum Ipsum, cacilds vidis litro abertis. A ordem dos tratores não altera o pão duris.Mé faiz elementum girarzis, nisi eros vermeio.Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis.Vehicula non. Ut sed ex eros. Vivamus sit amet nibh non tellus tristique interdum. </Typography>
                </TabPanel>
            </TabContext>   
        </>
    );
}

export default TabPostagem;