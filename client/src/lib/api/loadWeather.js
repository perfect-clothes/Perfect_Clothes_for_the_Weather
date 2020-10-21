import client from "./client";


export const load = ({latitude, longitude}) => client.post('/api/curWeather', {latitude, longitude});
