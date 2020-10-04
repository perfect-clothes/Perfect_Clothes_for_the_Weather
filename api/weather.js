// 모듈 추출
const express = require('express');
const request = require('request');
const router = express.Router();

// 서울, 대한민국 위치. default
const COORD_LOC = {
    "latitude": "37.58",
    "longitude": "127",
};

// api 설정
const API_KEY = "43ea79c81845dfc04efa811d2c3a59dc"
const API_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${COORD_LOC.latitude}&lon=${COORD_LOC.longitude}&appid=${API_KEY}&units=metric`

const OPTIONS = {
    uri: API_URL,
    method: 'GET',
    body: {
        key: 'value'
    },
    json: true
};

// 현재 날씨 데이터
let weatherData = {
    country: 'kr',
    city: 'seoul',
    weather: 'NULL',
    description: 'NULL',
    temp: 'NULL',
    humid: 'NULL'
};

function getWeatherData() {
    request(OPTIONS, function (err, res, body) {
        weatherData.country = body.sys.country;
        weatherData.city = body.name;
        weatherData.weather = body.weather[0].main;
        weatherData.description = body.weather[0].description;
        weatherData.temp = body.main.temp;
        weatherData.humid = body.main.humidity;

        //console.log(weatherData);

        router.get('/', function (req, res) {
            res.json(weatherData);
            //console.log('response compelte!');
        });
    });
};

module.exports = router;