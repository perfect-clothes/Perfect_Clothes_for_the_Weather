import {createAction, handleActions} from 'redux-actions';
import {takeLatest, put, call} from 'redux-saga/effects';
import * as loadNewsAPI from '../lib/api/loadNews';
import {startLoading, finishLoading} from "./loading";

const LOAD_NEWS = 'news/LOAD_NEWS';
const LOAD_NEWS_SUCCESS = 'news/LOAD_NEWS_SUCCESS';
const LOAD_NEWS_FAILURE = 'news/LOAD_NEWS_FAILURE';

export const loadNews = createAction(LOAD_NEWS);

function* loadNewsSaga() {
    yield put(startLoading(LOAD_NEWS));
    try {
        const response = yield call(loadNewsAPI.loadNews);
        yield put({
            type: LOAD_NEWS_SUCCESS,
            payload: response.data
        });
    } catch (e) {
        yield put({
            type: LOAD_NEWS_FAILURE,
            error: true,
            payload: e
        });
    }
    yield put(finishLoading(LOAD_NEWS));
}

export function* newsSaga() {
    yield takeLatest(LOAD_NEWS, loadNewsSaga);
}

const initialState = {
    newsData: [
        {
            title: '',
            originalLink: '',
            link: '',
            description: '',
            pubDate: ''
        }
    ],
    error: null
};

const news = handleActions({
    [LOAD_NEWS_SUCCESS]: (state, action) => ({
        ...state,
        newsData: action.payload,
        error: null
    }),
    [LOAD_NEWS_FAILURE]: (state, action) => ({
        ...state,
        newsData: null,
        error: action.payload
    }),
}, initialState);

export default news;