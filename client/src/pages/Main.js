import React from "react";
import WeatherContainer from "../containers/WeatherContainer";
import Header from "../components/Header";
import CitySearch from "../components/CitySearch";
import RecommendContainer from "../containers/RecommendContainer";
import AllWeatherContainer from "../containers/AllWeatherContainer";

const Main = () => {
    return(
        <>
            <Header/>
            <CitySearch/>
            <WeatherContainer/>
            <RecommendContainer/>
            <AllWeatherContainer/>
        </>
    );
}

export default Main;
