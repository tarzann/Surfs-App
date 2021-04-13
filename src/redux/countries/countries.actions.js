import {CountriesActionTypes} from "./countries.types";



export const showCountryStart=(continent)=>({
    type:CountriesActionTypes.SHOW_COUNTRIES_START,
    payload:continent

})
export const showCountrySuccess=items=>({
    type:CountriesActionTypes.SHOW_COUNTRIES_SUCCESS,
    payload:items
})
export const showCountryFailure=error=>({
    type:CountriesActionTypes.SHOW_COUNTRIES_FAILURE,
    payload:error
})



