import React from 'react';
import Count3State from './count3.state';

// No change Count1Component
const Count3Component = () => {
    const [count, setCount] = Count3State();

    const onClickCountAction = () => {
        setCount((c) => c + 1);
    };
    return (
        <>
            <h3>Count3</h3>
            Count : {count} <br />
            <button onClick={() => onClickCountAction()}>+1</button>
        </>
    );
};

export default Count3Component;