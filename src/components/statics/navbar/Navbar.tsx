import React from 'react';
import { AppBar, Toolbar, Typography, Box, Avatar, Divider } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { addToken } from '../../../store/tokens/actions';
import './Navbar.css';

function Navbar() {
    // Usamos o LocalStorage para guardar dados não sensiveis do usuário, por exemplo: Token.
    let history = useHistory();
    const dispatch = useDispatch();
    const token = useSelector<TokenState, TokenState['tokens']>(
        (state) => state.tokens
    );

    function goLogout() {
        dispatch(addToken(''));
        alert('Você foi deslogado da nossa rede.')
        history.push('/login')
    }

    var navbarComponent;

    if (token != '') {
        navbarComponent = <AppBar position="static" >
            <Toolbar variant="dense" className='bgNav'>
                <Box>
                    <Avatar alt="LOGO" src='https://i.imgur.com/hP785uM.png' />
                </Box>
                <Box className='cursor'>
                    <Typography className='bgNav'>
                        Bazinga!
                    </Typography>
                </Box>

                <Box className="spaceLeft" display="flex" justifyContent={'right'}>
                    <Link to='/home' className='text-decorator-none' >
                        <Box mx={1} className='cursor'>
                            <Typography className='titulosNav'>
                                Home
                            </Typography>
                        </Box>
                    </Link>
                    •
                    <Link to='/postagem' className='text-decorator-none' >
                        <Box mx={1} className='cursor'>
                            <Typography className='titulosNav'>
                                Postagens
                            </Typography>
                        </Box>
                    </Link>
                    •
                    <Link to='/tema' className='text-decorator-none' >
                        <Box mx={1} className='cursor'>
                            <Typography className='titulosNav'>
                                Temas
                            </Typography>
                        </Box>
                    </Link>
                    •
                    <Link to='/formularioTema' className='text-decorator-none' >
                        <Box mx={1} className='cursor'>
                            <Typography className='titulosNav'>
                                Cadastrar tema
                            </Typography>
                        </Box>
                    </Link>
                    •
                    <Box mx={1} style={{ cursor: "pointer", color: 'white' }} onClick={goLogout}>
                        <Typography className='titulosNav'>
                            Logout
                        </Typography>
                    </Box>

                </Box>

            </Toolbar>
        </AppBar>
    }

    return (
        <>
            {navbarComponent}
        </>
    )
}

export default Navbar;
