import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import MobileStepper from '@material-ui/core/MobileStepper';
import Typography from '@material-ui/core/Typography';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import Person2 from '../assets/images/avatars/person_2.jpg';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const useStyles = makeStyles({
    root: {
      flexGrow: 1,
      marginTop: '24px',
      justifyContent: 'center'
    },
});

export default function TestimonialsComponent() {
    const classes = useStyles();

    const array = [1, 1, 1, 1];

    const [activeStep, setActiveStep] = React.useState(0);

    const handleStepChange = (step) => {
        setActiveStep(step);
    };

    return (
        <Grid container style={{marginTop: '20px', marginBottom: '20px'}}>
            <Grid item xs={12}>
                <Box
                    width={'100%'}
                    display={'flex'}
                    justifyContent={'center'}
                    my={5}
                >
                    <Typography variant={'h4'} component={'p'} style={{fontWeight: 'bold'}}>
                        What our users say
                    </Typography>
                </Box>
            </Grid>
            <Grid item xs={12}>
                <Container maxWidth={'md'}>
                    <AutoPlaySwipeableViews
                        axis={'x'}
                        index={activeStep}
                        onChangeIndex={handleStepChange}
                        enableMouseEvents
                    >
                        {
                            array.map((e, index)=>(
                                <div key={index}>
                                    <Box
                                        display={'flex'}
                                        justifyContent={'center'}
                                        mb={5}
                                    >
                                        <Avatar style={{height: '100px', width: '100px'}} alt={'person_2'} src={Person2} />
                                    </Box>
                                    <Grid container>
                                        <Grid item xs={12} style={{marginBottom: '24px'}}>
                                            <Typography variant={'body1'} component={'p'} style={{textAlign: 'center'}}>
                                                “Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                                Consectetur unde reprehenderit aperiam quaerat fugiat repudiandae 
                                                explicabo animi minima fuga beatae illum eligendi incidunt consequatur. 
                                                Amet dolores excepturi earum unde iusto.”
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Typography variant={'subtitle1'} component={'p'} style={{textAlign: 'center', fontWeight: 'bold'}}>
                                                - John Smith
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </div>
                            ))
                        }
                    </AutoPlaySwipeableViews>
                    <MobileStepper 
                        variant="dots"
                        steps={4}
                        position="static"
                        activeStep={activeStep}
                        className={classes.root}
                    />
                </Container>
            </Grid>
        </Grid>
    )
}
