import React, { useState } from 'react';
import { Button } from '@mui/material';
import axios from 'axios';


export default function GetAddressStep() {
    const [isLoading, setIsLoading] = useState(false);

    const fetchAddress = () => {
        setIsLoading(true);

        axios.get('http://192.168.1.5:5001/address')
            .then(response => {
                // Handle the response
                setIsLoading(false);
                alert("Hello!!!")
            })
            .catch(error => {
                // Handle errors
                alert(error);
            });

    };

    return (
        <div>
            <Button variant="contained" color="primary" onClick={fetchAddress}> Click here to generate a new address  </Button>
        </div>
    )
}