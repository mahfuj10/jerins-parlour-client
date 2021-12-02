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
        <Box>
            <TextField type="email" onChange={onAdminEmailValue} />
            <Button variant="contained" onClick={handaleMakeAdmin}> Save </Button>
            {success && <Alert severity="success">Make Admin successfully!</Alert>}
        </Box>
    );
};

export default MakeAdmin;