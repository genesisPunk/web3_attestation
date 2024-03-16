import React, {Component, useContext} from 'react';
import './App.css';
import {Stepper, StepLabel, Step} from '@mui/material';
import { multiStepContext } from './StepContext.js';
import GetAddressStep from './Components/GetAddressStep.js';
import IssueDataStep from  './Components/IssueDataStep.js';
import VerifyDataStep from './Components/VerifyDataStep.js';

function App() {

  const {currentStep}  = useContext(multiStepContext);
function showStep(step) {
  switch(step) {
    case 1:
      return <GetAddressStep />
    case 2: 
      return <IssueDataStep />
    case 3:
      return <VerifyDataStep />  
  }
}



  return (
    <div className="App">
      <header className="App-header">
        <h3 style={{color:'red', textDecoration:'underline'}}>Web attestation</h3>
        <div className='center-stepper'>
          <Stepper style={{width:'18%'}} activeStep= {currentStep - 1} orientation='horizontal'>
            <Step>
              <StepLabel></StepLabel>
            </Step>
            <Step>
              <StepLabel></StepLabel>
            </Step>
            <Step>
              <StepLabel></StepLabel>
            </Step>
          </Stepper>
          </div>
          { showStep(currentStep) }
      </header>
    </div>
  );
}

export default App;
