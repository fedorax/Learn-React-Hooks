import { useState } from 'react';

const Count1State = () => {
    const [count, setCount] = useState(0);

    return [count, setCount];
}

export default Count1State;