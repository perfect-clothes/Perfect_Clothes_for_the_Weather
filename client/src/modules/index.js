import {combineReducers} from "redux";
import {all} from 'redux-saga/effects';
import weather, {weatherSaga} from "./weather";
import allWeather, {allWeatherSaga} from "./allWeather";
import news, {newsSaga} from "./news";
import loading from "./loading";
import coords from "./coords";

const rootReducer = combineReducers({
    weather,
    allWeather,
    news,
    loading,
    coords
});

export function* rootSaga() {
    yield all([weatherSaga(), allWeatherSaga(), newsSaga()]);
}

export default rootReducer;