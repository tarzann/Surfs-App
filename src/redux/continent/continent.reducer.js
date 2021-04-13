import {ContinentActionTypes} from "./continent.types";

const INITIAL_STATE = {
    hidden: true,
    continent: [],
    itemCount: 0,
    totalAmount: 0,
    error: null

}
const continentReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case ContinentActionTypes.SHOW_CONTINENT_SUCCESS:

            return {
                ...state,
                continent: action.payload,

            }
        case ContinentActionTypes.SHOW_CONTINENT_FAILURE:

            return {
                ...state,
                error: action.payload
            }

        default:
            return state

    }
}
export default continentReducer;
