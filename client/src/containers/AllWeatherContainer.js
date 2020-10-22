import React from "react";
import {useSelector} from "react-redux";
import AllWeather from "../components/AllWeather";

const AllWeatherContainer = () => {
    const {allWeatherData, error} = useSelector(({allWeather}) => ({
        allWeatherData: allWeather.allWeatherData,
        error: allWeather.error
    }));

    return(
        <div>
            <AllWeather
                allWeatherData={allWeatherData}
                error={error}
            />
        </div>
    );
};

export default AllWeatherContainer;