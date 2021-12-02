import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import banner from '../../../Image/Image/aboutBanner.png';

const AboutUs = () => {
    return (
        <Box sx={{ backgroundColor: "#FFF8F5", pt: 15, pb: 14 }}>
            <Container >

            <Grid container sx={{ alignItems: "center" }} spacing={22}>

            <Grid item xs={12} md={6}>
            <img width="580" height="381" src={banner} alt="aboutBanner" />
            </Grid>

            <Grid item xs={12} md={6}>

            <Typography variant="h3" sx={{ fontWeight: 600, fontSize: "34px", mb: 4 }}>Let us handle your screen <span style={{ color: "#F63E7B" }}>Professionally</span>.</Typography>
                        <Typography  variant="body">With well writte codes, we build amazing apps for all platforms, mobile and web apps in general ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum</Typography>
            <Box sx={{
            display: "flex",mt: 5}} >            
               <Box> 
                <Typography variant="h3" sx={{ color: "#F63E7B", fontWeight: 'bold', fontSize: "42px" }} >500+</Typography>
                <Typography variant="body2" sx={{ fontWeight: 'bold' }} >Happy Customer</Typography>
            </Box>
            
            
            <Box sx={{ml:15}}>
                <Typography variant="h3" sx={{ color: "#F63E7B", fontWeight: 'bold', fontSize: "42px" }} >4+</Typography>
                <Typography variant="body2" sx={{ fontWeight: 'bold' }} >Total Service</Typography>
            </Box>
            
        </Box>    

             


             </Grid>
            
     
         


  
                     </Grid>
            </Container>
         </Box >                    
    )                      
} 

export default AboutUs;