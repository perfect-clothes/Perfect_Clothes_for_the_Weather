import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {loadAllWeather} from "../modules/allWeather";
import AllWeather from "../components/AllWeather";

const AllWeatherContainer = () => {
    const dispatch = useDispatch();
    const {allWeatherData, error, loading, coordsInfo} = useSelector(({allWeather, loading, coords}) => ({
        allWeatherData: allWeather.allWeatherData,
        error: allWeather.error,
        loading: loading['allWeather/LOAD_ALL_WEATHER'],
        coordsInfo: coords.coordsInfo
    }));
    const {latitude, longitude} = coordsInfo;

    useEffect(() => {
        dispatch(loadAllWeather({latitude, longitude}));
    }, [dispatch]);

    return(
        <div>
            <AllWeather
                allWeatherData={allWeatherData}
                error={error}
                loading={loading}
            />
        </div>
    );
};

export default AllWeatherContainer;