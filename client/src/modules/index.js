import {combineReducers} from "redux";
import {all} from 'redux-saga/effects';
import weather, {weatherSaga} from "./weather";
import allWeather, {allWeatherSaga} from "./allWeather";

const rootReducer = combineReducers({
    weather,
    allWeather,
});

export function* rootSaga() {
    yield all([weatherSaga(), allWeatherSaga()]);
}

export default rootReducer;