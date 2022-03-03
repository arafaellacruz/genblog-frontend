import React from 'react';
import { AppBar, Toolbar, Typography, Box, Avatar, Divider } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/userReducer';
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
                <Box className='cursor spaceLeft2'>
                    <Typography className='bgNav'>
                       <h3>BAZINGA!</h3>
                    </Typography>
                </Box>

                <Box className="spaceLeft" display="flex" justifyContent={'right'}>
                    <Link to='/home' className='text-decorator-none' >
                        <Box mx={1} className='cursor'>
                            <Typography className='titulosNav'>
                               <h3>Home</h3>
                            </Typography>
                        </Box>
                    </Link>
                    
                    <Link to='/postagem' className='text-decorator-none' >
                        <Box mx={1} className='cursor'>
                            <Typography className='titulosNav'>
                                <h3>Postagens</h3>
                            </Typography>
                        </Box>
                    </Link>
                    
                    <Link to='/tema' className='text-decorator-none' >
                        <Box mx={1} className='cursor'>
                            <Typography className='titulosNav'>
                                <h3>Temas</h3>
                            </Typography>
                        </Box>
                    </Link>
                    
                    <Link to='/formularioTema' className='text-decorator-none' >
                        <Box mx={1} className='cursor'>
                            <Typography className='titulosNav'>
                                <h3>Cadastrar tema</h3>
                            </Typography>
                        </Box>
                    </Link>
                    
                    <Box mx={1} style={{ cursor: "pointer", color: 'white' }} onClick={goLogout}>
                        <Typography className='titulosNav'>
                           <h3>Logout </h3>
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
