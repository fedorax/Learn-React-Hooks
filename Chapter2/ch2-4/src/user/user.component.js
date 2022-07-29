import React from 'react';
import UserProvider from './use.provider';
import ItemComponent from './item/item.component';
import SwitchAdminComponent from './switch/switchAdmin.component';
import SwitchGuestComponent from './switch/switchGuest.component';

const UserComponent = () => {
    return (
        <UserProvider>
            <SwitchAdminComponent />
            <SwitchGuestComponent />
            <ItemComponent />
        </UserProvider>
    )
}

export default UserComponent;