import { createTheme } from '@material-ui/core/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#1F2833', // navbar background color
      title: '#01BBC9', // navbar title color
      text: '#01BBC9',
    },
    background: {
      default: '#fff',
      paper: '#fff',
      greyMedium: '#d9d9d9',
      greyLight: '#f0f0f0',
      dark: '#1F2833',
    },
    secondary: {
      main: '#f50004',
    },
  },
  typography: {
    fontFamily: 'Roboto',
  },
});
