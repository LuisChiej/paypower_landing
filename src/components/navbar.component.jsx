import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

import UilListUiAltIcon from '@iconscout/react-unicons/icons/uil-list-ui-alt';
import { NavLink, withRouter, useHistory } from "react-router-dom";

import logo from "../assets/images/logos/logo.png";

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
	},
    drawer: {
        width: 400
    },
	appBar: {
		zIndex: 1,
        backgroundColor: 'white',
        [theme.breakpoints.up('sm')]: {
			paddingLeft: "40px",
            paddingRight: "40px",
            paddingTop: "18px",
            paddingBottom: "18px",
		}
	},
    grow: {
		flexGrow: 1,
	},
	sidebar: {
		display: 'flex',
        paddingTop: '10px',
	},
}));

export default function NavbarComponent() {
    const classes = useStyles();

    const [open, setOpen] = React.useState(false);

    const list = [
        'Home',
        'Features',
        'About Us',
        'FAQ',
        'Login'
    ]

    return (
        <>
            <CssBaseline />
			<AppBar position="fixed" className={classes.appBar} elevation={0}>
				<Toolbar>
                    <Box
                        display={'flex'}
                        width={'100%'}
                    >
                        <Typography variant="h6" noWrap>
                            <span>
                                <img src={logo} alt={'paypower'} height={'50px'}/>
                            </span>
                        </Typography>
                        <div className={classes.grow} />
                        <div className={classes.sidebar}>
                            <Hidden implementation={'js'} mdUp>
                                <IconButton
                                    onClick={()=>setOpen(true)}
                                >
                                    <UilListUiAltIcon color="#009750"/>
                                </IconButton>
                            </Hidden>
                            <Hidden implementation={'js'} smDown>
                                {
                                    list.map((item, key)=>{
                                        return item === 'Login' ? 
                                            <Box
                                                px={4}
                                                key={key}
                                            >
                                                <Button
                                                    variant={'contained'}
                                                    color={'primary'}
                                                >
                                                    {item}
                                                </Button>
                                            </Box> :
                                                <Box
                                                    px={4}
                                                    mt={1}
                                                    key={key}
                                                >
                                                    <Typography variant={'body2'} color={'primary'}>
                                                        {item}
                                                    </Typography>
                                                </Box>
                                    })
                                }
                            </Hidden>
                        </div>
                    </Box>
				</Toolbar>
                <Drawer anchor={'right'} open={open} onClose={()=>setOpen(false)}>
                    <List>
                        {
                            list.map((item, key)=>{
                                return item === 'Login' ? <Button
                                    key={key}
                                    variant={'contained'}
                                >
                                    {item}
                                </Button> :
                                    <ListItem
                                        key={key}
                                    >
                                        <ListItemText primary={item}/>
                                    </ListItem>
                            })
                        }
                    </List>
                </Drawer>
			</AppBar>
        </>
    );
}