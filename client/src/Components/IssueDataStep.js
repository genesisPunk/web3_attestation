import React, { useState, useContext } from 'react';
import { Button, TextField } from '@mui/material';
import axios from 'axios';
import { multiStepContext } from '../StepContext';

export default function GetAddressStep() {

    const { setStep } = useContext(multiStepContext);

    const sendText = () => {

        setStep(3);

        axios.post('http://localhost:5001/issue', {
            address: 'JJVQTSA5V6DHGO7TTQ5XYTEF2NAO5L6QEEGE4W7YE6ACFVMT2YNK3QXB2A',
            seedPhrase: 'north senior rich banner daring hungry reward wage leopard assume donate mixed kind spoil clump bracket february exile ill useless rice urban that absent second',
            text: 'abc',
        })
            .then(response => {
                console.log('Success:', response.data);
            })
            .catch(error => {
                console.error('Error:', error);
            });

    }




    return (
        <div>
            <div>
                <TextField label="Data" margin="normal" variant='outlined' color='secondary' />
            </div>
            <div>
                <TextField label="Address" margin="normal" variant='outlined' color='secondary' />
            </div>
            <div>
                <TextField label="Seed Phrase" margin="normal" variant='outlined' color='secondary' />
            </div>
            <div>
                <Button variant="contained" color="primary" onClick={sendText}> Issue data  </Button>
            </div>
        </div>
    )
}