import React from 'react'
import { Outlet } from "react-router-dom"
import { ThemeProvider } from "@mui/material/styles";

import Footer from '../components/Footer'
import Header from '../components/Header'
import { useAppSelector } from '../hooks/reduxHook';
import { darkTheme, lightTheme } from '../redux/methods/darkLightMethod';
import { Box } from '@mui/material';

const Root = () => {
  const theme = useAppSelector(state=>state.darkLightReducer)
  return (
    <ThemeProvider theme={theme.lightTheme  ?  lightTheme: darkTheme}>
      <Box>
        <Header />
        <Outlet />
        <Footer/>
      </Box>
    </ThemeProvider>
  )
}

export default Root
