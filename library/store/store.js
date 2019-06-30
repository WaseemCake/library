import {createStore} from "redux";
import rootReducer from "../reducer/reducer.js";

const store = createStore(rootReducer);
const { getState, dispatch } = store;

export default store;
