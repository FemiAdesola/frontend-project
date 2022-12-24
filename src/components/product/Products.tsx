import React, { useEffect } from 'react'
import Grid from '@mui/material/Grid';
import { Box, Button, Container} from '@mui/material';

import { useAppDispatch, useAppSelector } from '../../hooks/reduxHook';
import { sortByName, sortByCategory, sortByPrice} from '../../redux/reducers/productReducer';
import { getAllProducts, } from '../../redux/methods/productMethod';
import ProductCard from './ProductCard';

const Products = () => {
  const products = useAppSelector (state => state.productReducer)
  const dispatch = useAppDispatch()

  const sortName = () => {
    dispatch(sortByName("asc"))
  }

  const sortCategory = () => {
    dispatch(sortByCategory("asc"))
  }

  const sortByProductPriceN= () => {
    dispatch(sortByPrice("asc"))
  }

  useEffect (() => {
    dispatch (getAllProducts())
    }, [])

  return (
    <Container maxWidth="xl">
      <Box  justifyContent="center"  alignItems="center" textAlign="center"  sx={{ '& button': { m: 1 } }}>
        <div>
          <Button onClick={() => { sortName() }} variant="contained" component="label" sx={{ m: 1 }}>Sort by Name</Button>
          <Button onClick={() => { sortCategory() }} variant="contained" component="label" sx={{ m: 1 }}>Sort by Category</Button>
          <Button  onClick={() => { sortByProductPriceN() }} variant="contained" component="label" sx={{ m: 1 }}>Sort by Price</Button>
        </div>
     </Box>
      <Grid container pt="50px" justifyContent="center" alignItems="center" spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            images={product.images}
            title={product.title}
            price={product.price}

            category={product.category}
            description={product.description}
            id={1}     
          />
        ))}
      </Grid>
    </Container>
  )
}

export default Products
