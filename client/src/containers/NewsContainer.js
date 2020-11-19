import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {loadNews} from "../modules/news";
import News from '../components/News';

const NewsContainer = () => {
    const {newsData, error, loading} = useSelector(({news, loading}) => ({
        newsData: news.newsData,
        error: news.error,
        loading: loading['news/LOAD_NEWS']
    }));
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadNews());
    }, [dispatch]);

    return(
        <News
            newsData={newsData}
            error={error}
            loading={loading}
        />
    );
};

export default NewsContainer;