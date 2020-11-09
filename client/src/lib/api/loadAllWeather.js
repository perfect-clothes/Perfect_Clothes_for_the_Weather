import client from "./client";

//오늘의 모든 날씨 불러옴
export const loadAllWeather = ({latitude, longitude}) => client.post('/api/allWeather', {latitude, longitude});
