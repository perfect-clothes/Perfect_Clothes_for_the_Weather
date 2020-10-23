import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {loadNews} from "../modules/news";
import News from '../components/News';

const NewsContainer = () => {
    const {newsData, error, weatherData} = useSelector(({news, weather}) => ({
        newsData: news.newsData,
        error: news.error,
        weatherData: weather.weatherData
    }));
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadNews(weatherData.weather));
    }, [dispatch]);

    return(
        <News
            newsData={newsData}
            error={error}
        />
    );
};

export default NewsContainer;