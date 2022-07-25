import React from 'react';
import Count1State from './count1.state';

const Count1Component = () => {
    const [count, setCount] = Count1State();

    const onClickCountAction = () => {
        setCount((c) => c + 1);
    };

    return (
        <>
            <h3>Count1</h3>
            Count : {count} <br />
            <button onClick={() => onClickCountAction()}>+1</button>
        </>
    );
};

export default Count1Component;