import React from 'react'
import './summary.css'
import HTMLHEAD from '@/components/HTMLHEAD/HTMLHEAD'
import Menubar from '@/components/Header/Menubar'
import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import ImageBox from '@/components/SectionForImage/ImageBox'

export default function page() {
  return (
    <html>
      <HTMLHEAD title ='Model Summar | Tithi Das'/>
      <body class='body'>
        <Menubar model_summary={false}/>
        <Box sx={{display:'flex',justifyContent:'space-evenly',flexWrap:'wrap',flexDirection:'row'}}>
            <ImageBox title={"Wordcloud"} source={"/assets/wordcloud.png"} height={500} width={520} />
            
            <ImageBox title={"Roberta Update Confusion Matrix"} source={"/assets/robertaupdatecon.png"} height={400} width={600} />
            
            <ImageBox title={"Roberta Roc Curve"} source={"/assets/robertaroc.png"} height={500} width={500} />
            
            <ImageBox title={"Machinelearning Model Roc Curve analysis"} source={"/assets/MachinelearningModelRoc Curve analysis.png"} height={450} width={600} />
            
            <ImageBox title={"Compartive Matrix Analysis"} source={"/assets/compartiveMatrixAnalysis.png"} height={520} width={600} />
            
            <ImageBox title={"Comparison With Related Works"} source={"/assets/Co.png"} height={520} width={500} />
            

            {/* 
              <Box sx={{display:'flex',justifyContent:'center',flexDirection:'row',height:'100%'}}>
                <Box sx={{display:'flex',justifyContent:'center',width:'50%',flexWrap:'wrap',gap:'0px'}}>
                  <ImageBox title={"Wordcloud"} source={"/assets/wordcloud.png"} height={500} width={520} />

                  <ImageBox title={"Roberta Roc Curve"} source={"/assets/robertaroc.png"} height={500} width={500} />
                  <ImageBox title={"Compartive Matrix Analysis"} source={"/assets/compartiveMatrixAnalysis.png"} height={520} width={600} />
                </Box>
                <Box sx={{display:'flex',justifyContent:'center',width:'50%',flexWrap:'wrap',gap:'0px'}}>

                  <ImageBox title={"Roberta Update Confusion Matrix"} source={"/assets/robertaupdatecon.png"} height={400} width={600} />
                  <ImageBox title={"Machinelearning Model Roc Curve analysis"} source={"/assets/MachinelearningModelRoc Curve analysis.png"} height={450} width={600} />
                  <ImageBox title={"Comparison With Related Works"} source={"/assets/Co.png"} height={520} width={500} />
                </Box>
            */}
        </Box>

      </body>
    </html>
  )
}
