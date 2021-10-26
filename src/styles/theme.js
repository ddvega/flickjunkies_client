import { createTheme } from '@material-ui/core/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#0d253f', // navbar background color
      title: '#01b4e4', // navbar title color
      text: '#01b4e4',
    },
    background: {
      default: '#fff',
      paper: '#fff',
      greyMedium: '#d9d9d9',
      greyLight: '#f0f0f0',
      dark: '#0d253f',
    },
    secondary: {
      main: '#f50004',
    },
  },
  typography: {
    fontFamily: 'Roboto',
  },
});
