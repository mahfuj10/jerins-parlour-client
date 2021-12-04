import { Button } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import UseFirebase from '../../../Hooks/UseFirebase';

const AddReivew = () => {

    const { user } = UseFirebase();
    const [name, setName] = useState('');
    const [profession, setProfession] = useState('');
    const [description, setMessage] = useState('');
    console.log(user)
    const inputStyle = {
        height: "50px",
        width: "505px",
        backgroundColor: "#fff",
        border: "1px solid #fff",
        marginBottom: "30px"
    }
    //     fetch('https://radiant-hamlet-99209.herokuapp.com/book', {
    //         method: "POST",
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(service)
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             alert('sucessfully added')
    //         })
    // }

    console.log(profession)

    if (name === undefined) setName(user?.displayName);
    const userReview = { name, profession, description }
    userReview.image = user?.photoURL;


    const handaleFormSubmit = e => {
        e.preventDefault();
        fetch('http://localhost:5000/review', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userReview)
        })
            .then(res => res.json())
            .then(data => {
                alert('sucessfully added feedback')
            })
    }



    return (
        <Box>
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
                    onChange={e => setMessage(e.target.value)}
                    placeholder="Your Message"
                    style={{ border: "1px solid #fff" }}
                    cols="60" rows="5" /><br />
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