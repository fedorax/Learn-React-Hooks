import React from 'react';
import countStore from './count.store';
import { Provider } from 'react-redux';

const CountProvider = ({ children }) => {

    return (
        <Provider store={countStore}>
            {children}
        </Provider>

    )
};

export default CountProvider;