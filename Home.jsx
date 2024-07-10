import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const Home = () => {
  var[Name,setName]=useState();
  const changeName=()=>{
    setName("Home");
    
  };
  const changeGallery=()=>{
    setName("Gallery");
  };
  const changeContact=()=>{
    setName("Contact");
  };
  return (
    <div style={{textAlign:'center',marginTop:'5%'}}>
    <Typography variant='h3'>Welcome {Name}</Typography>
    <br /><br /><br />
    <Button variant="contained" color="secondary" onClick={changeName}>Home</Button>&nbsp;&nbsp;
    <Button variant="contained" color="secondary"  onClick={changeGallery}>Gallery</Button>&nbsp;&nbsp;
    <Button variant="contained" color="secondary"  onClick={changeContact}>Contact</Button>
      
    </div>
  )
}

export default Home
