import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const First = () => {
  return (
    <div>
      <h1>Login Page</h1>
      <input placeholder="username" />
      <br /><br />
      <input type="password" placeholder="password" />
      <br /><br />
      <button>LOGIN</button>
      <br /><br /><br /><br />
      <Typography variant='h1'>Login Page</Typography>
      <TextField variant='outlined' label='username'/>
      {/* <TextField variant='standard' label='username'/>
      <TextField variant='filled' label='username'/> */}
      <br /><br />
      {/* <Button variant="text" color="error">Login</Button> */}
      <Button variant="contained" color="secondary">Login</Button>
      {/* <Button variant="outlined" color="success">Login</Button> */}
    </div>
  )
}

export default First
