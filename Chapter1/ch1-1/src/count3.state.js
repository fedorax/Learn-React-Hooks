import { useState, useEffect } from 'react';

const Count2State = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log('[Count3] count is changed to', count);
    });

    return [count, setCount];
}

export default Count2State;