import {createAction, handleActions} from 'redux-actions';
import {takeLatest, put, call} from 'redux-saga/effects';
import * as loadAPI from '../lib/api/loadWeather';

const LOAD_WEATHER = 'weather/LOAD_WEATHER';
const LOAD_WEATHER_SUCCESS = 'weather/LOAD_WEATHER_SUCCESS';
const LOAD_WEATHER_FAILURE = 'weather/LOAD_WEATHER_FAILURE';

export const loadWeather = createAction(LOAD_WEATHER);
function* loadWeatherSaga(action) {
    try {
        const response = yield call(loadAPI.load, action.payload);
        yield put({
            type: 'LOAD_WEATHER_SUCCESS',
            payload: response.data
        });
    } catch (e) {
        yield put({
            type: 'LOAD_WEATHER_FAILURE',
            error: true,
            payload: e
        })
    }
}
export function* weatherSaga() {
    yield takeLatest(LOAD_WEATHER, loadWeatherSaga);
}

const initialState = {
    weather: null,
    error: null
};

const weather = handleActions({
    [LOAD_WEATHER_SUCCESS]: (state, {payload: weather}) => ({
        ...state,
        weather: weather,
        error: null
    }),
    [LOAD_WEATHER_FAILURE]: (state, {payload: error}) => ({
        ...state,
        weather: null,
        error: error
    })
}, initialState);

export default weather;