import {all, call, takeLatest, put} from 'redux-saga/effects';
import {ContinentActionTypes} from "./continent.types";
import {


    showContinentStart,
    showContinentSuccess,
    showContinentFailure
} from "./continent.actions";
import axios from "axios";




export function* showContinentItems(){
    try {
        const response = yield axios.get(`https://www.surfs-app.com/App/JSON/lands.json`)
        yield console.log("status code is is" + JSON.stringify(response.data))
        if (response.status === 200) {

            yield put(showContinentSuccess(response.data.countries.country))

        } else {
            yield put(showContinentFailure("Error Occurred"))
        }

    } catch (e) {
        yield put(showContinentFailure(e))
    }
}

export function* onShowContinentStart() {
    yield takeLatest(ContinentActionTypes.SHOW_CONTINENT_START, showContinentItems)

}



export function* continentSagas() {
    yield (all([call(onShowContinentStart)]))
}
