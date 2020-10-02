import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import Weather from "../components/Weather";
import {loadWeather} from "../modules/weather";

const WeatherContainer = () => {
    const dispatch = useDispatch();
    const {weatherData, error} = useSelector(({weather}) => ({
        weatherData: weather.weatherData,
        error: weather.error
    }));

    useEffect(() => {
        dispatch(loadWeather());
    }, [dispatch]);

    return(
        <Weather
            weatherData={weatherData}
            error={error}
        />
    );
};

export default WeatherContainer;

