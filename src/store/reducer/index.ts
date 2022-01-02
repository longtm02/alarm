import { combineReducers } from "redux";
import alarmReducer from "./alarm";

const rootReducer = combineReducers({ listAlarm: alarmReducer });

export type AppState = ReturnType<typeof rootReducer>;
export default rootReducer;
