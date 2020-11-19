import React from "react";
import styled from 'styled-components';
import WeatherIconSwitch from "../lib/WeatherIconSwitch";
import ContainerBlock from "./common/ContainerBlock";
import TitleBlock from "./common/TitleBlock";
import Spinner from "./common/Spinner";

//날씨
const WeatherBlock = styled.div`
    border: 1px solid black;
    background: white;
    border-radius: 4px;
    border: none;
    width: 500px;
    height: 200px;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
    color: #373a40;
    margin-bottom: 60px;
    display: grid;
    grid-template: 
        "Icon City City" 100px
        "Icon Temp Humid" 100px
        /2fr 1fr 1.5fr;
`;
//날씨 아이콘
const Icon = styled.div`
    grid-area: Icon;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 100px;
    padding-left: 20px;
`;
//도시 이름
const City = styled.div`
    grid-area: City;
    padding-top: 40px;
    font-size: 40px;
    font-weight: 600;
`;
//기온
const Temp = styled.div`
    grid-area: Temp;
    padding-top: 10px;
    font-size: 40px;
    font-weight: 500;
`;
//습도
const Humid = styled.div`
    grid-area: Humid;
    font-size: 30px;
    padding-top: 20px;
`;

const SpinnerBlock = styled.div `
    padding: 80px 230px;
`;
//임시 데이터
/*
const weatherData = {
    weather: 'Clouds',
    city: 'Seoul',
    country: 'kr',
    temp: 16,
    humid: 50
};
*/
const Weather = ({weatherData, error, loading, dateInfo}) => {
    const {year, month, date, day} = dateInfo;

    if (error) {
        return (
            <ContainerBlock>
                <TitleBlock>
                    <h2>{year}년 {month}월 {date}일 {day} </h2>
                </TitleBlock>
                <TitleBlock>
                    <h3>날씨를 불러올 수 없습니다.</h3>
                </TitleBlock>
            </ContainerBlock>
        );
    }

    return (
        <ContainerBlock>
            <TitleBlock>
                <h2>{year}년 {month}월 {date}일 {day} </h2>
            </TitleBlock>
            {loading ? (
                <WeatherBlock>
                    <SpinnerBlock>
                        <Spinner/>
                    </SpinnerBlock>
                </WeatherBlock>
            ) : (
                <WeatherBlock>
                    <Icon>
                        {WeatherIconSwitch(weatherData.weather)}
                    </Icon>
                    <City>{weatherData.city}</City>
                    <Temp>{weatherData.temp}°</Temp>
                    <Humid>
                        <i className='wi wi-raindrop'> {weatherData.humid}%</i>
                    </Humid>
                </WeatherBlock>
            )}
        </ContainerBlock>
    );
};

export default Weather;