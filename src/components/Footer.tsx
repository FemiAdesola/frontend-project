import React from 'react'
import { Link } from 'react-router-dom'
import { Box, Container, Paper, Typography } from '@mui/material'

const Footer = () => {
  return (
   <Paper sx={{marginTop: 'calc(50% - 200px)',
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
              Home
            </Typography>
            <Typography variant="caption" sx={{color: (theme) => theme.palette.common.white,}}>
              Copyright ©2022.
            </Typography>
          </Box>
      </Container>
    </Paper>
  )
}

export default Footer