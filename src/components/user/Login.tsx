import React, { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import {yupResolver} from "@hookform/resolvers/yup"
import {
TextField,
Box,
Button,
CssBaseline,
Typography, 
Container,
} from '@mui/material';

import { SignUpSchema } from '../../formvalidation/signUpSchema';
import { Authentications } from '../../types/user';
import { Link } from 'react-router-dom';


const Login = () => {
  const { handleSubmit, register, formState: { errors } } = useForm<Authentications>({
    resolver: yupResolver(SignUpSchema)
  })
  const onsubmit: SubmitHandler<Authentications> = data => {
    console.log(data)
  }
  const redirectInUrl = new URLSearchParams().get("redirect");
  const redirect = redirectInUrl ? redirectInUrl : "/signup";
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        component="form"
        onSubmit={handleSubmit(onsubmit)} 
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
           {...register("email")}
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
        <Typography component="div" variant="body2" color="red">{errors.email?.message}</Typography>
        <Typography component="span" variant="body2" >Password:</Typography>
        <TextField
          variant="outlined"
          InputLabelProps={{  style: { fontSize: 30 }, shrink: true }}
           {...register("password")}
          fullWidth
          margin="normal"
          type="password"
          autoComplete="password"
          sx={{
            "& label.Mui-focused": {
              display: "none",
            },
            "& legend": {
              display: "none",
            }
          }}
        />
        <Typography component="div" variant="body2" color="red">{errors.password?.message}</Typography>
        <Button 
          type="submit"
           variant="outlined"
          sx={{
            width: "250px",
            marginLeft: "25px",
            height: "60px",
            textTransform: "none",
            color: "gray",
            borderRadius: "5px",
            borderColor: "gray",
            fontSize:"25px",
            marginTop:"20px",
            "&: hover": {
              backgroundColor: "#162639",
              color: "#ffFFFf",
              borderColor: "gray",
  
            },
        }}
        >Login</Button>
        <Box marginTop={3}>
          Not yet register?{" "}
            <Link to={`/signup?redirect=${redirect}`}>Register</Link>
        </Box>
      </Box>
    </Container>
  )
}

export default Login