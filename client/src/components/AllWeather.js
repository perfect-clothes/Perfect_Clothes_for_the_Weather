import React from "react";
import styled, {css} from 'styled-components';
import WeatherIconSwitch from "../lib/WeatherIconSwitch";
import ContainerBlock from "./common/ContainerBlock";
import TitleBlock from "./common/TitleBlock";
import Spinner from "./common/Spinner";

const AllWeatherBlock = styled.div`
    background: white;
    border-radius: 4px;
    border: none;
    color: black;
    display: inline-flex;
    align-items: center;
    justify-content: start;
    width: 800px;
    height: 250px;
    margin-bottom: 60px;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
    opacity: 0.75;
    overflow: auto;
    p {
        padding-left: 300px;
        font-size: 1.25rem;
        font-weight: 700;
    }
    @media screen and (max-width: 801px) {
        width: 500px;
        p {
            padding-left: 150px;
        }    
    }
    
    ${props => props.time > 6 && props.time < 19 ?      //7시부터 18시까지는 주간, 19시부터 6시까지 밤으로 설정
    css`
        background: white;
    ` :
    css`
        background: #373a40;
        color: white;
    `}           
`;

const WeatherInfoBlock = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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

const AllWeather = ({allWeatherData, error, loading, hour}) => {

    if (error) {
        return (
            <ContainerBlock>
                <TitleBlock time={hour}>
                    <h2>Today's weather</h2>
                </TitleBlock>
                <AllWeatherBlock time={hour}>
                    <p>날씨를 불러올 수 없습니다.</p>
                </AllWeatherBlock>
            </ContainerBlock>
        );
    }

    return (
        <ContainerBlock>
            <TitleBlock time={hour}>
                <h2>Today's weather</h2>
            </TitleBlock>
            {loading ? (
                <AllWeatherBlock time={hour}>
                    <Spinner/>
                </AllWeatherBlock>
            ) : (
                <AllWeatherBlock time={hour}>
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