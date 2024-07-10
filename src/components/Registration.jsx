import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Registration = () => {
  return (
    <div>
      <Typography variant='h3'>Registration Form</Typography>
      <br /><br /><br />
      <TextField variant='outlined' label="name"/>
      <br />
      <TextField variant='outlined' label="age"/>
      <br />
      <TextField variant='outlined' label="Place"/>
      <br />
      <TextField variant='outlined' label="Department"/>
      <br />
      <TextField variant='outlined' label="Email"/>
      <br />
      <TextField variant='outlined' label="Phone Number :"/>
      <br /><br /><br />
      <Button variant="contained" color="secondary">NEXT</Button>


    </div>
  )
}

export default Registration
