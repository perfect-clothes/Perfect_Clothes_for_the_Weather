import React from "react";
import styled from 'styled-components';
import WeatherIconSwitch from "../lib/WeatherIconSwitch";
import ContainerBlock from "./common/ContainerBlock";
import TitleBlock from "./common/TitleBlock";
import Spinner from "./common/Spinner";

const AllWeatherBlock = styled.div`
    background: white;
    border-radius: 4px;
    border: none;
    display: inline-flex;
    align-items: center;
    justify-content: start;
    width: 800px;
    height: 250px;
    margin-bottom: 60px;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
    overflow: auto;
    p {
        padding-left: 300px;
        font-size: 1.25rem;
        font-weight: 700;
        color: #373a40;
    }
    @media screen and (max-width: 801px) {
        width: 500px;
        p {
            padding-left: 150px;
        }    
    }       
`;

const WeatherInfoBlock = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #373a40;
    height: 200px;
    margin: 5px;
    padding: 20px 20px;
`;

const TimeBlock = styled.div`
    display: flex;
    height: 30px;
    font-size: 1.5rem;
    font-weight: 500;
    margin-bottom: 10px;
`;

const IconBlock = styled.div`
    display: flex;
    height: 100px;
    font-size: 80px;
`;

const TempBlock = styled.div`
    display: flex;
    height: 25px;
    font-size: 1.5rem;
    margin-bottom: 5px;
`;

const HumidBlock = styled.div`
    display: flex;
    height: 25px;
    width: 80px;
    font-size: 1.5rem;
`;

//임시 데이터
/*
const allWeatherData = [
    {
        time: "15:00:00",
        weather: "Clear",
        temp: 15,
        humid: 60
    },
    {
        time: "18:00:00",
        weather: "Clouds",
        temp: 15,
        humid: 50
    },
    {
        time: "21:00:00",
        weather: "Fog",
        temp: 14,
        humid: 50
    },
    {
        time: "24:00:00",
        weather: "Fog",
        temp: 13,
        humid: 50
    },
    {
        time: "03:00:00",
        weather: "Tornado",
        temp: 13,
        humid: 50
    },
    {
        time: "06:00:00",
        weather: "Tornado",
        temp: 12,
        humid: 40
    },
    {
        time: "09:00:00",
        weather: "Clear",
        temp: 14,
        humid: 40
    },
    {
        time: "12:00:00",
        weather: "Clear",
        temp: 15,
        humid: 40
    }
]
*/
const AllWeather = ({allWeatherData, error, loading}) => {

    if (error) {
        return (
            <ContainerBlock>
                <TitleBlock>
                    <h2>Today's weather</h2>
                </TitleBlock>
                <AllWeatherBlock>
                    <p>날씨를 불러올 수 없습니다.</p>
                </AllWeatherBlock>
            </ContainerBlock>
        );
    }

    return (
        <ContainerBlock>
            <TitleBlock>
                <h2>Today's weather</h2>
            </TitleBlock>
            {loading ? (
                <AllWeatherBlock>
                    <Spinner/>
                </AllWeatherBlock>
            ) : (
                <AllWeatherBlock>
                    {allWeatherData.map((data, index) => (
                        <WeatherInfoBlock key={index}>
                            <TimeBlock>{data.time.slice(0, 5)}</TimeBlock>
                            <IconBlock>
                                {WeatherIconSwitch(data.weather)}
                            </IconBlock>
                            <TempBlock>{data.temp}°</TempBlock>
                            <HumidBlock>
                                <i className='wi wi-raindrop'> {data.humid}%</i>
                            </HumidBlock>
                        </WeatherInfoBlock>
                    ))}
                </AllWeatherBlock>
            )}
        </ContainerBlock>
    );
};

export default AllWeather;