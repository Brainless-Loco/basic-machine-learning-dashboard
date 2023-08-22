"use client"

import { Box, Button, Typography } from '@mui/material'
import Image from 'next/image'
import React, { useState } from 'react'
import './ImageBox.css'

export default function ImageBox({title,height,width,source}) {

    const [openImage, setopenImage] = useState(true)



    return (
        <Box sx={{width:{width},overflow:'hidden', border:'1px solid gray',borderRadius:'10px',overflow:'hidden',height:'100%',marginBottom:'20px'}}>
            <Button className='btnHoverEffect' onClick={()=>{setopenImage(!openImage)}} sx={{width:'100%',backgroundColor:'#1d274f',padding:'5px 15px',borderBottom:'1px solid gray',display:'flex',justifyContent:'flex-start',borderRadius:'0px',textTransform:'none'}}>
                <Typography className='btnHoverText' variant="h6" sx={{fontWeight:'700',fontFamily:'monospace'}} color={'white'}  gutterBottom>
                    {title}
                </Typography>
            </Button>
            <Box sx={[{display:'flex',justifyContent:'center',height:{height},position:'relative',alignItems:'center'},openImage&& {display:'none'}]}>
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
