import React from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';

import UilCheckCircleIcon from '@iconscout/react-unicons/icons/uil-check-circle';

import AboutUsImage from '../assets/images/background/about_us.svg';

// import AEDC from '../assets/images/distributors/AEDC.png';
// import BEDC from '../assets/images/distributors/BEDC.png';
// import EEDC from '../assets/images/distributors/EEDC.png';
// import EKEDC from '../assets/images/distributors/EKEDC.png';
// import IBEDC from '../assets/images/distributors/IBEDC.png';
// import IKEDC from '../assets/images/distributors/IKEDC.png';
// import KEDCO from '../assets/images/distributors/KEDCO.png';
// import PHED from '../assets/images/distributors/PHED.png';

export default function AboutComponent() {
    return (
        <Grid container>
            <Grid item xs={12}>
                <Box
                    width={'100%'}
                    display={'flex'}
                    justifyContent={'center'}
                    my={5}
                >
                    <Typography variant={'h4'} component={'p'} style={{fontWeight: 'bold'}}>
                        About Us
                    </Typography>
                </Box>
            </Grid>
            <Grid item xs={12}>
                <Container maxWidth={"md"}>
                    <Grid container>
                        <Grid item xs={12} md={6}>
                            <img width={'100%'} src={AboutUsImage} alt={'about_us_bg'} />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Typography variant={'h5'} component={'h5'} style={{fontWeight: 'bold', marginBottom: '24px'}}>
                                What we do
                            </Typography>

                            <Typography variant={'body1'} component={'p'} style={{marginBottom: '24px'}}>
                                Eos cumque optio dolores excepturi rerum temporibus magni recusandae eveniet, 
                                totam omnis consectetur maxime quibusdam expedita dolorem dolor nobis dicta 
                                labore quaerat esse magnam unde, aperiam delectus! At maiores, itaque.
                            </Typography>

                            <List>
                                <ListItem>
                                    <ListItemIcon>
                                        <UilCheckCircleIcon />
                                    </ListItemIcon>
                                    <ListItemText primary={'Laborum enim quasi at modi'}/>
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <UilCheckCircleIcon />
                                    </ListItemIcon>
                                    <ListItemText primary={'Ad at tempore'}/>
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <UilCheckCircleIcon />
                                    </ListItemIcon>
                                    <ListItemText primary={'Labore quaerat ess'}/>
                                </ListItem>
                            </List>
                        </Grid>
                    </Grid>
                </Container>
            </Grid>
            {/* <Grid item xs={12}>
                <Box
                    width={'100%'}
                    display={'flex'}
                    justifyContent={'center'}
                    my={5}
                >
                    <Typography variant={'h5'} component={'p'} style={{fontWeight: 'bold'}}>
                        Our Service Provider
                    </Typography>
                </Box>
                <Grid container>
                    <Box
                        display={'flex'}
                        justifyContent={'center'}
                    >
                        <Grid container>
                            <Grid item xs={6} md={2}>
                                <img src={AEDC} width={'100%'} alt={'aedc'}/>
                            </Grid>
                            <Grid item xs={6} md={2}>
                                <img src={BEDC} width={'100%'} alt={'bedc'}/>
                            </Grid>
                            <Grid item xs={6} md={2}>
                                <img src={EEDC} width={'100%'} alt={'eedc'}/>
                            </Grid>
                            <Grid item xs={6} md={2}>
                                <img src={EKEDC} width={'100%'} alt={'ekedc'}/>
                            </Grid>
                            <Grid item xs={6} md={2}>
                                <img src={IBEDC} width={'100%'} alt={'ibedc'}/>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
            </Grid> */}
        </Grid>
    )
}
