import React, { useContext } from 'react';
import UserContext from "../user.context";

const SwitchAdminComponent = () => {
    const { setUser } = useContext(UserContext);

    const changeAdminUser = () => {
        setUser({
            userId: 1,
            userName: 'admin',
            userEmail: 'admin@mail.com'
        });
    }
    return (
        <button onClick={changeAdminUser} >Admin</button>
    )
};

export default SwitchAdminComponent;