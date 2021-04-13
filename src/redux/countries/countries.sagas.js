import {all, call, takeLatest, put} from 'redux-saga/effects';
import {CountriesActionTypes} from "./countries.types";
import {


    showCountryStart,
    showCountrySuccess,
    showCountryFailure
} from "./countries.actions";
import axios from "axios";




export function* showContinentItems({payload: {continent}}){
    try {
        const response = yield axios.get(`http://www.surfs-app.com/App/JSON/${continent}/${continent}.json`)
        yield console.log("status code is is" + JSON.stringify(response.data))
        if (response.status === 200) {

            yield put(showCountrySuccess(response.data.countries.country))

        } else {
            yield put(showCountryFailure("Error Occurred"))
        }

    } catch (e) {
        yield put(showCountryFailure(e))
    }
}

export function* onShowContinentStart() {
    yield takeLatest(CountriesActionTypes.SHOW_COUNTRIES_START, showContinentItems)

}



export function* countriesSagas() {
    yield (all([call(onShowContinentStart)]))
}
