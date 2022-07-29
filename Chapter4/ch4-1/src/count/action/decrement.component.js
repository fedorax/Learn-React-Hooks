import React, { useContext } from "react";
import CountContext from "../count.context";
import { DECREMENT_COUNT } from "../count.type";

const DecrementComponent = () => {
    const { dispatch } = useContext(CountContext);
    const clickDecrementAction = () => {
        dispatch(DECREMENT_COUNT);
    }
    return (
        <button onClick={clickDecrementAction} > -1 </button>
    );
};

export default DecrementComponent;
