import { createStore } from "redux";
import CountReducer from "./count.reducer";
import { CountState } from "./count.state";
const countStore = createStore(CountReducer, CountState);
export default countStore;