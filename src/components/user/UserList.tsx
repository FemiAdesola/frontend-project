import { Container, CssBaseline, Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'

import { useAppDispatch, useAppSelector } from '../../hooks/reduxHook'
import { getAllUsers } from '../../redux/methods/userMethod'
import Loading from '../loading/Loading'
import UserCard from './UserCard'

const UserList = () => {
    const users = useAppSelector(state => state.userReducer.userList)
    const dispatch = useAppDispatch()
      const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
      dispatch(getAllUsers())
        setIsLoading(false) 
    }, [])
  return (
      <Container maxWidth="xl">
          <CssBaseline />
          {isLoading && <Loading/>}{
        !isLoading && (
          <Grid container pt="50px" justifyContent="center" alignItems="center" spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {Array.isArray(users)
        ? users.map((user) => (
          <Grid key={user.id}>
            <UserCard
                email={user.email}
                name={user.name}
                role={user.role}
                avatar={user.avatar} id={0}
                confirm_password={undefined}
                  password={''} />
          </Grid>
        )):null}
      </Grid>
        )
      }
    </Container>
  )
}

export default UserList