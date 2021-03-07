import { combineReducers } from "redux";
import fetchReducer from "./dataFetchReducer";

const rootReducer = combineReducers(
    {
        fetch:fetchReducer,
    }
);

export default rootReducer;