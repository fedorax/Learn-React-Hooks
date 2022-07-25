import { useState, useEffect } from 'react';

const Count6State = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log('[Count6] count is changed to', count);
    }, [count]);
    const incCountAction = () => {
        setCount((c) => c + 1);
    };
    return [count, incCountAction];
}

export default Count6State;