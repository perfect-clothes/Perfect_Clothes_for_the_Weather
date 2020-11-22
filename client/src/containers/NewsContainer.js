import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {loadNews} from "../modules/news";
import News from '../components/News';
import {getTime} from "../lib/GetDateTime";

const NewsContainer = () => {
    const {newsData, error, loading} = useSelector(({news, loading}) => ({
        newsData: news.newsData,
        error: news.error,
        loading: loading['news/LOAD_NEWS']
    }));
    const dispatch = useDispatch();
    const {hour} = getTime();

    useEffect(() => {
        dispatch(loadNews());
    }, [dispatch]);

    return(
        <News
            newsData={newsData}
            error={error}
            loading={loading}
            hour={hour}
        />
    );
};

export default NewsContainer;