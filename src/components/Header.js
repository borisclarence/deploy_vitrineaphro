import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { fade, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import ImgFile from '../assets/afro-logo-16x16.png';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import { useTheme, useMediaQuery, Drawer, List, ListItem, ListItemText, ListItemIcon, Divider, } from "@material-ui/core";
import HomeIcon from '@material-ui/icons/Home';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';

import Box from '@material-ui/core/Box';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
  link: {
    margin: theme.spacing(1, 0.4),
      color: '#fff',
      '&:hover': {
        textDecoration: 'none',
      }
    },
  MobileTransition: {
    display: 'flex',
  },
  hide: {
    display: 'none',
  },  
}));

const DrawerList = () => {
  const [openDrawer, setOpenDrawer] = React.useState(false);
  const classes = useStyles();

  const handleDrawerOpen = () => {
    setOpenDrawer(true);
  };

  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };

  return (
    <>
      <IconButton
        edge="start"
        className={classes.menuButton}
        color="inherit"
        aria-label="open drawer"
        onClick={handleDrawerOpen}
      >
        <MenuIcon />
      </IconButton>
      <Typography className={classes.title} variant="h6" noWrap>
        Afro-web
      </Typography>
              
      <Drawer
        anchor='left'
        onClose={() => setOpenDrawer(false)}
        open={openDrawer}
      >
      <List>
        
        <Link variant="button" color="textPrimary" href="/" style={{textDecoration: 'none', textTransform: 'capitalize', color: 'black'}}>
          <ListItem button>
            <ListItemIcon>
              <HomeIcon color="action" />
            </ListItemIcon>
            <ListItemText primary="Accueil" />
          </ListItem>
        </Link>

        <Link variant="button" color="textPrimary" to="#about" style={{textDecoration: 'none', textTransform: 'capitalize', color: 'black'}}>
          <ListItem button>
            <ListItemIcon>
              <LabelImportantIcon color="action" />
            </ListItemIcon>
            <ListItemText primary="A Propos" />
          </ListItem>
        </Link>
        
        <Link variant="button" color="textPrimary" to="#team" style={{textDecoration: 'none', textTransform: 'capitalize', color: 'black'}}>
          <ListItem button>
            <ListItemIcon>
              <PeopleAltIcon color="action" />
            </ListItemIcon>
            <ListItemText primary="Notre Equipe" />
          </ListItem>
        </Link>

        <Link variant="button" color="textPrimary" href="/Tutorial" style={{textDecoration: 'none', textTransform: 'capitalize', color: 'black'}}>
          <ListItem button>
            <ListItemIcon>
              <MenuBookIcon color="action" />
            </ListItemIcon>
            <ListItemText primary="Tutorial" />
          </ListItem>
        </Link>
      </List>  
      </Drawer>
    </>
  );
}

export default function Header() {
  const classes = useStyles();

  const theme = useTheme();

  const isMatch = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <div className={classes.root}>
      <AppBar position="static" >
        <Toolbar className={classes.MobileTransition}>
          
          {isMatch ? <DrawerList /> : (
            <>
            <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <img src={ImgFile} alt="logo" />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            Afro-web
          </Typography>
          <Box sm={12} className={classes.navtest}>
            <Link variant="button" color="textPrimary" href="/" className={classes.link}>
              <Button size="large" className={classes.link}>Accueil</Button>
            </Link>
            <Link variant="button" color="textPrimary" to="#about" className={classes.link}>
              <Button size="large" className={classes.link}>A Propos</Button>
            </Link>
            <Link variant="button" color="textPrimary" to="#team" className={classes.link}>
              <Button size="large" className={classes.link}>Notre Equipe</Button>
            </Link>
            <Link variant="button" color="textPrimary" href="/Tutorial" className={classes.link}>
              <Button size="large" className={classes.link}>Tutoriel</Button>
            </Link>
          </Box>
          
          </>
          )}
          
        </Toolbar>
      </AppBar>
    </div>
  );
}