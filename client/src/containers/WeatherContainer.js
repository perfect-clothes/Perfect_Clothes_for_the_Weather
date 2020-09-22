import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import Weather from "../components/Weather";
import {loadWeather} from "../modules/weather";

const WeatherContainer = () => {
    const dispatch = useDispatch();
    const {country, city, date, weather, temp, humid, error} = useSelector(({weather}) => ({
        country: weather.country,
        city: weather.city,
        date: weather.date,
        weather: weather.weather,
        temp: weather.temp,
        humid: weather.humid,
        error: weather.error
    }));

    useEffect(() => {
        dispatch(loadWeather());
    }, [dispatch]);

    return(
        <Weather
            country={country}
            city={city}
            date={date}
            weather={weather}
            temp={temp}
            humid={humid}
            error={error}
        />
    );
};

export default WeatherContainer;

