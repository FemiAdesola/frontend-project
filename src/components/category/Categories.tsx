import { Box, Container, Grid, Pagination } from '@mui/material'
import React, { useEffect, useState } from 'react'

import { useAppDispatch, useAppSelector } from '../../hooks/reduxHook'
import { CategoryType } from '../../types/category'
import CategoryCard from './CategoryCard';
import { getAllCategories } from '../../redux/methods/categoryMethod';
import Loading from '../loading/Loading';

const Categories = ({ name, id, image }: CategoryType) => {
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  let rowsPerPage = 12;
  const categories = useAppSelector(state => state.categoryReducer)
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };
  const count = Math.ceil(categories.length / rowsPerPage);
    const dispatch = useAppDispatch()
    useEffect (() => {
      dispatch(getAllCategories())
      setIsLoading(false) 
    }, [])
  return (
      <Container maxWidth="xl">
        <Box sx={{ flexGrow: 1 }}>
        {isLoading && <Loading />}{
          !isLoading && (
            <Grid container pt="50px" justifyContent="center" alignItems="center" spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {categories.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((category) => (
            <CategoryCard
            key={category.id}
            image={category.image}
            name={category.name}
            id={category.id}            
          />
          ))}
          </Grid>
          )
          }
      </Box>
      <Pagination
        count={count}
        page={page}
        onChange={handleChange} variant="outlined"        
        shape="rounded"        
        color="standard"
        sx={{ ml: 3 , mt:3}}
      />
    </Container>
  )
}

export default Categories