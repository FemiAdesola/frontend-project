import React, { useState } from 'react'
import {
TextField,
Box,
Button,
CssBaseline,
Typography, 
Container,
} from '@mui/material';

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(email, password)
  }
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        component="form"
        onSubmit={handleSubmit} 
        sx={{ 
        maxWidth: "560px",
        margin: "60px auto",
        padding: "40px",
        border: "1px solid #ddd",
        boxShadow: "3px 3px 5px rgba(0,0,0,0.05)",
        alignItems: 'center' ,
        
      }}>
        <Typography component="h2" variant="h2" marginBottom={3}>
           Login
        </Typography>
        <Typography component="span" variant="body2" >Email:</Typography>
        <TextField
          variant="outlined"
          InputLabelProps={{  style: { fontSize: 30 }, shrink: true }}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
          margin="normal"
          type="email" 
          sx={{
            "& label.Mui-focused": {
              display: "none",
            },
            "& legend": {
              display: "none",
            }
          }}
        />
        <Typography component="span" variant="body2" >Password:</Typography>
        <TextField
          variant="outlined"
          InputLabelProps={{  style: { fontSize: 30 }, shrink: true }}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
          margin="normal"
          type="password" 
          sx={{
            "& label.Mui-focused": {
              display: "none",
            },
            "& legend": {
              display: "none",
            }
          }}
        />
        <Button 
          type="submit"
          sx={{
            width: "250px",
            marginLeft: "25px",
            height: "60px",
            textTransform: "none",
            backgroundColor: "gray",
            borderRadius: "5px",
            color: "white",
            fontSize:"25px",
            marginTop:"20px",
            "&: hover": {
              backgroundColor: "#162639",
              color: "#ffFFFf"
  
            },
        }}
        >Login</Button>
      </Box>
    </Container>
  )
}

export default Login