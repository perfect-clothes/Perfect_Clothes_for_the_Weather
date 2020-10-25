import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {loadNews} from "../modules/news";
import News from '../components/News';

const NewsContainer = () => {
    const {newsData, error, weatherData, loading} = useSelector(({news, weather, loading}) => ({
        newsData: news.newsData,
        error: news.error,
        weatherData: weather.weatherData,
        loading: loading['news/LOAD_NEWS']
    }));
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadNews(weatherData.weather));
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