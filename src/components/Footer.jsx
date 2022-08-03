import React from 'react';
import { Box, Typography } from '@mui/material';
export const Footer = () => {
  return (
    <>
        <Box sx={{background: '#121212', borderColor: 'white', margin: 0, height: '8vh', position: 'relative', bottom: '0', width: '100%'}}>
            <Typography sx={{textAlign: 'center', alignContent: 'center', paddingTop:2, color: 'whitesmoke'}}> Final Project - News Site - Regy
            </Typography>
        </Box>
    </>
  )
}

