import React from 'react'
import Box from '@mui/material/Box';
import  Typography  from '@mui/material/Typography';
import Link from 'next/link';
import { Button } from '@mui/material';
import './Menubar.css'


export default function Menubar(props) {
  const {model_summary} = props;

  return (
    <Box sx={{width:"100%",backgroundColor:'#1d274f',padding:'15px',height:"50px",color:'white',display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:'20px',gap:'1%'}}>
      <Box sx={{width:'32%',height:'100%'}}>

      </Box>
      <Box sx={{width:'33%',height:'100%',display:'flex',alignItems:'center',justifyContent:'center'}}>
          <Typography variant="h5" sx={{fontWeight:'bold',fontFamily:'monospace'}} gutterBottom>
              {"Harmful Tweet Detection"}
          </Typography>
      </Box>
      <Box sx={{width:'33%',height:'100%',display:'flex',alignItems:'center',justifyContent:'flex-end',paddingX:'10px'}}>
        {
          model_summary? 
          <Link  href='/model-summary'> 
            <Button className='ModelSummaryBtn'  sx={{padding:'10px'}}>
              Model Summary
            </Button>
          </Link>:
          <Link  href='/'> 
            <Button className='ModelSummaryBtn'  sx={{padding:'10px 30px'}}>
              Home
            </Button>
          </Link>
        }
        

      </Box>
        
    </Box>
  )
}
