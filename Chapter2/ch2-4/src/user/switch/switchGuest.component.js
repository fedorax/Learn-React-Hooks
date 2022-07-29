import React, { useContext } from 'react';
import UserContext from "../user.context";

const SwitchGuestComponent = () => {
    const { setUser } = useContext(UserContext);

    const changeGuestUser = () => {
        setUser({
            userId: 2,
            userName: 'guest',
            userEmail: 'guest@mail.com'
        });
    }
    return (
        <button onClick={changeGuestUser} >Guest</button>
    )
};

export default SwitchGuestComponent;