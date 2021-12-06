import { Alert, Button, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';

const MakeAdmin = () => {

    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);

    const onAdminEmailValue = e => {
        setEmail(e.target.value);
    }

    const handaleMakeAdmin = () => {
        const user = { email };
        fetch('https://radiant-hamlet-99209.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    setSuccess(true);
                }
            })

    }

    return (
        <Box sx={{ backgroundColor: "white", p: 10, width: "50%" }}>
            <TextField sx={{ width: "60%" }} label="Make Admin" variant="outlined" type="email" onChange={onAdminEmailValue} />
            <Button sx={{ paddingY: 2, paddingX: 4 }} variant="contained" onClick={handaleMakeAdmin}> Save </Button>
            {success && <Alert severity="success">Make Admin successfully!</Alert>}
        </Box>
    );
};

export default MakeAdmin;