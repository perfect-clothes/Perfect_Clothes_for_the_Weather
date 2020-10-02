import React from "react";

const WeatherSwitch = (weather) => {
    switch (weather) {
        case 'Clouds' :
            return <i className="wi wi-owm-804"></i>
        default:
            return <div>맑음</div>
    }
};

const Weather = ({weatherData, error}) => {

    if(error) {
        return <div>에러 발생!</div>
    }

    return(
        <div>
            <div>
                국가 : {weatherData.country}
            </div>
            <div>
                도시 : {weatherData.city}
            </div>
            <div>
                날씨 : {WeatherSwitch(weatherData.weather)}
            </div>
            <div>
                습도 : {weatherData.humid}
            </div>
            <div>
                온도 : {weatherData.temp}
            </div>
        </div>
    );
};

export default Weather;