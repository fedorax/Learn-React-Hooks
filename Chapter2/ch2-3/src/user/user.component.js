import React from 'react';
import UserProvider from './use.provider';
import ItemComponent from './item/item.component';

const UserComponent = () => {
    return (
        <UserProvider>
            <ItemComponent />
        </UserProvider>
    )
}

export default UserComponent;