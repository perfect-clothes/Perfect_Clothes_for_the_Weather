import React from "react";

const Weather = ({country, city, weather, date, temp, humid, error}) => {
    if(error) {
        return <div>에러가 발생했습니다.</div>
    }

    return(
        <div>
            {country},
            {city},
            {weather},
            {date},
            {temp},
            {humid}
        </div>
    );
};

export default Weather;