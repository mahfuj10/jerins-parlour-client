import { Container, Grid, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { GoLocation } from 'react-icons/go';
import { AiOutlineFacebook } from 'react-icons/ai';
import { AiFillTwitterSquare } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { Box } from '@mui/system';
import logo from '../../../Image/Group 33092.png';
import AOS from 'aos';


const Footer = () => {

    // data aos
    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);

    // link 
    const linkStyle = {
        display: "block",
        textDecoration: "none",
        color: "whitesmoke",
        marginBottom: "10px"
    };


    return (
        <Box sx={{ background: "#F63E7B" }}>
            <Container sx={{ pt: 10, color: "#fff", pb: 10 }}>
                <Grid container spacing={2}>
                    <Grid item xs={6} lg={3} >
                        <img width="128" src={logo} alt="logo" />
                        <Typography sx={{ mt: 2 }} variant="body2"> <GoLocation /> H#000 (0th Floor), Road #00,
                            New DOHS, Mohakhali, Dhaka, Bangladesh
                        </Typography>
                    </Grid>
                    <Grid item xs={6} sm={3} lg={3}>
                        <Typography variant="h6" sx={{ mb: 2 }}>Company</Typography>
                        <Link to="/" style={linkStyle}>About</Link>
                        <Link to="/" style={linkStyle}>Project</Link>
                        <Link to="/" style={linkStyle}>Our Team</Link>
                        <Link to="/" style={linkStyle}>Team Conditions</Link>
                        <Link style={linkStyle}>Submit Listing</Link>
                    </Grid>
                    <Grid item xs={6} sm={3} lg={3}>
                        <Typography variant="h6" sx={{ mb: 2 }}>Quick Links</Typography>
                        <Link to="/" style={linkStyle}>Quick Links</Link>
                        <Link to="/" style={linkStyle}>Rentals</Link>
                        <Link to="/" style={linkStyle}>Sales</Link>
                        <Link to="/" style={linkStyle}>Contact</Link>
                        <Link to="/" style={linkStyle}>Our Blog</Link>
                    </Grid>
                    <Grid item xs={6} sm={3} lg={3} >
                        <Typography variant="h6" sx={{ mb: 2 }}>About us</Typography>
                        <Typography sx={{ mb: 2 }} variant="body2">Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit. Purus commodo ipsum
                            duis laoreet maecenas. Feugiat </Typography>
                        <Box sx={{ display: "flex", columnGap: "20px" }}>
                            <Typography variant="h6" data-aos="fade-left"> <AiOutlineFacebook /></Typography>
                            <Typography variant="h6" data-aos="fade-right">   <AiFillTwitterSquare /></Typography>

                            <Typography variant="h6" data-aos="fade-left">   <AiFillLinkedin /></Typography>
                            <Typography variant="h6" data-aos="fade-right">     <AiFillInstagram /></Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Footer;