import React from 'react';
import UserContext from './user.context';
import UserState from './user.state';

const UserProvider = ({ children }) => {

    return (
        <UserContext.Provider value={UserState}>
            {children}
        </UserContext.Provider>
    );

};

export default UserProvider;