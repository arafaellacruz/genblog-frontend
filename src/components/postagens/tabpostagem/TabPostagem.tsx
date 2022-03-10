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
                        <Tab label="Sobre" value="2" className='hover' />
                    </Tabs>
                </AppBar>
                <TabPanel value="1" >
                    <Box display="flex" flexWrap="wrap" justifyContent="center">
                        <ListaPostagem />
                    </Box>
                </TabPanel>
                <TabPanel value="2">
                    <Typography variant="h4" gutterBottom color="textPrimary" component="h4" align="center" className="titulo">Quem sou eu?</Typography>
                    <Grid container>
                        <Grid alignItems="center" item xs={6}>

                            <img className='imageSobre' src="https://i.imgur.com/LoHta7w.jpg" />
                        </Grid>
                        <Grid alignItems="center" item xs={6}>
                            <Typography variant="body1" gutterBottom color="textPrimary" align="justify">
                                <br />
                                <br />
                                Oláaaaaa! Me chamo Rafaella, meus pronomes são Ela/Dela, tenho 22 anos.
                                Sou nascida e criada em São José dos Campos, São Paulo, onde sempre vivi aqui na mesma casa com meus pais.
                                <br />
                                <br />
                                Sou filha única,amo animais, e esportes. Sou apaixonada por inglês e desde pequena estudo por conta própria através de filmes, séries e música, e acabei desenvolvendo um nível intermediario.
                                Meus primeiros contatos com tecnologia foram com os videogames dos meus primos, que apesar de uma certa relutancia em casa por "ser coisa de menino", meu interesse com o passar do tempo foi crescendo cada vez mais. Anos depois, meu pai comprou nosso primeiro computador, onde eu ficava o tempo todo procurando e descobrindo esse mundo imenso da internet e tecnologia!
                                <br />
                                <br />
                                Em 2018, iniciei graduação de Ciência da Computação juntamente com um curso de Computação Gráfica, por AMAR jogos de RPG online, e então um sonho de trabalhar para a Blizzard, empresa provedora e criadora do meu jogo preferido, surgiu. Infelizmente precisei trancar o curso, na esperança de retornar mais pre frente. Um tempo depois, através de um processo seletico, ganhei uma bolsa para me formar em Técnico em Administração, onde adquiri excelentes competências da área, e também fui membro da equipe vencedora da Mostra Técnológica de 2019.
                                <br />
                                <br />
                                Atualmente, trabalho na SumUp, após um certo tempo como Agent II especialista na área de Empréstimos e sendo do time de Operações, decidi qu estava na hora de retornar a minha área dos sonhos. Comecei a buscar áreas e vagas disponíveis dentro da minha empresa, juntamente com cursos e faculdades, para poder retornar para a área de TI, foi quando eu conheci a Generation, que estava começando uma parceria com a empresa que trabalho, e teria a oportunidade de participar do processo.
                                <br />
                                <br />
                                Fiquei muito feliz ao passar, foram 12 semanas intensas, desenvolvendo muuuuita persistencia para absorver todos os conteudos, atenção aos detalhes para encontrar cada bug que surgia e também responsabilidade pessoal para poder estudar e tirar todas as dúvidas que surgiam para um melhor aproveitamento.
                                Me formei em Março, e um dos meus projetos de finalização de curso foi esta aplicação, onde escolhi o tema "Física", por gostar muuuito do assunto. Inicio neste segundo semestre de 2022, minha graduação em Ciência da Computação, e estou grata por ter finalmente encontrado "quem quero ser quando crescer", e também em partes, finalmente: SER.
                            </Typography>
                        </Grid>
                    </Grid>
                </TabPanel>
            </TabContext>
        </>
    );
}

export default TabPostagem;