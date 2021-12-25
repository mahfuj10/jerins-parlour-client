import { Button, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import AOS from 'aos';
import React, { useEffect } from 'react';

const Contact = () => {

    const inputStyle = {
        width: '368px',
        height: '50px',
        background: '#FFFFFF',
        borderRadius: '5px',
        border: "1px solid #b9b6b6"
    };

    // data aos
    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);


    return (
        <Box sx={{ backgroundColor: "#FFF8F5", mt: 20 }} >
            <Container sx={{ pt: 11, pb: 11 }}>
                <Typography variant="h3" sx={{ fontWeight: 700, fontSize: "34px", textAlign: "center" }}>Get I Touch !.</Typography>

                <Grid className="contact-form" sx={{ mt: 4, ml: 20 }} container spacing={2}>
                    <Grid item sx={12} md={4}>
                        <input style={inputStyle} type="text" placeholder="First Name" /> <br /> <br />
                        <input style={inputStyle} type="text" placeholder="Email Address" />
                    </Grid>
                    <Grid item xs={12} md={2} >
                        <input style={inputStyle} type="text" placeholder="Last Name" /> <br /> <br />

                        <input style={inputStyle} type="text" placeholder="Phone Number" />
                    </Grid>

                    <Grid item xs={12} md={12}>
                        <textarea
                            data-aos="fade-up"
                            style={{ border: "1px solid #b9b6b6" }}
                            placeholder="Your Message"
                            rows="4" cols="100"
                        >
                        </textarea>
                    </Grid>


                    <Button variant="contained" sx={{ backgroundColor: "#F73E7B", py: 1, px: 3, ml: 38, mt: 3 }}>Send Message</Button>
                </Grid>



            </Container>

        </Box >
    );
};

export default Contact;