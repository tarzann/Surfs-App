import {CountriesActionTypes} from "./countries.types";

const INITIAL_STATE = {
    hidden: true,
    country: [],
    itemCount: 0,
    totalAmount: 0,
    error: null

}
const countriesReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case CountriesActionTypes.SHOW_COUNTRIES_SUCCESS:

            return {
                ...state,
                country: action.payload,

            }
        case CountriesActionTypes.SHOW_COUNTRIES_FAILURE:

            return {
                ...state,
                error: action.payload
            }

        default:
            return state

    }
}
export default countriesReducer;
