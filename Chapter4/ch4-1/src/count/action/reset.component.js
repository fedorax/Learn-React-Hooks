import React, { useContext } from "react";
import CountContext from "../count.context";
import { RESET_COUNT } from "../count.type";

const ResetComponent = () => {
    const { dispatch } = useContext(CountContext);
    const clickresetAction = () => {
        dispatch(RESET_COUNT);
    }
    return (
        <button onClick={clickresetAction} > reset </button>
    );
};

export default ResetComponent;
