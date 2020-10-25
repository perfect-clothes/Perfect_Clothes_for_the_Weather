import React from "react";
import {useSelector} from "react-redux";
import AllWeather from "../components/AllWeather";

const AllWeatherContainer = () => {
    const {allWeatherData, error, loading} = useSelector(({allWeather, loading}) => ({
        allWeatherData: allWeather.allWeatherData,
        error: allWeather.error,
        loading: loading['allWeather/LOAD_ALL_WEATHER']
    }));

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