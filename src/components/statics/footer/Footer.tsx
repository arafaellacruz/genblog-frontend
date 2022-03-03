import React from "react";
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import { Typography, Grid, Box } from '@material-ui/core'
import { useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/tokensReducer";
import './Footer.css';

function Footer() {

    const token = useSelector<TokenState, TokenState['tokens']>(
        (state) => state.tokens
    );

    var footerComponent;

    if(token!= "") {
        footerComponent = <Grid container direction="row" justifyContent="center" alignItems="center">
        <Grid alignItems="center" item xs={12}>
         <Box className='box1'>
                <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                    <Typography variant="h6" align="center" gutterBottom style={{ color: "white" }}>Siga-me nas redes sociais </Typography>
                </Box>
                <Box  display="flex" alignItems="center" justifyContent="center">
                    <a className="hover" href="https://www.facebook.com/rafaella.leticia.cruz/" target="_blank">
                    <FacebookIcon className='redes' />
                    </a>
                    <a className="hover" href="https://www.instagram.com/rafacruzzzzz" target="_blank">
                    <InstagramIcon className='redes' />
                    </a>
                    <a className="hover" href="https://www.linkedin.com/in/rafaella-cruz1999/" target="_blank">
                    <LinkedInIcon className='redes' />
                    </a>
                    <a className="hover" href="https://github.com/rafacruzz" target="_blank">
                    <GitHubIcon className='redes' />
                    </a>
                </Box>
            </Box>
            <Box className='box2'>
                <Box paddingTop={0.5}>
                    <Typography variant="subtitle2" align="center" gutterBottom className='textos' >© 2022 - Copyright: Rafaella Cruz</Typography>
                </Box>
                <Box>
                    <a text-decoration="none" target="_blank" href="https://brasil.generation.org">
                        <Typography variant="subtitle2" gutterBottom className='textos text-decorator-none' align="center"> Generation Brazil </Typography>
                    </a>
                </Box>
            </Box>
        </Grid>
    </Grid>
    }

    return (
        <>
            {footerComponent}
        </>
    )
}

export default Footer;