import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
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