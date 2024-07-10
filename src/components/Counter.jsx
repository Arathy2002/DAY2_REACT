import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const Counter = () => {
    var[count,setCount]=useState(0);
    const addValue=()=>{
        console.log("increment value");
        setCount(++count)
    }
    const decValue=()=>{
        console.log("decrement value");
        setCount(--count)
    }
  return (
    <div style={{textAlign:'center',marginTop:'5%'}}>
    <Typography variant='h3'>{count}</Typography>
    <br /><br />
    <Button variant='contained' onClick={addValue}>+</Button>&nbsp;&nbsp;
    <Button variant='contained' onClick={decValue}>-</Button>
      
    </div>
  )
}

export default Counter
