import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import { GoLocation } from 'react-icons/go';
import { AiOutlineFacebook } from 'react-icons/ai';
import { AiFillTwitterSquare } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { Box } from '@mui/system';


const Footer = () => {

    const linkStyle = {
        display: "block",
        textdDcoration: "none",
        color: "whitesmoke",
        marginBottom: "10px"

    }

    return (
        <Box sx={{ background: "#F63E7B" }}>
            <Container sx={{ pt: 10, color: "#fff", pb: 10 }}>
                <Grid container spacing={2}>
                    <Grid item xs={3} >
                        <Typography sx={{ mt: 2 }} variant="body2"> <GoLocation /> H#000 (0th Floor), Road #00,
                            New DOHS, Mohakhali, Dhaka, Bangladesh
                        </Typography>
                    </Grid>
                    <Grid item xs={3}>
                        <Typography variant="h6" sx={{ mb: 2 }}>Company</Typography>
                        <Link style={linkStyle}>About</Link>
                        <Link style={linkStyle}>Project</Link>
                        <Link style={linkStyle}>Our Team</Link>
                        <Link style={linkStyle}>Team Conditions</Link>
                        <Link style={linkStyle}>Submit Listing</Link>
                    </Grid>
                    <Grid item xs={3}>
                        <Typography variant="h6" sx={{ mb: 2 }}>Quick Links</Typography>
                        <Link style={linkStyle}>Quick Links</Link>
                        <Link style={linkStyle}>Rentals</Link>
                        <Link style={linkStyle}>Sales</Link>
                        <Link style={linkStyle}>Contact</Link>
                        <Link style={linkStyle}>Our Blog</Link>
                    </Grid>
                    <Grid item xs={3}>
                        <Typography variant="h6" sx={{ mb: 2 }}>About us</Typography>
                        <Typography sx={{ mb: 2 }} variant="body2">Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit. Purus commodo ipsum
                            duis laoreet maecenas. Feugiat </Typography>
                        <Box sx={{ display: "flex", columnGap: "20px" }}>
                            <Typography variant="h6"> <AiOutlineFacebook /></Typography>
                            <Typography variant="h6">   <AiFillTwitterSquare /></Typography>

                            <Typography variant="h6">   <AiFillLinkedin /></Typography>
                            <Typography variant="h6">     <AiFillInstagram /></Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Footer;