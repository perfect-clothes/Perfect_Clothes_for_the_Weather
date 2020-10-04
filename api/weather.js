// 모듈 추출
const express = require('express');
const request = require('request');
const router = express.Router();

// 서울, 대한민국 위치. default
const COORD_LOC = {
    "latitude": "37.58",
    "longitude": "127",
};

// 위치 설정 함수
function setLocation(req, res, next) {
    if (Object.keys(req.body).length == 0) {
        console.log('req is empty..');
        next();
    }
    else {
        COORD_LOC.latitude = req.body.latitude;
        COORD_LOC.longitude = req.body.longitude;
        next();
    }
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

function getWeather(req, res, next) {
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

    // api 호출
    request(OPTIONS, function (err, res, body) {
        weatherData.country = body.sys.country;
        weatherData.city = body.name;
        weatherData.weather = body.weather[0].main;
        weatherData.description = body.weather[0].description;
        weatherData.temp = body.main.temp;
        weatherData.humid = body.main.humidity;

        console.log('getWeather compelte..!');
        next();
    });
};

function sendData(req, res) {
    res.json(weatherData);
    console.log('sendData compelte..!');
};

router.get('/', setLocation, getWeather, sendData);

module.exports = router;