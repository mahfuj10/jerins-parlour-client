import { Alert, Paper } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { set, useForm } from "react-hook-form";
import UseFirebase from '../../../Hooks/UseFirebase';

const AddReivew = () => {

    const { user } = UseFirebase();
    const [name, setName] = useState('');
    const [profession, setProfession] = useState('');
    const [description, setDescription] = useState('');
    const [rating, setRating] = useState(1);
    const [success, setSuccess] = useState('');

    const inputStyle = {
        height: "50px",
        width: "505px",
        backgroundColor: "#fff",
        border: "1px solid #fff",
        marginBottom: "30px"
    }


    if (name === undefined) setName(user?.displayName);
    const userReview = { name, profession, description, rating }
    userReview.image = user?.photoURL;

    const handaleFormSubmit = e => {
        e.preventDefault();
        fetch('https://radiant-hamlet-99209.herokuapp.com/review', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userReview)
        })
            .then(res => res.json())
            .then(data => {
                setProfession('');
                setDescription('');
                setSuccess('Thanks for your feedback.Your feedback added on home page')
            })
    }



    return (
        <Box className="add-review">

            {success && <Alert severity="success">{success}</Alert>}

            <form onSubmit={handaleFormSubmit}>
                <input
                    onBlur={e => setName(e.target.value)}
                    style={inputStyle} type="text" placeholder="Your Name"
                    defaultValue={user.displayName} /> <br />
                <input
                    onChange={e => setProfession(e.target.value)}
                    style={inputStyle}
                    type="text"
                    placeholder="Company's name, Designation" /><br />
                <textarea
                    onChange={e => setDescription(e.target.value)}
                    placeholder="Your Message"
                    style={{ border: "1px solid #fff" }}
                    cols="60" rows="5" /><br />

                <select
                    onChange={e => setRating(e.target.value)}
                    placeholder="Your Message"
                    style={{ padding: "5px 20px", marginTop: '20px' }} >
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                    <option value="4">Four</option>
                    <option value="5">Five</option>
                </select>  <br />
                <input type="submit"
                    style={{
                        padding: '5px 30px', marginTop: "20px", color: "white", border: "none",
                        backgroundColor: "#F63E7B"
                    }}
                    value="Submit"
                />
            </form>
            {/* <Button sx={{ px: 5, py: 1, mt: 3, backgroundColor: "#F63E7B" }} variant="contained" >Submit</Button> */}
        </Box>
    );
};

export default AddReivew;