import React from 'react';
import Count6State from './count6.state';

const Count6Component = () => {
    const [count, incCountAction] = Count6State();

    return (
        <>
            <h3>Count6</h3>
            Count : {count} <br />
            <button onClick={() => incCountAction()}>+1</button>
        </>
    );
};

export default Count6Component;