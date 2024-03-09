import React from 'react';
import { Button, TextField }  from '@mui/material';

export default function GetAddressStep(){
    return(
        <div>
            <div>
                <TextField label="Data" margin="normal" variant='outlined' color='secondary'/>
            </div>
            <div>
                <TextField label="Address" margin="normal" variant='outlined' color='secondary'/>
            </div>
            <div>
                <TextField label="Seed Phrase" margin="normal" variant='outlined' color='secondary'/>
            </div>
            <div>
                <Button variant="contained" color="primary"> Issue data  </Button>
            </div>
        </div>
    )
}