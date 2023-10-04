import { combineReducers } from "redux";
import {StartQuestionReducer} from "./reducer"
export const rootReducer = combineReducers({
 question: StartQuestionReducer
});