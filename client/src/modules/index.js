import {combineReducers} from "redux";
import {all} from 'redux-saga/effects';
import weather, {weatherSaga} from "./weather";

const rootReducer = combineReducers({
    weather,
});

export function* rootSaga() {
    yield all([weatherSaga()]);
}

export default rootReducer;