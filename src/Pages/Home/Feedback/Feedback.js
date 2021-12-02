import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';

const Feedback = () => {

    const [userFeedbacks, setUserFeedbacks] = useState([]);

    useEffect(() => {
        fetch('/user.json')
            .then(res => res.json())
            .then(data => setUserFeedbacks(data))
    }, [])

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }

    return (
        <Container sx={{ mt: 16 }}>
            <Typography sx={{ fontWeight: "700", fontSize: "34px", textAlign: "center" }}>Testimonials</Typography>
            <Box sx={{ pt: 14, pb: 10 }}>
                <Slider {...settings} >
                    {
                        userFeedbacks.map(feedback => <Box >
                            <Box sx={{ display: "flex", alignItems: "center" }}>
                                <img width="64" height="64" src={feedback?.image} alt="" />
                                <Box sx={{ ml: 2 }}>
                                    <Typography variant="h5" sx={{ fontSize: 20, fontWeight: "600" }}>
                                        {feedback?.name}
                                    </Typography>
                                    <Typography variant="body2" sx={{ fontSize: 16, fontWeight: "500" }}>
                                        {feedback?.profession}
                                    </Typography>
                                </Box>
                            </Box>
                            <Typography sx={{ mt: 2, textAlign: 'start', color: "#707070", width: "300px" }} variant="body2">{feedback?.description.slice(0, 120)}</Typography>

                        </Box>
                        )
                    }
                </Slider>
            </Box>
        </Container>
    );
};

export default Feedback;