import { createAction } from "@reduxjs/toolkit";
import { DECREMENT_COUNT, INCREMENT_BY_AMOUNT, INCREMENT_COUNT, RESET_COUNT } from "./count.type";

export const increment = createAction(INCREMENT_COUNT);
export const incrementAmount = createAction(INCREMENT_BY_AMOUNT);
export const decrement = createAction(DECREMENT_COUNT);
export const reset = createAction(RESET_COUNT);
