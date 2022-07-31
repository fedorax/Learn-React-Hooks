import React from "react";
import { useDispatch } from "react-redux";
import { DECREMENT_COUNT } from "../count.type";

const DecrementComponent = () => {
    const dispatch = useDispatch();
    const clickDecrementAction = () => {
        dispatch({ type: DECREMENT_COUNT });
    }
    return (
        <button onClick={clickDecrementAction} > -1 </button>
    );
};

export default DecrementComponent;
