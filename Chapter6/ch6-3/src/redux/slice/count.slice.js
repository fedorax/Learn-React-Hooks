import { createReducer } from "@reduxjs/toolkit";
import { decrement, increment, incrementAmount, reset } from "./count.action";
import initState from "./count.state";

export const countSlice = createReducer(initState, builder => {
    builder.addCase(increment, (state, action) => {
        state.value++;
    });

    builder.addCase(decrement, (state, action) => {
        state.value--;
    });

    builder.addCase(reset, (state, action) => {
        state.value = 0;
    });

    builder.addCase(incrementAmount, (state, action) => {
        state.value += action.payload;
    });

});

