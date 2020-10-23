import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {loadNews} from "../modules/news";
import News from '../components/News';

const NewsContainer = () => {
    const {newsData, error, weather} = useSelector(({news, weather}) => ({
        newsData: news.newsData,
        error: newsData.error,
        weather: weather.weatherData.weather
    }));
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadNews(weather));
    }, [dispatch]);

    return(
        <News
            newsData={newsData}
            error={error}
        />
    );
};

export default NewsContainer;