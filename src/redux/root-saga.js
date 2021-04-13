import {all,call}from 'redux-saga/effects';

import {continentSagas} from "./continent/continent.sagas";
import {countriesSagas} from "./countries/countries.sagas";


export default function* rootSaga(){
    yield all([call(continentSagas),call(countriesSagas)]);
}
