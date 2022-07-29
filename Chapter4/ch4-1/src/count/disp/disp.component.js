import React, { useContext } from 'react';
import CountContext from '../count.context';

const DispComponent = () => {
    const { count } = useContext(CountContext);

    return (
        <>
            Count : {count}
        </>
    )
};

export default DispComponent;