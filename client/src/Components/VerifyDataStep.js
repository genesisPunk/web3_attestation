import React from 'react';
import { Button, TextField }  from '@mui/material';

export default function GetAddressStep(){

    const verifyData = () => {

        setStep(3);
        
        axios.post('http://localhost:5001/verify', {
            txnId: '3NWCZX4WRH7KWFR7JUMUZBC5UQHOTNSDUDWY7TBFNHKC6GE6HY4Q',
            text: 'abcd'
        })
            .then(response => {
                console.log('Success:', response.data);
            })
            .catch(error => {
                console.error('Error:', error);
            });

    }

    return(
        <div>
            <div>
                <TextField label="Data" margin="normal" variant='outlined' color='secondary'/>
            </div>
            <div>
                <TextField label="Txn id" margin="normal" variant='outlined' color='secondary'/>
            </div>
            <div>
                <Button variant="contained" color="primary" onClick={verifyData}> Verify Data  </Button>
            </div>
        </div>
    )
}