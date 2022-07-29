import React, { useState } from 'react';
import UserContext from './user.context';
import UserState from './user.state';

const UserProvider = ({ children }) => {
    const [user, setUser] = useState(UserState);
    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );

};

export default UserProvider;