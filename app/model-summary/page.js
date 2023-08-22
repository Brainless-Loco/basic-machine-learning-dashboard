import React from 'react'
import './summary.css'
import HTMLHEAD from '@/components/HTMLHEAD/HTMLHEAD'
import Menubar from '@/components/Header/Menubar'
import { Box, Typography } from '@mui/material'
import Image from 'next/image'

export default function page() {
  return (
    <html>
      <HTMLHEAD title ='Model Summary'/>
      <body className='body'>
        <Menubar model_summary={false}/>
        <Box sx={{display:'flex',justifyContent:'space-evenly',flexWrap:'wrap',gap:'20px'}}>
            <Box sx={{minHeight:'200px',minWidth:'40%',maxHeight:'400px',maxWidth:'45%',overflow:'hidden', border:'1px solid gray',borderRadius:'10px',overflow:'hidden'}}>
                <Box sx={{width:'100%',backgroundColor:'white',padding:'5px 10px',borderBottom:'1px solid gray'}}>
                    <Typography variant="h6" sx={{fontWeight:'700',fontFamily:'monospace'}} color={'#1d274f'}  gutterBottom>
                      Roc Curve
                    </Typography>
                </Box>
                <Box sx={{display:'flex',justifyContent:'center'}}>
                    <Image
                      src="/assets/conmat.png"
                      alt="Roc Curver"
                      width={400}
                      height={250}
                      objectFit='contain'
                      quality={100}
                      style={{border:'1px solid gray'}}
                     />
                </Box>
            </Box>
            <Box sx={{minHeight:'200px',minWidth:'40%',maxHeight:'400px',maxWidth:'45%',overflow:'hidden', border:'1px solid gray',borderRadius:'10px',overflow:'hidden'}}>
                <Box sx={{width:'100%',backgroundColor:'white',padding:'5px 10px',borderBottom:'1px solid gray'}}>
                    <Typography variant="h6" sx={{fontWeight:'700',fontFamily:'monospace'}} color={'#1d274f'} gutterBottom>
                      Roc Curve
                    </Typography>
                </Box>
                <Box sx={{display:'flex',justifyContent:'center'}}>
                    <Image
                      src="/assets/conmat.png"
                      alt="Roc Curver"
                      width={400}
                      height={250}
                      objectFit='contain'
                      quality={100}
                      style={{border:'1px solid gray'}}
                     />
                </Box>
            </Box>
            <Box sx={{minHeight:'200px',minWidth:'40%',maxHeight:'400px',maxWidth:'45%',overflow:'hidden', border:'1px solid gray',borderRadius:'10px',overflow:'hidden'}}>
                <Box sx={{width:'100%',backgroundColor:'white',padding:'5px 10px',borderBottom:'1px solid gray'}}>
                    <Typography variant="h6" sx={{fontWeight:'700',fontFamily:'monospace'}} gutterBottom>
                      Roc Curve
                    </Typography>
                </Box>
                <Box sx={{display:'flex',justifyContent:'center'}}>
                    <Image
                      src="/assets/conmat.png"
                      alt="Roc Curver"
                      width={400}
                      height={250}
                      objectFit='contain'
                      quality={100}
                      style={{border:'1px solid gray'}}
                     />
                </Box>
            </Box>
        </Box>

      </body>
    </html>
  )
}
