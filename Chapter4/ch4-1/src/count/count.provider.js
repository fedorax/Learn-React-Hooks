import React, { useReducer } from 'react';
import CountContext from './count.context';
import CountReducer from './count.reducer';
import { initState } from './count.state';

const CountProvider = ({ children }) => {
    const [count, dispatch] = useReducer(CountReducer, initState);

    return (
        <CountContext.Provider value={{ count, dispatch }}>
            {children}
        </CountContext.Provider>
    )
};

export default CountProvider;