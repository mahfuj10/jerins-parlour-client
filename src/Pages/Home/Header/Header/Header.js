import { Button, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import girlImage from '../../../../Image/Image/headerBannerImage.png';

const Header = () => {
    const headerStyle = {
        background: '#FFF8F5',
        width: "100vw",
        height: "100vh"
    }

    return (
        <Box className="header" sx={headerStyle}>
            <Container className="header-container" sx={{ pt: 20 }}>
                <Grid container sx={{ alignItems: "center" }} spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Typography className="header-title" variant="h3" sx={{ fontWeight: 'bold', fontSize: "48px", mb: 2 }}>
                            BEAUTY SALON <br />
                            FOR EVERY WOMEN
                        </Typography>
                        <Typography variant="body2" sx={{ width: '370px', fontSize: "16px", mb: 3 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. </Typography>

                        <Button variant="contained" sx={{ backgroundColor: "#F73E7B", borderRadius: '5px', py: 1 }}>Get An Appoinment</Button>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <img width='484px' height='478px' src={girlImage} alt="headerBannerImage" />
                    </Grid>

                </Grid>
            </Container>
        </Box>
    );
};

export default Header;