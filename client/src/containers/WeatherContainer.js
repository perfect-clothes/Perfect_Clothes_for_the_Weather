import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import Weather from "../components/Weather";
import {loadWeather} from "../modules/weather";
import {getDate, getTime} from "../lib/GetDateTime";

const WeatherContainer = () => {
    const dispatch = useDispatch();
    const {weatherData, error, loading, coordsInfo} = useSelector(({weather, loading, coords}) => ({
        weatherData: weather.weatherData,
        error: weather.error,
        loading: loading['weather/LOAD_WEATHER'],
        coordsInfo: coords.coordsInfo
    }));
    const {latitude, longitude} = coordsInfo;
    const dateInfo = getDate();
    const {hour} = getTime();

    useEffect(() => {
            dispatch(loadWeather({latitude, longitude}));
    }, [coordsInfo]);

    return(
        <Weather
            weatherData={weatherData}
            error={error}
            loading={loading}
            dateInfo={dateInfo}
            hour={hour}
        />
    );
};

export default WeatherContainer;
