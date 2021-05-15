import {combineReducers} from "redux";
import continentReducer from "./continent/continent.reducer";
import countriesReducer from "./countries/countries.reducer";
import hoursReducer from "./hour/hours.reducer";

import {persistReducer} from "redux-persist";
import storage from 'redux-persist/lib/storage'

// const persistConfig={
//     key:'root',
//     storage,
//     whitelist:['cart']
// }

const  rootReducer= combineReducers({


    continent:continentReducer,
    countries:countriesReducer,
    hours:hoursReducer
});

export default rootReducer;
