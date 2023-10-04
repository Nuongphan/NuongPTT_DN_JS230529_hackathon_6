import { createStore } from "redux";
import { rootReducer } from "./indexRedux";

export const store= createStore(rootReducer)