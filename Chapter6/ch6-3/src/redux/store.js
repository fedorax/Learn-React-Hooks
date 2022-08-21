import { configureStore } from "@reduxjs/toolkit";
import { countSlice } from "./slice/count.slice";

const store = configureStore({
    reducer: {
        count: countSlice,
    }
});

export default store;