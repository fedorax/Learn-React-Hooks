import { createStore } from "redux";
import CountReducer from "./count.reducer";

const countStore = createStore(CountReducer);
export default countStore;