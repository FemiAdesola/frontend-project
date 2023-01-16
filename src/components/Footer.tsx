import React from 'react'

import { Box, Link, Container, Grid, List, ListItem, Paper, TextField, Typography, Divider, CssBaseline } from '@mui/material'

const Footer = () => {
  return (
    <Paper id='footer' sx={{ marginTop: 'calc(50vh - 10%)',  position: 'relative', width:"100%", bottom:0}}>
      <Paper className='footer-top'>
          <Container>
          <CssBaseline />
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid lg={3} md={6} xs={12} className=' footer-contact'>
              <Typography > Kiltaveljenpolku </Typography>
              <Typography>Espoo</Typography>
              <Typography >Finland    </Typography>
              <Typography > <strong>Phone:</strong> +358123457</Typography>
              <Typography ><strong>Email:</strong> femioyin2003@yahoo.com</Typography>
            </Grid>
            <Grid lg={2} md={6} xs={6} className=' footer-links'>
              <Typography variant='h4'>Useful Links</Typography>
              <List>
                <ListItem>
                  <Link href="#" underline="none">Home</Link>
                </ListItem>
                <ListItem>
                  <Link href="/products" underline="none">Our products</Link>
                </ListItem>
                <ListItem>
                  <Link href="#" underline="none">Services</Link>
                </ListItem>
                <ListItem>
                  <Link href="#" underline="none">Terms of service</Link>
                </ListItem>
                <ListItem>
                <Link href="#" underline="none">Privacy policy</Link>
                </ListItem>
              </List>
            </Grid>
            <Grid lg={3} md={6} xs={6} className='footer-links'>
             <Typography variant='h4'>Our Services</Typography>
              <List>
                <ListItem>
                 <Link href="#" underline="none">Web Design</Link>
                </ListItem>
                <ListItem>
                 <Link href="#" underline="none">Web Development</Link>
                </ListItem>
                <ListItem>
                 <Link href="#" underline="none">Product Management</Link>
                </ListItem>
                <ListItem>
                 <Link href="#" underline="none">Marketing</Link>
                </ListItem>
              </List>
            </Grid>
            <Grid lg={4} md={6} className='footer-newsletter'>
              <Typography variant='h4'>Join Our Newsletter</Typography>
              <Typography>
               Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error quod molestias sit sint repellat rerum id,
             </Typography>
               <Box
                component="form">
                <TextField
                  required
                  fullWidth
                  id="email"
                  placeholder='email@domain.com'
                  label="Email Address"
                  autoComplete="email"
                  name='email'
                  type='email'
                  
                  sx={{height:"30px", textAlign:"center"}}
              />
                <input type='submit' defaultValue='Subscribe' />
             </Box>
            </Grid>
            <Grid lg={4} md={6} className='footer-newsletter'>
              <Typography>
                <Link sx={{ m:1}} href="https://www.linkedin.com/in/femi-adesola-oyinloye-106454145/" target="_blank" rel="noreferrer" className="linkedin">
                  <i className="fab fa-linkedin fa-2x"></i>
                </Link>
                <Link sx={{ m:1}} href="#1" className="facebook">
                  <i className="fab fa-facebook fa-2x"></i>
                </Link>
                <Link sx={{ m:1}} href="https://github.com/FemiAdesola" target="_blank" rel="noreferrer" className="github">
                   <i className="fab fa-github fa-2x"></i>
                </Link>
                <p>Femi Adesola &copy; {new Date().getFullYear()}</p>
               </Typography>
             </Grid>
          </Grid>   
        </Container>
      </Paper>
    </Paper>
  )
}

export default Footer