import React from 'react';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';
import red from '@material-ui/core/colors/red';

const theme = createMuiTheme({
  palette: {
    primary: grey,
    secondary: red,
  },
  typography: {
    useNextVariants: true, // 下版本需要，否则警告
  },
});

export default function Theme(props) {
  return(
    <MuiThemeProvider theme={theme}>
      {props.children}
    </MuiThemeProvider>
  )
}
