import {createAction, handleActions} from 'redux-actions';
import {takeLatest, put, call} from 'redux-saga/effects';
import * as loadAPI from '../lib/api/loadWeather';

const LOAD_WEATHER = 'weather/LOAD_WEATHER';
const LOAD_WEATHER_SUCCESS = 'weather/LOAD_WEATHER_SUCCESS';
const LOAD_WEATHER_FAILURE = 'weather/LOAD_WEATHER_FAILURE';

export const loadWeather = createAction(LOAD_WEATHER, ({latitude, longitude}) => ({latitude, longitude}));
function* loadWeatherSaga(action) {
    try {
        const response = yield call(loadAPI.load, action.payload);
        yield put({
            type: LOAD_WEATHER_SUCCESS,
            payload: response.data
        });
    } catch (e) {
        yield put({
            type: LOAD_WEATHER_FAILURE,
            error: true,
            payload: e
        })
    }
}
export function* weatherSaga() {
    yield takeLatest(LOAD_WEATHER, loadWeatherSaga);
}

const initialState = {
    weatherData: {
        weather: '',
        city: '',
        country: '',
        temp: 0,
        humid: 0
    },
    clothesData: {
        top: '',
        bottom: '',
        outer: '',
        inner: '',
        item: ''
    },
    error: null
};

const weather = handleActions({
    [LOAD_WEATHER_SUCCESS]: (state, action) => ({
        ...state,
        weatherData: action.payload.weatherData,
        clothesData: action.payload.clothesData,
        error: null
    }),
    [LOAD_WEATHER_FAILURE]: (state, action) => ({
        ...state,
        error: action.payload,
        weatherData: null,
        clothesData: null
    })
}, initialState);

export default weather;