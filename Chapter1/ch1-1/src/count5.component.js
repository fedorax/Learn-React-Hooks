import React from 'react';
import Count5State from './count5.state';

// No change Count5Component
const Count5Component = () => {
    const [count, setCount] = Count5State();

    const onClickCountAction = () => {
        setCount((c) => c + 1);
    };
    return (
        <>
            <h3>Count5</h3>
            Count : {count} <br />
            <button onClick={() => onClickCountAction()}>+1</button>
        </>
    );
};

export default Count5Component;