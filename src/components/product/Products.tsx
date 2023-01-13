import React, { useEffect, useState, useDeferredValue, useMemo } from 'react'
import Grid from '@mui/material/Grid';
import { Box, Button, Container, CssBaseline, MenuItem, Select, TablePagination} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import debouce from "lodash.debounce";

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
  const [rowsPerPage, setRowsPerPage] = useState(20);
  let products = useAppSelector(state => state.productReducer)
  const handleChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setSearch(e.target.value);
  };
  if (search !== "") {
    products = products.filter(item => {
    return item.title.toLowerCase().includes(search.toLowerCase())
    })
  }
  const debouncedResults = useMemo(() => {
      return debouce(handleChange, 1000);
  }, []);

  useEffect(() => {
      return () => {
        debouncedResults.cancel();
      };
  });
   const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number,
    ) => {
      setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
  };
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
  } 
  return (
      <Container maxWidth="xl">
      <CssBaseline />
      <Box  justifyContent="center"  alignItems="center" textAlign="center"  sx={{ '& button': { m: 1 } }}>
        
          <Button onClick={() => { sortName() }} variant="contained" component="label" sx={{ m: 1 }}>Sort by Name</Button>
          <Button onClick={() => { sortByProductPriceN() }} variant="contained" component="label" sx={{ m: 1 }}>Sort by Price</Button>
          <SearchMenu >
            <SearchIconWrapper>
            <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
                  placeholder="Type your search here..."
                  inputProps={{ 'aria-label': 'search'}}
              onChange={debouncedResults}
            />
          </SearchMenu>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={filteredValue} onChange={(e) => setFilteredValue(e.target.value)}
            label="products"
          >
            {categories.map(option => (
              <MenuItem value={option.name.toLowerCase() } key={option.id}>{option.name.toLowerCase()}</MenuItem>   ))}
          </Select>
      </Box>
      <TablePagination
          rowsPerPageOptions={[5, 10, 20, 50, 100]}
          component="div"
          count={products.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      {isLoading && <Loading/>}{
        !isLoading && (
          <Grid container pt="50px" justifyContent="center" alignItems="center" spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {Array.isArray(products) ? products.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((product) => (
          <Grid  key={product.id}>
            <ProductCard
              images={product.images}
              title={product.title}
              price={product.price}
              category={product.category}
              description={product.description}
              id={product.id}
                />
          </Grid>
        )):null}
      </Grid>
        )
      }
      <TablePagination
          rowsPerPageOptions={[5, 10, 20, 50, 100]}
          component="div"
          count={products.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Container>
  )
}

export default Products
