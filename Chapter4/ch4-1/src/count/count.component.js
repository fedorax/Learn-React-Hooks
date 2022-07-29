import React from 'react';
import DecrementComponent from './action/decrement.component';
import IncrementComponent from './action/increment.component';
import ResetComponent from './action/reset.component';
import CountProvider from './count.provider';
import DispComponent from './disp/disp.component';

const CountComponent = () => {
    return (
        <CountProvider>
            <DispComponent />
            <div>
                <IncrementComponent />
                <DecrementComponent />
                <ResetComponent />
            </div>
        </CountProvider>
    )
};

export default CountComponent;