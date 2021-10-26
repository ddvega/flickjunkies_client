import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import VisibilityIcon from '@material-ui/icons/Visibility';
import CreateIcon from '@material-ui/icons/Create';
import MenuIcon from '@material-ui/icons/Menu';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import logo from '../icons/blueMovie.png';
import { Navlist } from './Navlist';
import { useStyles } from '../styles/navbarStyles';

export const Navbar = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const { isAuthenticated } = useAuth0();

  // handle opening and closing of app drawer
  const drawerOpen = () => {
    setOpen(true);
  };

  const drawerClose = () => {
    setOpen(false);
  };

  const itemsCommon = [
    {
      id: '0',
      route: '/Discover',
      icon: <VisibilityIcon />,
      text: 'Find Movies',
    },
  ];

  const itemsLoggedIn = [
    {
      id: '1',
      route: '/account',
      icon: <AccountCircleIcon />,
      text: 'Log Out',
    },
    {
      id: '2',
      route: '/profile',
      icon: <LockOpenIcon />,
      text: 'Profile',
    },
    {
      id: '3',
      route: '/',
      icon: <CreateIcon />,
      text: 'Create',
    },
    ...itemsCommon,
  ];

  const itemsLoggedOut = [
    {
      id: '4',
      route: '/account',
      icon: <PersonAddIcon />,
      text: 'Sign Up',
    },
    {
      id: '5',
      route: '/account',
      icon: <AccountCircleIcon />,
      text: 'Log In',
    },
    {
      id: '6',
      route: '/account',
      icon: <LockOpenIcon />,
      text: 'Reset Password',
    },

    ...itemsCommon,
  ];

  return (
    <>
      <AppBar
        position="sticky"
        color="transparent"
        elevation={0}
        className={clsx(classes.appBar, open && classes.appBarShift)}
      >
        <Toolbar className={classes.toolbar}>
          <Link to="/" style={{ paddingLeft: '1rem' }}>
            <img src={logo} alt="" style={{ height: 50, width: 50 }} />
          </Link>
          <Typography className={classes.title} variant="h6" noWrap>
            FLICKJUNKIES
          </Typography>

          <IconButton
            edge="end"
            color="inherit"
            aria-label="open drawer"
            onClick={drawerOpen}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
          >
            <MenuIcon className={classes.MenuIcon} fontSize="large" transform="scale(1.25)" />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        variant="temporary"
        classes={{
          paper: clsx('navbar', classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={drawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />

        {isAuthenticated ? (
          <Navlist drawer={drawerClose} items={itemsLoggedIn} />
        ) : (
          <Navlist drawer={drawerClose} items={itemsLoggedOut} />
        )}
      </Drawer>
    </>
  );
};
