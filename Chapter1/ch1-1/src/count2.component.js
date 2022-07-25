import React, { useEffect } from 'react';
import Count2State from './count2.state';

const Count2Component = () => {
    const [count, setCount] = Count2State();
    useEffect(() => {
        console.log('[Count2] count is changed to', count);
    });
    const onClickCountAction = () => {
        setCount((c) => c + 1);
    };
    return (
        <>
            <h3>Count2</h3>
            Count : {count} <br />
            <button onClick={() => onClickCountAction()}>+1</button>
        </>
    );
};

export default Count2Component;