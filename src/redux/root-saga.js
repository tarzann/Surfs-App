import {all,call}from 'redux-saga/effects';

import {continentSagas} from "./continent/continent.sagas";
import {countriesSagas} from "./countries/countries.sagas";
import {hoursSagas} from "./hour/hours.sagas";

export default function* rootSaga(){
    yield all([call(continentSagas),call(countriesSagas),call(hoursSagas)]);
}
