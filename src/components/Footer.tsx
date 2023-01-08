import React from 'react'
import { Link } from 'react-router-dom'
import { Box, Container, Paper, Typography } from '@mui/material'

const Footer = () => {
  return (
   <Paper sx={{marginTop: 'calc(30% - 200px)',
    width: '100%',
    position: 'relative',
    bottom: 0,
    backgroundColor: "gray",
    }}  variant="outlined">
      <Container maxWidth="xl">
        <Box
          justifyContent="center" alignItems="center"
          margin={2}
          gap={3}
            sx={{
              mb: 2,
              display: "flex",
              flexGrow: 1, 
            }}
          >
            <Typography
              variant="body2"
              component={Link} to=""
              sx={{
                textDecoration: 'none',
                color: (theme) => theme.palette.common.white,
              }}
              align="center"
              gutterBottom
            >
            eCommerce website
          </Typography>
          <Typography variant="caption"  component={Link} to="products" sx={{color: (theme) => theme.palette.common.white,textDecoration: 'none',}}>
              Check our products
          </Typography>
           <Typography variant="caption"  component={Link} to="login" sx={{color: (theme) => theme.palette.common.white,textDecoration: 'none',}}>
              sign in
            </Typography>
            <Typography variant="caption" sx={{color: (theme) => theme.palette.common.white,}}>
              Copyright ©2023.
          </Typography>
          </Box>
      </Container>
    </Paper>
  )
}

export default Footer