import React, { useEffect, useState } from 'react'
import Grid from '@mui/material/Grid';
import { Box, Button, Container } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

import { useAppDispatch, useAppSelector } from '../../hooks/reduxHook';
import { sortByName, sortByCategory, sortByPrice} from '../../redux/reducers/productReducer';
import { getAllProducts, } from '../../redux/methods/productMethod';
import ProductCard from './ProductCard';
import { SearchIconWrapper, SearchMenu, StyledInputBase } from '../features/SearchInput';


const Products = () => {
  const [search, setSearch]= useState("")
  const products = useAppSelector(state => state.productReducer.filter(item => {
    return item.title.toLowerCase().includes(search.toLowerCase())
  }))
  
  const dispatch = useAppDispatch()

  const sortName = () => {
    dispatch(sortByName("asc"))
  }

  const sortCategory = () => {
    dispatch(sortByCategory("clothes"))
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
          <Button onClick={() => { sortByProductPriceN() }} variant="contained" component="label" sx={{ m: 1 }}>Sort by Price</Button>
          <SearchMenu>
            <SearchIconWrapper>
            <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
                  placeholder="Type your search here..."
                  inputProps={{ 'aria-label': 'search'}}
                  value={search}
                  onChange={e => setSearch(e.target.value)}  
            />
          </SearchMenu>
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
            id={0}            
          />
        ))}
      </Grid>
    </Container>
  )
}

export default Products
