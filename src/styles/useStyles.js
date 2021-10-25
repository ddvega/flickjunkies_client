import { makeStyles } from '@material-ui/core/styles';

export const useStyles = () => {
  const drawerWidth = 240;
  const styles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    stickToBottom: {
      width: '100%',
      position: 'fixed',
      bottom: 0,
    },
    rating: {
      color: theme.palette.primary.title,
    },
    toolbar: {
      paddingRight: 24, // keep right padding when drawer closed
    },
    toolbarIcon: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: '0 8px',
      ...theme.mixins.toolbar,
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    menuButtonHidden: {
      display: 'none',
    },
    title: {
      flexGrow: 1,
    },
    drawerPaper: {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerPaperClose: {
      overflowX: 'hidden',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9),
      },
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      height: '100vh',
      width: '80vh',
      overflow: 'auto',
    },
    container: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
    },
    paper: {
      padding: theme.spacing(1),
      display: 'flex',
      overflow: 'auto',
      flexDirection: 'column',
      color: theme.palette.primary.text,
      backgroundColor: theme.palette.background.dark,
    },
    summary: {
      padding: theme.spacing(1),
      overflow: 'auto',
      color: theme.palette.primary.text,
      backgroundColor: theme.palette.background.dark,
      height: '100vh',
    },
    paper2: {
      padding: theme.spacing(2),
      display: 'flex',
      flexDirection: 'column',
      overflow: 'auto',
      alignItems: 'center',
    },

    fixedHeight: {
      height: 240,
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(3),
    },
    image: {
      maxWidth: '100%',
    },
  }));

  return styles();
};
