import React from 'react';
import CountStore from './count.store';
import { DECREMENT_COUNT, INCREMENT_COUNT, RESET_COUNT } from './count.type';
const CountComponent = () => {
    let count = CountStore.getState();
    const clickIncrementCount = () => {
        CountStore.dispatch({ type: INCREMENT_COUNT });
        console.log(CountStore.getState());
        count = CountStore.getState(); // Not Update. not reredendering
    }
    const clickDecrementCount = () => {
        CountStore.dispatch({ type: DECREMENT_COUNT });
        console.log(CountStore.getState());
        count = CountStore.getState(); // Not Update. not reredendering

    }
    const clickResetCount = () => {
        CountStore.dispatch({ type: RESET_COUNT });
        console.log(CountStore.getState());
        count = CountStore.getState(); // Not Update. not reredendering

    }
    return (
        <>
            count : {count}
            <div>
                <button onClick={clickIncrementCount} > + 1</button>
                <button onClick={clickDecrementCount} > - 1</button>
                <button onClick={clickResetCount} > 0 </button>
            </div>
        </>
    )
};

export default CountComponent;