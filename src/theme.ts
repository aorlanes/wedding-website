import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    white: Palette['primary'];
    black: Palette['primary'];
  }
  interface PaletteOptions {
    white: PaletteOptions['primary'];
    black: PaletteOptions['primary'];
  }
}

declare module '@mui/material/IconButton' {
  interface IconButtonPropsColorOverrides {
    white: true;
  }
}

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 1010,
      xl: 1350,
    },
  },
  palette: {
    primary: {
      main: '#231f20',
      light: '#d7cec5',
    },
    secondary: {
      main: '#f5ebe0',
      light: '#f5f0eb',
    },
    error: {
      main: '#f44336',
    },
    warning: {
      main: '#ffa726',
    },
    info: {
      main: '#C6E5E8 ',
    },
    success: {
      main: '#66bb6a',
    },
    white: {
      main: '#ffffff',
    },
    black: {
      main: '#000000',
    },
    text: {
      primary: '#231f20',
      secondary: '#f5f0eb',
    },
    background: {
      default: '#f5ebe0',
    },
  },
  typography: {
    fontFamily: 'IM Fell English, serif',
    h1: {
      fontFamily: 'La Belle Aurore, cursive',
      fontSize: '6rem',
      fontWeight: 500,
      lineHeight: 1.167,
      letterSpacing: '-0.01562em',
    },
    h2: {
      fontFamily: 'La Belle Aurore, cursive',
      fontWeight: 500,
      fontSize: '3.75rem',
      lineHeight: 1.2,
      letterSpacing: '-0.00833em',
    },
    h3: {
      fontFamily: 'La Belle Aurore, cursive',
      fontWeight: 500,
      fontSize: '3rem',
      lineHeight: 1.167,
      letterSpacing: '0em',
    },
    h4: {
      fontFamily: 'La Belle Aurore, cursive',
      fontWeight: 500,
      fontSize: '2.125rem',
      lineHeight: 1.235,
      letterSpacing: '0.00735em',
    },
    h5: {
      fontFamily: 'La Belle Aurore, cursive',
      fontWeight: 500,
      fontSize: '1.5rem',
      lineHeight: 1.334,
      letterSpacing: '0em',
    },
    h6: {
      fontFamily: 'La Belle Aurore, cursive',
      fontWeight: 500,
      fontSize: '1.25rem',
      lineHeight: 1.6,
      letterSpacing: '0.0075em',
    },
    subtitle1: {
      fontWeight: 400,
      fontSize: '2rem',
      lineHeight: 1.75,
      letterSpacing: '0.00938em',
    },
    subtitle2: {
      fontWeight: 500,
      fontSize: '1rem',
      lineHeight: 1.57,
      letterSpacing: '0.00714em',
    },
    body1: {
      fontWeight: 400,
      fontSize: '1rem',
      lineHeight: 1.5,
      letterSpacing: '0.00938em',
    },
    body2: {
      fontWeight: 400,
      fontSize: '0.875rem',
      lineHeight: 1.43,
      letterSpacing: '0.01071em',
    },
    button: {
      fontWeight: 500,
      fontSize: '0.875rem',
      lineHeight: 1.75,
      letterSpacing: '0.02857em',
      textTransform: 'uppercase',
    },
    caption: {
      fontWeight: 400,
      fontSize: '0.75rem',
      lineHeight: 1.43,
      letterSpacing: '0.03333em',
    },
    overline: {
      fontWeight: 400,
      fontSize: '0.75rem',
      lineHeight: 2.66,
      letterSpacing: '0.08333em',
      textTransform: 'uppercase',
    },
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: 'contained' },
          style: {
            color: '#f5ebe0',
            borderRadius: 5,
          },
        },
        {
          props: { variant: 'outlined' || 'text' },
          style: {
            borderRadius: 5,
          },
        },
      ],
    },
  },
});

export default theme;
