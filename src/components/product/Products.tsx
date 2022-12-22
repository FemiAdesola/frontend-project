import React, { useEffect } from 'react'

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';

import { useAppDispatch, useAppSelector } from '../../hooks/reduxHook';
import { getAllProducts, sortByName } from '../../redux/reducers/productReducer';
import ProductCard from './ProductCard';

const Products = () => {
  const products = useAppSelector (state => state.productReducer)
  const dispatch = useAppDispatch()
  const sortName = () => {
    dispatch(sortByName("asc"))
  }
  useEffect (() => {
    dispatch (getAllProducts())
    }, [])

  return (
    <Container  maxWidth="xl">
      <Grid container justifyContent="center" alignItems="center" spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            images={product.images}
            title={product.title}
            price={product.price}

            // category={product.category.name}
            description={product.description}
            id={1}     // <div key={product.id}>
        //   <h2></h2>
        //   <p></p>
        //   <p></p>
        //   <p>{</p>
        //   {/* <p>{product.images[0]}</p> */}
        // </div>

          />
        ))}
      </Grid>
    </Container>
  )
}

export default Products