import React, { useEffect, useState } from 'react'
import Grid from '@mui/material/Grid';
import { Box, Button, Container, CssBaseline} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Pagination from '@mui/material/Pagination';

import { useAppDispatch, useAppSelector } from '../../hooks/reduxHook';
import { sortByName, sortByPrice} from '../../redux/reducers/productReducer';
import { getAllProducts, } from '../../redux/methods/productMethod';
import ProductCard from './ProductCard';
import { SearchIconWrapper, SearchMenu, StyledInputBase } from '../features/SearchInput';
import Loading from '../loading/Loading';

const Products = () => {
  const [search, setSearch] = useState("")
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(0);
  let rowsPerPage = 20;
  let products = useAppSelector(state => state.productReducer.filter(item => {
    return item.title.toLowerCase().includes(search.toLowerCase())
  }))

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };
  const count = Math.ceil(products.length / rowsPerPage);

  const [filteredValue, setFilteredValue] = useState("");
  const categories = useAppSelector(state => state.categoryReducer)
  const dispatch = useAppDispatch()
  const sortName = () => {
    dispatch(sortByName("asc"))
  }
  const sortByProductPriceN = () => {
    dispatch(sortByPrice("asc"))
  }
  useEffect(() => {
    dispatch(getAllProducts())
    setIsLoading(false)
  }, [])

  if (filteredValue) {
    products = products.filter((item) => {
      return item.category.name.toLowerCase().includes(filteredValue)
    })
  } else{
  products.map(option=>(option.category.name.toLowerCase().includes(filteredValue)))
  }

  return (
      <Container maxWidth="xl">
      <CssBaseline />
      <Box  justifyContent="center"  alignItems="center" textAlign="center"  sx={{ '& button': { m: 1 } }}>
        <div>
          <Button onClick={() => { sortName() }} variant="contained" component="label" sx={{ m: 1 }}>Sort by Name</Button>
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
          <Button variant="contained" component="label" sx={{ m: 1 }}>Select Category
            <select value={filteredValue} onChange={(e) => setFilteredValue(e.target.value)} >
              {categories.map(option => (
                <option key={option.id}>
                  {option.name.toLowerCase()}
                </option>
              ))}
            </select>
          </Button>
        </div>
      </Box>
      <Pagination
        count={count}
        page={page}
        onChange={handleChange} variant="outlined"        
        shape="rounded"        
        color="standard"
        sx={{ml:3}}
      />
      {isLoading && <Loading/>}{
        !isLoading && (
          <Grid container pt="50px" justifyContent="center" alignItems="center" spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {products.slice(page * rowsPerPage , page * rowsPerPage + rowsPerPage).map((product) => (
          <ProductCard
            key={product.id}
            images={product.images}
            title={product.title}
            price={product.price}
            category={product.category}
            description={product.description}
            id={product.id}
           />
        ))}
      </Grid>
        )
      }
      <Pagination
        count={count}
        page={page}
        onChange={handleChange} 
        variant="outlined"        
        shape="rounded"        
        color="standard"
        sx={{ ml: 3 , mt:3}}
      />
    </Container>
  )
}

export default Products
