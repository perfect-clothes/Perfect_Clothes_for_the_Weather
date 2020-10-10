import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import Weather from "../components/Weather";
import {loadWeather} from "../modules/weather";

const WeatherContainer = () => {
    const dispatch = useDispatch();
    const {weatherData, clothesData, error} = useSelector(({weather}) => ({
        weatherData: weather.weatherData,
        clothesData: weather.clothesData,
        error: weather.error
    }));

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(function(pos) {
            const latitude = pos.coords.latitude;
            const longitude = pos.coords.longitude;
            dispatch(loadWeather({latitude, longitude}));
        }, function(e){
            console.log(e);
        });
    }, [dispatch]);

    return(
        <Weather
            weatherData={weatherData}
            clothesData={clothesData}
            error={error}
        />
    );
};

export default WeatherContainer;
