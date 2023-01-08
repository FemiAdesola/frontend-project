import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { CssBaseline, Grid } from '@mui/material';
import { Container } from '@mui/system';

import Categories from '../components/category/Categories';
import HomeCarousel from '../components/features/HomeCarousel';


const Home = () => {
  return (
  <Container>
    <CssBaseline />
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
          <HomeCarousel/>
        <Categories id={0} name={''} image={''}/>
      </Grid>
    </Box>
  </Container>
  )
}

export default Home