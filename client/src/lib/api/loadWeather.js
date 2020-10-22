import client from "./client";

//현재 날씨 불러옴
export const load = ({latitude, longitude}) => client.post('/api/curWeather', {latitude, longitude});

//오늘의 모든 날씨 불러옴
export const loadAllWeather = ({latitude, longitude}) => client.post('/api/allWeather', {latitude, longitude});
