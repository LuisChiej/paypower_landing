import React from 'react'
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";

import UilFacebookIcon from "@iconscout/react-unicons/icons/uil-facebook";
import UilTwitterIcon from "@iconscout/react-unicons/icons/uil-twitter";
import UilInstagramIcon from "@iconscout/react-unicons/icons/uil-instagram";

import logo from "../assets/images/logos/logo.png";

export default function FooterComponent() {
    return (
        <>
            <Divider />
            <Grid container style={{marginTop: '24px'}}>
                <Grid item xs={12} md={4}>
                    <Grid container>
                        <Grid item xs={12}>
                            <img src={logo} alt={'paypower_ng'} height={'50px'}/>
                        </Grid>
                        <Grid item xs={12} style={{margin: '24px 0px'}}>
                            <Typography variant="body2" color="textSecondary" align="left">
                                {'Copyright © '}
                                <a color="inherit" href="https://paypower.ng" target="_blank" rel="noreferrer">
                                    ZaraziteConceptLTD
                                </a>{' '}
                                {new Date().getFullYear()}
                                {'.'}
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container>
                                <Grid item xs={4}>
                                    <UilFacebookIcon/>
                                </Grid>
                                <Grid item xs={4}>
                                    <UilTwitterIcon/>
                                </Grid>
                                <Grid item xs={4}>
                                    <UilInstagramIcon/>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

            </Grid>
        </>
    )
}
