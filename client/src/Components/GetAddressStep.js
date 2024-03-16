import React, { useState, useContext } from 'react';
import { Button } from '@mui/material';
import axios from 'axios';
import { multiStepContext } from '../StepContext';



export default function GetAddressStep() {
    const [isLoading, setIsLoading] = useState(false);
    const { setStep } = useContext(multiStepContext);

    const fetchAddress = () => {
        setIsLoading(true);
        setStep(2)

        console.log('fetching....')
        axios.get('http://192.168.1.5:5001/address')
            .then(response => {
                // Handle the response
                setIsLoading(false);
                alert("Hello!!!")
            })
            .catch(error => {
                // Handle errors
                console.log(error);
            });


    };

    return (
        <div>
            <h6>We are connected to Algorand TESTNET: please get tokens from faucet for the generated address</h6>
            <Button variant="contained" color="primary" onClick={fetchAddress}> Click here to generate a new address  </Button>
        </div>
    )
}