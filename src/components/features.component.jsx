import React from 'react';

import makeStyles from '@material-ui/core/styles/makeStyles';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(() => ({
	root: {
        backgroundColor: 'white'
    }
}));

export default function FeaturesComponent() {
    const classes = useStyles();

    return (
        <Box py={5} className={classes.root}>
            <Grid container>
                <Grid item xs={12}>
                    <Box
                        width={'100%'}
                        display={'flex'}
                        justifyContent={'center'}
                        my={5}
                    >
                        <Typography variant={'h4'} component={'p'} style={{fontWeight: 'bold'}}>
                            Features
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <Container maxWidth={'md'}>
                        <Grid container spacing={4}>
                            <Grid item xs={12} md={4}>
                                <Card>
                                    <CardContent>
                                        <Typography variant={'h5'} component={'h5'} style={{textAlign: 'center', marginBottom: '15px'}}>
                                            Easy Purchase
                                        </Typography>
                                        <Typography variant={'body2'} component={'p'} style={{textAlign: 'center'}}>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                            Perferendis quis molestiae vitae eligendi at.
                                        </Typography>

                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <Card>
                                    <CardContent>
                                        <Typography variant={'h5'} component={'h5'} style={{textAlign: 'center', marginBottom: '15px'}}>
                                            Easy Purchase
                                        </Typography>
                                        <Typography variant={'body2'} component={'p'} style={{textAlign: 'center'}}>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                            Perferendis quis molestiae vitae eligendi at.
                                        </Typography>

                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <Card>
                                    <CardContent>
                                        <Typography variant={'h5'} component={'h5'} style={{textAlign: 'center', marginBottom: '15px'}}>
                                            Easy Purchase
                                        </Typography>
                                        <Typography variant={'body2'} component={'p'} style={{textAlign: 'center'}}>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                            Perferendis quis molestiae vitae eligendi at.
                                        </Typography>

                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <Card>
                                    <CardContent>
                                        <Typography variant={'h5'} component={'h5'} style={{textAlign: 'center', marginBottom: '15px'}}>
                                            Easy Purchase
                                        </Typography>
                                        <Typography variant={'body2'} component={'p'} style={{textAlign: 'center'}}>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                            Perferendis quis molestiae vitae eligendi at.
                                        </Typography>

                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <Card>
                                    <CardContent>
                                        <Typography variant={'h5'} component={'h5'} style={{textAlign: 'center', marginBottom: '15px'}}>
                                            Easy Purchase
                                        </Typography>
                                        <Typography variant={'body2'} component={'p'} style={{textAlign: 'center'}}>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                            Perferendis quis molestiae vitae eligendi at.
                                        </Typography>

                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <Card>
                                    <CardContent>
                                        <Typography variant={'h5'} component={'h5'} style={{textAlign: 'center', marginBottom: '15px'}}>
                                            Easy Purchase
                                        </Typography>
                                        <Typography variant={'body2'} component={'p'} style={{textAlign: 'center'}}>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                            Perferendis quis molestiae vitae eligendi at.
                                        </Typography>

                                    </CardContent>
                                </Card>
                            </Grid>
                            
                        </Grid>
                    </Container>
                </Grid>
            </Grid>
        </Box>
    )
}
