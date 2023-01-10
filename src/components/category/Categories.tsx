import { Box, Container, Grid, Pagination, TablePagination } from '@mui/material'
import React, { useEffect, useState } from 'react'

import { useAppDispatch, useAppSelector } from '../../hooks/reduxHook'
import CategoryCard from './CategoryCard';
import { getAllCategories } from '../../redux/methods/categoryMethod';
import Loading from '../loading/Loading';

const Categories = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(0);
   const [rowsPerPage, setRowsPerPage] = useState(3);
  const categories = useAppSelector(state => state.categoryReducer)
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
                < Grid key={category.id}>
              <CategoryCard
                image={category.image}
                name={category.name}
                id={category.id}            
              />
            </Grid>
          ))}
          </Grid>
          )
          }
      </Box>
       <TablePagination
          rowsPerPageOptions={[3, 10, 20, 50, 100]}
          component="div"
          count={categories.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Container>
  )
}

export default Categories