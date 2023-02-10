import React from 'react';
import Header from "./header"
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Montserrat'
  },
});

const Layout = ({ children }) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <main>{children}</main>
      </ThemeProvider>
    </>
  )
}

export default Layout;