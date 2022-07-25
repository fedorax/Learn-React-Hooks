import { useState, useEffect } from 'react';

const Count5State = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log('[Count5] count is changed to', count);
    }, [count]);

    return [count, setCount];
}

export default Count5State;