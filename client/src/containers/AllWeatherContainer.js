import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {loadAllWeather} from "../modules/allWeather";
import AllWeather from "../components/AllWeather";
import {getTime} from "../lib/GetDateTime";

const AllWeatherContainer = () => {
    const dispatch = useDispatch();
    const {allWeatherData, error, loading, coordsInfo} = useSelector(({allWeather, loading, coords}) => ({
        allWeatherData: allWeather.allWeatherData,
        error: allWeather.error,
        loading: loading['allWeather/LOAD_ALL_WEATHER'],
        coordsInfo: coords.coordsInfo
    }));
    const {latitude, longitude} = coordsInfo;
    const {hour} = getTime();

    useEffect(() => {
        dispatch(loadAllWeather({latitude, longitude}));
    }, [coordsInfo]);

    return(
        <div>
            <AllWeather
                allWeatherData={allWeatherData}
                error={error}
                loading={loading}
                hour={hour}
            />
        </div>
    );
};

export default AllWeatherContainer;