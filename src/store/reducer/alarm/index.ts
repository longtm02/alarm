import { initDataListAlarm, ListAlarmReducerInterface, AlarmReducerInterface } from "./interface";
import * as types from "./../../actions/types";

interface Action {
  type: string;
  data?: any;
  uuid?: string;
}

export default function alarmReducer(
  state: ListAlarmReducerInterface = initDataListAlarm,
  action: Action
): ListAlarmReducerInterface {
  switch (action.type) {
    case types.ADD_ALARM:
      return {
        ...state,
        listAlarm: [...state.listAlarm, action.data],
      };
    case types.REMOVE_ALARM:
      return {
        ...state,
        listAlarm: state.listAlarm.filter(
          (alarm: AlarmReducerInterface) => alarm.uuid !== action.uuid
        ),
      };
    case types.EDIT_ALARM:
      return {
        ...state,
        listAlarm: action.data,
      };
    default:
      return state;
  }
}
