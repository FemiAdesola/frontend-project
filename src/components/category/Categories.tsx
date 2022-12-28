import { Box, Container, Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHook'
import { Category } from '../../types/category'
import CategoryCard from './CategoryCard';
import { getAllCategories } from '../../redux/methods/categoryMethod';

const Categories = ({ name, id, image }: Category) => {
    const [search, setSearch]= useState("")
    const categories = useAppSelector(state => state.categoryReducer.filter(item => {
    return item.name.toLowerCase().includes(search.toLowerCase())
    }))
    const dispatch = useAppDispatch()
    useEffect (() => {
    dispatch(getAllCategories())
    }, [])

  return (
      <Container maxWidth="lg">
           <Box sx={{ flexGrow: 1 }}>
          <Grid container pt="50px" justifyContent="center" alignItems="center" spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {categories.map((category) => (
          <CategoryCard
            key={category.id}
            image={category.image}
            name={category.name}
            id={0}            
          />
        ))}
              </Grid>
              </Box>
    </Container>
  )
}

export default Categories