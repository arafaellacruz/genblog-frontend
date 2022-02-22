import React from 'react';
import { AppBar, Toolbar, Typography, Box, Avatar, Divider } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    return (
        <>
            <AppBar position="static" >
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
                        <Link to='/home' >
                            <Box mx={1} className='cursor'>
                                <Typography className='titulosNav'>
                                    Home
                                </Typography>
                            </Box>
                        </Link>
                        •
                        <Box mx={1} className='cursor'>
                            <Typography className='titulosNav'>
                                Postagens
                            </Typography>
                        </Box>
                        •
                        <Box mx={1} className='cursor'>
                            <Typography className='titulosNav'>
                                Temas
                            </Typography>
                        </Box>
                        •
                        <Box mx={1} className='cursor'>
                            <Typography className='titulosNav'>
                                Cadastrar tema
                            </Typography>
                        </Box>
                        •
                        <Link to='/login' className='text-decorator-none'>
                            <Box mx={1} style={{ cursor: "pointer", color: 'white' }}>
                                <Typography className='titulosNav'>
                                    Logout
                                </Typography>
                            </Box>
                        </Link>

                    </Box>

                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;
