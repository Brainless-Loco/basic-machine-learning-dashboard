"use client"

import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Typography } from '@mui/material';
import './IoForDetection.css'
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import CircularProgress from '@mui/material/CircularProgress';
import axios from 'axios';

export default function IoforDetection() {

    const [tweetText, settweetText] = useState('')
    const [loading, setloading] = useState(false)
    const [modalVisible, setmodalVisible] = useState(false)
    const [harmFulText, setharmFulText] = useState(false)


    const pasteOnCLik = ()=>{
        console.log("clicked")
        navigator.clipboard.readText().then((clipText) => settweetText(clipText));
    }

    

    const classifyTheTweet = ()=>{
        setloading(true)
        setmodalVisible(true)

        const data = {
            tweet_text: tweetText // Replace with the actual tweet text
        }
        const flaskAPIEndpoint = `http://192.168.0.108:5000/`; ///Replace everytime for evert local run

        axios.post(flaskAPIEndpoint, data)
        .then(response => {
          // Handle the response data
          console.log(response.data.response[2]);
          response.data.response[2] == '0'?setharmFulText(false):setharmFulText(true);
          setloading(false)
        })
        .catch(error => {
          // Handle any errors that occur during the request
          console.error(error);
        });
        
      }


    return (
        <Box sx={{width:'100%',display:'flex',justifyContent:'center',flexDirection:'column'}}>
            <Box sx={{width:'80%',margin:'auto',display:'flex',justifyContent:'center',overflow:'hidden',height:'50vh',alignItems:'center'}}>
                <TextField value={tweetText} sx={{width:'100%',borderRadius:'100px'}} rows={10} multiline={true} onChange={(e)=>{settweetText(e.target.value)}} id="outlined-basic" label="Write a Tweet to classify" variant="outlined" />
            </Box>
            
            <Button onClick={classifyTheTweet} className='classifyBtn' sx={{backgroundColor:'green', width:'50%',margin:'auto',marginTop:'10px',color:'white'}}>Classify</Button>

            <Dialog
                open={modalVisible}
                onClose={()=>{setmodalVisible(false)}}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                fullWidth={'xl'}
            >
                {
                    loading?
                    <DialogContent sx={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                        <Box sx={{width:'100%',textAlign:'center'}}>
                            <CircularProgress size={70} sx={{color:'#1d274f',width:'100%',}}/>

                        </Box>
                        <Box sx={{width:'100%',textAlign:'center',marginTop:'10px'}}>
                            <Typography sx={{color:'#1d274f',fontWeight:'bold'}}>
                                Classifying
                            </Typography>
                        </Box>
                    </DialogContent>
                    :
                    <>
                        <DialogTitle sx={{color:'#1d274f',fontWeight:'600'}} id="alert-dialog-title">
                                {"Classification Result"}
                        </DialogTitle>
                        <DialogContent>
                            <DialogContentText id="alert-dialog-description" sx={{fontSize:'25px',color:'grey'}}>
                                This Tweet is a
                                {!harmFulText?
                                    <Typography sx={{color:'green',fontWeight:'bold',display:'inline-block',fontSize:'25px'}}>&nbsp;Not Harmful&nbsp;</Typography>
                                    :
                                    <Typography sx={{color:'red',fontWeight:'bold',display:'inline-block',fontSize:'25px'}}>&nbsp;Harmful&nbsp;</Typography>
                                }
                                tweet
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button sx={{fontWeight:'bold'}} onClick={()=>{setmodalVisible(false)}}>Close</Button>
                        </DialogActions>
                    </>

                }
                
                
               
            </Dialog>
        </Box>
    )
}
