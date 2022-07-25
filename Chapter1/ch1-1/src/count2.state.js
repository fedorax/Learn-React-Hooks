import { useState } from 'react';

// No change Count1State
const Count2State = () => {
    const [count, setCount] = useState(0);

    return [count, setCount];
}

export default Count2State;