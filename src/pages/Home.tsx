import React from 'react'
import Products from '../components/product/Products'
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { Grid } from '@mui/material';
import Categories from '../components/category/Categories';


const Home = () => {
  
  return (
    <Box>
      <Typography
        textAlign="center"
        variant="h5" component="div"
      >These are the categories of product we have in our store
      </Typography>
      <Grid container pt="20px"
        justifyContent="center"
        alignItems="center"
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        <Categories id={0} name={''} image={''}/>
      </Grid>
  </Box>
  )
}

export default Home