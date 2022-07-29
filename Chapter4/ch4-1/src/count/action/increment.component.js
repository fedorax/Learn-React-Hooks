import React, { useContext } from "react";
import CountContext from "../count.context";
import { INCREMENT_COUNT } from "../count.type";

const IncrementComponent = () => {
    const { dispatch } = useContext(CountContext);
    const clickIncrementAction = () => {
        dispatch(INCREMENT_COUNT);
    }
    return (
        <button onClick={clickIncrementAction} > +1 </button>
    );
};

export default IncrementComponent;
