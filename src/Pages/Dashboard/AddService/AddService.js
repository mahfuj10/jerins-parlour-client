import React, { useState } from 'react';
import { Button, Input, TextField, Paper, Alert } from '@mui/material';

const AddService = () => {
    // title, image, description, price, _id 
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState(null);
    const [success, setSuccess] = useState('');
    const [description, setDescription] = useState('');
    const formData = new FormData();
    formData.append('title', title);
    formData.append('price', price);
    formData.append('image', image);
    formData.append('description', description);

    const handaleAddService = e => {

        e.preventDefault();
        if (!image) {
            return;
        }

        fetch('https://radiant-hamlet-99209.herokuapp.com/addService', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setSuccess('service added successfully')
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }

    return (


        <form onSubmit={handaleAddService} >

            {success && <Alert severity="success">{success}</Alert>}

            <Paper elevation={2} sx={{ p: 4, width: "400px" }}>

                <input
                    onChange={e => setTitle(e.target.value)}
                    required placeholder="Service Title"
                    style={{ width: "100%", marginTop: "10px" }} /> <br /> <br />
                <input
                    style={{ width: "100%" }}
                    type="number"
                    placeholder='service cost'
                    onChange={(e) => setPrice(e.target.value)} />
                <br /> <br />
                <label htmlFor="contained-button-file">
                    <Input
                        style={{ width: "100%" }}
                        onChange={e => setImage(e.target.files[0])}
                        accept="image/*" id="contained-button-file" multiple type="file" />

                </label>
                <br /> <br />
                <textarea
                    onChange={e => setDescription(e.target.value)}
                    style={{ width: "100%" }}
                    rows="4" placeholder="Description" />
                <br /> <br />
                <input type="Submit" />
            </Paper>
        </form >
    );
};

export default AddService;