import {HoursActionTypes} from "./hours.types";



export const showHoursStart=(id)=>({
    type:HoursActionTypes.SHOW_HOURS_START,
    payload:id

})
export const showHoursSuccess=items=>({
    type:HoursActionTypes.SHOW_HOURS_SUCCESS,
    payload:items
})
export const showHoursFailure=error=>({
    type:HoursActionTypes.SHOW_HOURS_FAILURE,
    payload:error
})



