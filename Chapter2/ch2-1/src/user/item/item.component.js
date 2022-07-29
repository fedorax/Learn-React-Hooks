import React, { useContext } from 'react';
import UserContext from '../user.context';
const ItemComponent = () => {
    const user = useContext(UserContext);
    return (
        <>
            {user}
        </>
    );
}

export default ItemComponent;