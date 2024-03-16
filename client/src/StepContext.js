import React, {useState} from 'react';
import App from './App';

export const multiStepContext = React.createContext();

const StepContext = () => {

    const [currentStep, setStep] = useState(1);
    

    return (
        <div>
            <multiStepContext.Provider value={{currentStep, setStep}}>
                <App />
            </multiStepContext.Provider>
        </div>
    )
    
}



export default StepContext;
