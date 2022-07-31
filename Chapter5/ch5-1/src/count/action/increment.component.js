import React from "react";
import { useDispatch } from "react-redux";
import { INCREMENT_COUNT } from "../count.type";

const IncrementComponent = () => {
    const dispatch = useDispatch()
    const clickIncrementAction = () => {
        dispatch({ type: INCREMENT_COUNT });
    }
    return (
        <button onClick={clickIncrementAction} > +1 </button>
    );
};

export default IncrementComponent;
