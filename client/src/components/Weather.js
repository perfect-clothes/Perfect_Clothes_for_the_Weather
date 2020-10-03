import React from "react";

const WeatherSwitch = (weather) => {
    switch (weather) {
        case 'Thunderstorm':
            return <i className="wi wi-owm-200"></i>
        case 'Drizzle':
            return <i className="wi wi-owm-300"></i>
        case 'Rain':
            return <i className="wi wi-owm-500"></i>
        case 'Snow':
            return <i className="wi wi-owm-600"></i>
        case 'Mist':
            return <i className="wi wi-owm-701"></i>
        case 'Smoke':
            return <i className="wi wi-owm-711"></i>
        case 'Haze':
            return <i className="wi wi-owm-721"></i>
        case 'Dust':
            return <i className="wi wi-owm-731"></i>
        case 'Fog':
            return <i className="wi wi-owm-741"></i>
        case 'Sand':
            return <i className="wi wi-owm-761"></i>
        case 'Dust':
            return <i className="wi wi-owm-761"></i>
        case 'Ash':
            return <i className="wi wi-owm-762"></i>
        case 'Squall':
            return <i className="wi wi-owm-762"></i>
        case 'Tornado':
            return <i className="wi wi-owm-781"></i>
        case 'Clear':
            return <i className="wi wi-owm-800"></i>
        case 'Clouds':
            return <i className="wi wi-owm-804"></i>
        default:
            return <div>아이콘을 불러올 수 없습니다.</div>
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
