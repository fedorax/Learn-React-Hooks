import React, { useEffect } from 'react';
import Count4State from './count4.state';

const Count2Component = () => {
    const [count, setCount] = Count4State();
    useEffect(() => {
        console.log('[Count4] count is changed to', count);
    }, [count]);
    const onClickCountAction = () => {
        setCount((c) => c + 1);
    };
    return (
        <>
            <h3>Count4</h3>
            Count : {count} <br />
            <button onClick={() => onClickCountAction()}>+1</button>
        </>
    );
};

export default Count2Component;