import {all, call, takeLatest, put} from 'redux-saga/effects';

import axios from "axios";
import {showHoursFailure, showHoursSuccess} from "./hours.actions";
import {HoursActionTypes} from "./hours.types";




export function* showHoursItems({payload: {id}}){
    try {
        const response = yield axios.get(`http://surfs-app.com/siteTools/idDBhandler.php?cid=1&locid=${id}`)
        yield console.log("status code is is" + JSON.stringify(response.data))
        if (response.status === 200) {

            yield put(showHoursSuccess(response.data.locations))

        } else {
            yield put(showHoursFailure("Error Occurred"))
        }

    } catch (e) {
        yield put(showHoursFailure(e))
    }
}

export function* onShowHoursStart() {
    yield takeLatest(HoursActionTypes.SHOW_HOURS_START, showHoursItems)

}



export function* hoursSagas() {
    yield (all([call(onShowHoursStart)]))
}
