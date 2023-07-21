import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    background: {
      default: '#1B262C',
    },
    primary: {
      main: '#3282B8',
      contrastText: '#fff',
    },
    secondary: {
      main: '#d1d5db',
      contrastText: '#000',
    },
    info: {
      main: '#4188ef',
      contrastText: '#000',
    },
    success: {
      main: '#7BEC73',
      contrastText: '#000',
    },
    warning: {
      main: '#EFA641',
      contrastText: '#000',
    },
    error: {
      main: '#ef4444',
      contrastText: '#111827',
    },
    text: {
      primary: '#fff',
      secondary: '#94a3b8',
    },
  },
  typography: {
    fontFamily: ['Open Sans'].join(','),
    fontSize: 14.8,
  },
})

export default theme
