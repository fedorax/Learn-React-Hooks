import React, { useContext } from 'react';
import UserContext from '../user.context';
const ItemComponent = () => {
    const user = useContext(UserContext);
    return (
        <>
            <div>UserId : {user.userId}</div>
            <div>UserName: {user.userName}</div>
            <div>UserEmail {user.userEmail}</div>
        </>
    );
}

export default ItemComponent;