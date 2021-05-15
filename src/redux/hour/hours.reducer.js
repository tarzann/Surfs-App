import {HoursActionTypes} from "./hours.types";
import {closest, currentTimeStamp, getClosestTimestampInfo, getTodayHours,getNextDayHours} from "../../utils/hours.utils";

const INITIAL_STATE = {
    hidden: true,
    hours: [],
    todayHours: [],
    tomorrowHours: [],
    afterTomorrowHours:[],
    afterAfterTomorrowHours:[],
    closestTime: {},

    error: null

}
const hoursReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case HoursActionTypes.SHOW_HOURS_SUCCESS:

            return {
                ...state,
                hours: action.payload,
                closestTime: getClosestTimestampInfo(action.payload, closest(action.payload, currentTimeStamp())),
                todayHours: getTodayHours(action.payload, currentTimeStamp()),
                tomorrowHours:getNextDayHours(action.payload, currentTimeStamp(),1),
                afterTomorrowHours:getNextDayHours(action.payload, currentTimeStamp(),2),
                afterAfterTomorrowHours:getNextDayHours(action.payload, currentTimeStamp(),3)
            }
        case HoursActionTypes.SHOW_HOURS_FAILURE:

            return {
                ...state,
                hours: [],
                closestTime: {},
                todayHours: [],
                tomorrowHours:[],
                afterTomorrowHours:[],
                afterAfterTomorrowHours:[],
                error: action.payload
            }

        default:
            return state

    }
}
export default hoursReducer;
