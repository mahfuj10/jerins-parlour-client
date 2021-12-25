import { Button, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect } from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";
import girlImage from '../../../../Image/Image/headerBannerImage.png';

const Header = () => {

    // data aos
    useEffect(() => {
        AOS.init({
            duration: 2000,
        });
    }, []);

    const headerStyle = {
        background: '#FFF8F5',
        width: "100vw",
        height: "100vh"
    };




    return (
        <Box className="header" sx={headerStyle}>
            <Container className="header-container" sx={{ pt: 20 }}>
                <Grid container sx={{ alignItems: "center" }} spacing={17}>
                    <Grid item xs={12} md={6}>
                        <Typography data-aos="fade-up" className="header-title" variant="h3" sx={{ fontWeight: 'bold', fontSize: "48px", mb: 2 }}>
                            BEAUTY SALON <br />
                            FOR EVERY WOMEN
                        </Typography>
                        {/* width: '370px', */}
                        <Typography variant="body2" sx={{ fontSize: "16px", mb: 3 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. </Typography>

                        <Button variant="contained" sx={{ backgroundColor: "#F73E7B", borderRadius: '5px', py: 1 }}>Get An Appoinment</Button>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Box className="image-container">
                            <img width='484px' height='478px' src={girlImage} alt="headerBannerImage" />
                        </Box>
                    </Grid>

                </Grid>
            </Container>
        </Box>
    );
};

export default Header;