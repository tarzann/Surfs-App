import {ContinentActionTypes} from "./continent.types";



export const showContinentStart=()=>({
    type:ContinentActionTypes.SHOW_CONTINENT_START,
})
export const showContinentSuccess=items=>({
    type:ContinentActionTypes.SHOW_CONTINENT_SUCCESS,
    payload:items
})
export const showContinentFailure=error=>({
    type:ContinentActionTypes.SHOW_CONTINENT_FAILURE,
    payload:error
})



