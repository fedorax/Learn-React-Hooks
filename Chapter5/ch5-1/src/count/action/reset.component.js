import React from "react";
import { useDispatch } from "react-redux";
import { RESET_COUNT } from "../count.type";

const ResetComponent = () => {
    const dispatch = useDispatch();
    const clickresetAction = () => {
        dispatch({ type: RESET_COUNT });
    }
    return (
        <button onClick={clickresetAction} > reset </button>
    );
};

export default ResetComponent;
