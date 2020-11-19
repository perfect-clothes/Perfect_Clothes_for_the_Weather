import {createAction, handleActions} from 'redux-actions';
import {takeLatest, put, call} from 'redux-saga/effects';
import * as loadAPI from '../lib/api/loadAllWeather'
import {startLoading, finishLoading} from "./loading";

const LOAD_ALL_WEATHER = 'allWeather/LOAD_ALL_WEATHER';
const LOAD_ALL_WEATHER_SUCCESS = 'allWeather/LOAD_ALL_WEATHER_SUCCESS';
const LOAD_ALL_WEATHER_FAILURE = 'allWeather/LOAD_ALL_WEATHER_FAILURE';

export const loadAllWeather = createAction(LOAD_ALL_WEATHER, ({latitude, longitude}) => ({latitude, longitude}));

function* loadAllWeatherSaga(action) {
    yield put(startLoading(LOAD_ALL_WEATHER));
    try {
        const response = yield call(loadAPI.loadAllWeather, action.payload);
        yield put({
            type: LOAD_ALL_WEATHER_SUCCESS,
            payload: response.data
        });
    } catch (e) {
        yield put({
            type: LOAD_ALL_WEATHER_FAILURE,
            error: true,
            payload: e
        });
    }
    yield put(finishLoading(LOAD_ALL_WEATHER));
}

export function* allWeatherSaga() {
    yield takeLatest(LOAD_ALL_WEATHER, loadAllWeatherSaga);
}

const initialState = {
    allWeatherData: [
        {
            date: '',
            time: '',
            weather: '',
            description: '',
            temp: 0,
            humid: 0
        }
    ],
    error: null
};

const allWeather = handleActions({
    [LOAD_ALL_WEATHER_SUCCESS]: (state, action) => ({
        ...state,
        allWeatherData: action.payload,
        error: null
    }),
    [LOAD_ALL_WEATHER_FAILURE]: (state, action) => ({
        ...state,
        allWeatherData: null,
        error: action.payload
    }),
}, initialState);

export default allWeather;