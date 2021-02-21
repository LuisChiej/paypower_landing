import React from 'react';
import './App.css';

import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';

import NavbarComponent from './components/navbar.component'
import HomeComponent from './components/home.component';
import AboutComponent from './components/about.component';
import FeaturesComponent from './components/features.component';
import TestimonialsComponent from './components/testimonials.component';
import FooterComponent from './components/footer.component';


const useStyles = makeStyles((theme) => ({
  '@global': {
    '*::-webkit-scrollbar': {
      width: '0.4em'
    },
  //   '*::-webkit-scrollbar-track': {
  //     '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)'
  //   },
    '*::-webkit-scrollbar-thumb': {
      minHeight: "24px",
      borderRadius: "8px",
      backgroundColor: "#585859"
    },
    '*::-webkit-scrollbar-corner': {
      backgroundColor: "#202022",
    },
  },
  root: {
    display: 'flex',
    // backgroundColor: 'white'
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const THEME = responsiveFontSizes(
  createMuiTheme({
    typography: {
      fontFamily: [
        'Nunito'
      ].join(','),
      h1: {
        fontFamily: 'Nunito'
      },
      h2: {
        fontFamily: 'Nunito'
      },
      h3: {
        fontFamily: 'Nunito'
      },
      h4: {
        fontFamily: 'Nunito'
      },
      h5: {
        fontFamily: 'Nunito'
      },
      h6: {
        fontFamily: 'Nunito'
      }
    },
    palette: {
      primary: {
        main: "#009750"
      },
      secondary: {
        main: "#E17F1E"
      },
      contrastThreshold: 3
    },
    zIndex: 0
  })
);

export default function App() {
  const classes = useStyles();

  return (
    <>
        <div className={classes.root}>
          <ThemeProvider theme={THEME}>
            <main className={classes.content}>
              <div className={classes.toolbar} />
              <NavbarComponent />

              <HomeComponent />

              <FeaturesComponent />

              <AboutComponent />

              <TestimonialsComponent />

              <FooterComponent />
            </main>
          </ThemeProvider>
        </div>
      </>
  );

}
