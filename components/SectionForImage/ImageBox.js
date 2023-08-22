"use client"

import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

export default function ImageBox({title,height,width,source}) {
    // console.log(title+' '+height+' '+ width+' '+ source)
    // console.log(typeof source)
    return (
        <Box sx={{width:{width},overflow:'hidden', border:'1px solid gray',borderRadius:'10px',overflow:'hidden',height:'100%',marginBottom:'20px'}}>
            <Box sx={{width:'100%',backgroundColor:'#1d274f',padding:'5px 10px',borderBottom:'1px solid gray'}}>
                <Typography variant="h6" sx={{fontWeight:'700',fontFamily:'monospace'}} color={'white'}  gutterBottom>
                    {title}
                </Typography>
            </Box>
            <Box sx={{display:'flex',justifyContent:'center',height:{height},position:'relative',alignItems:'center'}}>
                <Image
                    src={source}
                    alt={source}
                    layout='fill'
                    objectFit='contain'
                    quality={100}
                    style={{borderBottomLeftRadius:'10px',borderBottomRightRadius:'10px'}}
                    />
            </Box>
        </Box>
    )
}
