import { Box, Container, Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHook'
import { CategoryType } from '../../types/category'
import CategoryCard from './CategoryCard';
import { getAllCategories } from '../../redux/methods/categoryMethod';
import Loading from '../loading/Loading';

const Categories = ({ name, id, image }: CategoryType) => {
  const [isLoading, setIsLoading] = useState(true);
    const categories = useAppSelector(state => state.categoryReducer)
    const dispatch = useAppDispatch()
    useEffect (() => {
      dispatch(getAllCategories())
      setIsLoading(false) 
    }, [])
  console.log(categories)
  return (
      <Container maxWidth="lg">
        <Box sx={{ flexGrow: 1 }}>
        {isLoading && <Loading />}{
          !isLoading && (
            <Grid container pt="50px" justifyContent="center" alignItems="center" spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {categories.map((category) => (
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
    </Container>
  )
}

export default Categories