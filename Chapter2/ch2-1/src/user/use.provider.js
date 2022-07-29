import React from 'react';
import UserContext from './user.context';

const UserProvider = ({ children }) => {

    return (
        <UserContext.Provider value={100}>
            {children}
        </UserContext.Provider>
    );

};

export default UserProvider;