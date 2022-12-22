import React, { useEffect } from 'react'
import Grid from '@mui/material/Grid';
import { Button, Container, Stack } from '@mui/material';

import { useAppDispatch, useAppSelector } from '../../hooks/reduxHook';
import { getAllProducts, sortByName } from '../../redux/reducers/productReducer';
import ProductCard from './ProductCard';

const Products = () => {
  const products = useAppSelector (state => state.productReducer)
  const dispatch = useAppDispatch()
  const sortName = () => {
    dispatch(sortByName("asc"))
  }
  // const sortDesc = () => {
  //   dispatch(sortByName("desc"))
  // }
  useEffect (() => {
    dispatch (getAllProducts())
    }, [])

  return (
    <Container maxWidth="xl">
      <Stack justifyContent="center" direction="row" alignItems="center" spacing={2}>
        <Button onClick={() => { sortName()}} variant="contained" component="label">Sort by Name</Button>
         <Button variant="contained" component="label">Sort by description</Button>
       </Stack>
      <Grid container pt="50px" justifyContent="center" alignItems="center" spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            images={product.images}
            title={product.title}
            price={product.price}

            // category={product.category.name}
            description={product.description}
            id={1}     
          />
        ))}
      </Grid>
    </Container>
  )
}

export default Products