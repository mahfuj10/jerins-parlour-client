import React, { useEffect, useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import { BiCart } from 'react-icons/bi';
import UseFirebase from '../../../Hooks/UseFirebase';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    height: 300,
    border: '1px solid #F7568B',
    backgroundColor: "#FFECF2",
    boxShadow: 23,
    p: 4,
};



const ViewModal = ({ open, handleClose, id }) => {

    const [service, setService] = useState({});
    const { image, title, description, price } = service;
    const { user } = UseFirebase();


    useEffect(() => {
        fetch(`https://radiant-hamlet-99209.herokuapp.com/services/${id}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [])

    const handaleAddToCart = () => {
        service.email = user?.email;
        service.name = user?.displayName;
        service.status = 'pending';
        fetch('https://radiant-hamlet-99209.herokuapp.com/book', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                alert('sucessfully added')
            })
    }


    // sx={{ backgroundColor: "#FFECF2" }}
    return (
        <div>

            <Modal

                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}


            >
                <Fade in={open}>
                    <Box sx={style} >
                        <Grid container sx={{ alignItems: "center" }} spacing={0}>
                            <Grid xs={6}>

                                <img width="150" src={image} alt="serviceImage" />

                            </Grid>
                            <Grid item xs={6} >
                                <Typography variant="h6">
                                    {title}
                                </Typography>
                                <Typography sx={{ mt: 2 }} variant="body2">
                                    {description}
                                </Typography>
                                <Typography sx={{ mt: 2, color: "#F7568B" }} variant="h5">
                                    ${price}
                                </Typography>
                                <Button variant="contained" onClick={handaleAddToCart} sx={{ alignItems: "center", mt: 2, backgroundColor: "#F7568B" }}><BiCart style={{ fontSize: 23, marginRight: "3px" }} /> Add to cart</Button>
                            </Grid>
                        </Grid>

                    </Box>
                </Fade>
            </Modal>
        </div>
    );
};

export default ViewModal;