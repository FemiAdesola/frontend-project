import * as React from 'react';
import { Link } from 'react-router-dom'
import { SubmitHandler, useForm } from 'react-hook-form'
import {yupResolver} from "@hookform/resolvers/yup"
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useAppDispatch } from '../../hooks/reduxHook';
import { UserForm } from '../../types/user';
import { SignUpSchema } from '../../formvalidation/signUpSchema';


const SignUp = () =>  {
  const dispatch = useAppDispatch()
  const { handleSubmit, register, formState: { errors } } = useForm<UserForm>({
    resolver: yupResolver(SignUpSchema)
  })
  const onsubmit: SubmitHandler<UserForm> = data => {
    console.log(data)
    // dispatch(createUserWithSignUp(data))
  }
  const redirectInUrl = new URLSearchParams().get("redirect");
  const redirect = redirectInUrl ? redirectInUrl : "/login";  
  return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit(onsubmit)} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                   {...register("name")}
                  required
                  fullWidth
                  id="Name"
                  label="Your Name"
                  autoFocus
              />
              <Typography component="div" variant="body2" color="red">{errors.name?.message}</Typography>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                {...register("email")}
                  autoComplete="email"
              />
              <Typography component="div" variant="body2" color="red">{errors.email?.message}</Typography>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                   {...register("password")}
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
              />
              <Typography component="div" variant="body2" color="red">{errors.password?.message}</Typography>
            </Grid>
            <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                   {...register("confirm_password")}
                  label=" confirm Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
              />
              <Typography component="div" variant="body2" color="red">{errors.confirm_password?.message}</Typography>
              </Grid>
              <Grid item xs={12}>
                <input 
                  type="file"
                  multiple
                  {...register("avatar")}
              />
              <Typography component="div" variant="body2" color="red">{errors.avatar?.message}</Typography>
              </Grid>
            </Grid>
            <Button
            type="submit"
            fullWidth
           variant="outlined"
            sx={{
              height: "60px",
              textTransform: "none",
              borderRadius: "5px",
              color: "gray",
              fontSize: "25px",
              marginTop: "20px",
              borderColor: "gray",
              mt: 3, mb: 2 ,
              "&: hover": {
                backgroundColor: "#162639",
                color: "#ffFFFf",
                borderColor: "gray",

              },
            }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to={`/login?redirect=${redirect}`}>
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
    </Container>
  );
}
export default SignUp