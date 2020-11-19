// 모듈 추출
const express = require('express');
const request = require('request');
const clothes = require('./clothes');

const router = express.Router();


// getWeather() : 날씨 가져오는 콜백
let getWeather = (req, res, next) => {
    if (!req) {
        return res.status(400).json({ err: "REQUEST ERROR!" });
    }

    const latitude = req.body.latitude; // 위도
    const longitude = req.body.longitude; // 경도
    const API_KEY = process.env.WEATHER_API_KEY // API key
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric` // API URL
    const OPTIONS = { // API 요청 옵션
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
        humid: 'NULL',
    };

    // API 호출
    request(OPTIONS, (error, response, body) => {
        if (!error && response.statusCode == 200) {
            weatherData.country = body.sys.country;
            weatherData.city = body.name;
            weatherData.weather = body.weather[0].main;
            weatherData.description = body.weather[0].description;
            weatherData.temp = body.main.temp;
            weatherData.humid = body.main.humidity;

            req.weatherData = weatherData; // 다음 콜백 req 값음 지정
            // req.body = weatherData (X)
            // req 내부에 원래 있던 변수 쓰면 안 됨. 새로 만들어야 함
            // 항상 체크 필요 (다음 콜백에서)

            next();

        } else {
            res.status(response.statusCode).end();
            console.log('error = ' + response.statusCode);
        }
    });
};

router.post('/', getWeather, clothes.clothesLookup);

module.exports = router;