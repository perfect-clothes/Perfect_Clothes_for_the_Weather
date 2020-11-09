import client from "./client";

//현재 날씨 불러옴
export const load = ({latitude, longitude}) => client.post('/api/curWeather', {latitude, longitude});