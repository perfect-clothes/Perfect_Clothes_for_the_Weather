import client from "./client";

//오늘의 모든 날씨 불러옴
export const loadAllWeather = ({latitude, longitude}) => client.post(`${process.env.REACT_APP_SERVER_URL}/api/allWeather`, {latitude, longitude});