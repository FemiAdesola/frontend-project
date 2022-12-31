import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import {
  TextField,
  Box,
  Button,
  CssBaseline,
  Typography, 
  Container,
} from '@mui/material';

const SignUp = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [displayName, setDisplayName] = useState('')
  const [thumbnail, setThumbnail] = useState(null)
  const [thumbnailError, setThumbnailError] = useState(null)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // signup(email, password, displayName, thumbnail)
    // console.log(email, password, displayName, thumbnail)
  }

  // handle file
  const handleFileChange = (e: React.FormEvent<HTMLFormElement>) => {
    setThumbnail(null)
    // let selected = e.target.files[0]
    // console.log(selected)
    // if (!selected) {
    //   setThumbnailError('Please select a file')
    //   return
    // }
    // if (!selected.type.includes('image')) {
    //   setThumbnailError('Selected file must be an image')
    //   return
    // }
    // if (selected.size > 100000) {
    //   setThumbnailError('Image file size must be less than 100kb')
    //   return
    // }
    setThumbnailError(null)
    // setThumbnail(selected)
    console.log('thumbnail updated')
  }
  const redirectInUrl = new URLSearchParams().get("redirect");
  const redirect = redirectInUrl ? redirectInUrl : "/login";

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
        <Box
          component="form" onSubmit={handleSubmit} 
          sx={{ 
            maxWidth: "560px",
            margin: "60px auto",
            padding: "40px",
            border: "1px solid #ddd",
            boxShadow: "3px 3px 5px rgba(0,0,0,0.05)",
            alignItems: 'center' ,
          }}
        >
          <Typography component="h2" variant="h2" marginBottom={3}>
          Sign up
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
          <Typography component="span" variant="body2" >Your name</Typography>
          <TextField
            variant="outlined"
            InputLabelProps={{  style: { fontSize: 30 }, shrink: true }}
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            fullWidth
            margin="normal"
            type="text" 
            sx={{
              "& label.Mui-focused": {
                display: "none",
              },
              "& legend": {
                display: "none",
              }
            }}
          />
          <Typography component="span" variant="body2" >Role</Typography>
          <TextField
            variant="outlined"
            InputLabelProps={{  style: { fontSize: 30 }, shrink: true }}
            value={thumbnail}
            onChange={(e) => setDisplayName(e.target.value)}
            fullWidth
            margin="normal"
            type="text" 
            sx={{
              "& label.Mui-focused": {
                display: "none",
              },
              "& legend": {
                display: "none",
              }
            }}
          />
        {/* {!ispending && */}
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
          >Sign up
          </Button>
         {/* }
         {ispending && */}
          {/* <Button 
          type="submit"
          sx={{
            width: "250px",
            marginLeft: "25px",
            height: "60px",
            textTransform: "none",
            backgroundColor: "#D66434",
            borderRadius: "5px",
            color: "white",
            fontSize:"25px",
            marginTop:"20px",
            "&: hover": {
              backgroundColor: "#162639",
              color: "#ffFFFf"
  
            },
          }}
          
          disabled>Loading</Button> */}
        {/* }
        {error && <Box className='error'>{error}</Box>}  */}
        <Box marginTop={3}>
            Already have an account?{" "}
            <Link to={`/login?redirect=${redirect}`}>Login</Link>
        </Box>
      </Box>
    </Container>
  )
}

export default SignUp