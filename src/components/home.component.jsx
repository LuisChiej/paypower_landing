import React from 'react';

import makeStyles from '@material-ui/core/styles/makeStyles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import BackgroundImage from '../assets/images/background/bg_4.jpg';

const useStyles = makeStyles((theme) => ({
	root: {
        backgroundColor: 'white'
    },
    medium: {
        display: 'flex',
        alignItems: 'center'
    },
    header: {
        textAlign: 'center'
    }
}));


export default function HomeComponent() {
    const classes = useStyles();

    return (
        <>
            <Grid container className={classes.root}>
                <Grid item xs={12} md={6}>
                    <img width={'100%'} src={BackgroundImage} alt={'paypower_bg'} />
                </Grid>
                <Grid item xs={12} md={6} className={classes.medium}>
                    <Grid container>
                        <Grid item xs={12}>
                            <Typography variant={'h3'} component={'h3'} className={classes.header}>
                                Make Your Business More Profitable
                            </Typography>
                            <Typography 
                                variant={'body1'} 
                                component={'p'} 
                                color={'textSecondary'}
                                style={{padding: '25px'}}
                            >
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Laboriosam assumenda ea quo cupiditate facere deleniti fuga officia.
                            </Typography>
                        </Grid>
                        <Grid item xs={12} style={{display: 'flex', justifyContent: 'center'}}>
                            <Box
                                // mt={2}
                            >
                                <Button
                                    variant={'contained'}
                                    color={'primary'}
                                >
                                    Get Started
                                </Button>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        
        </>
    )
}
