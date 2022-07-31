import React from 'react';
import { useSelector } from 'react-redux';

const DispComponent = () => {
    const { count } = useSelector((state) => state)

    return (
        <>
            Count : {count}
        </>
    )
};

export default DispComponent;