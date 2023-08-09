import React from 'react'
import TextField from '@mui/material/TextField';
import { Box, Button } from '@mui/material';
import { useState } from 'react';

export default function IoforDetection() {

    const [tweetText, settweetText] = useState('')
    console.log(tweetText)

    return (
        <Box sx={{width:'100%',display:'flex',justifyContent:'center',flexDirection:'column'}}>
            <TextField sx={{width:'80%',margin:'auto'}} onChange={(e)=>{settweetText(e.target.value)}} id="outlined-basic" label="Write a Tweet" variant="outlined" />
            <Button sx={{backgroundColor:'green'}}>Classify</Button>
        </Box>
    )
}
