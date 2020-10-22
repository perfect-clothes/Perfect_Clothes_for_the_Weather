// 모듈 추출
const express = require('express');
const request = require('request');

const router = express.Router();

// getDate() : 현재 날짜와 시간을 구하는 함수
let getDate = () => {
    let rawDate = new Date();

    let year = rawDate.getFullYear();
    let month = rawDate.getMonth() + 1;
    let date = rawDate.getDate();
    let time = rawDate.getHours();

    if (String(month).length == 1) {
        month = '0' + month;
    }
    if (String(time).length == 1) {
        time = '0' + time;
    }

    let today = year + '-' + month + '-' + date + ' ' + time;

    return today;
}

// getWeather() : 날씨 가져오는 콜백
let getWeather = (req, res, next) => {
    if (!req) {
        return res.status(400).json({ err: "REQUEST ERROR!" });
    }

    const latitude = req.body.latitude; // 위도
    const longitude = req.body.longitude; // 경도
    const API_KEY = process.env.WEATHER_API_KEY // API key
    const API_URL = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric` // API URL
    const OPTIONS = { // API 요청 옵션
        uri: API_URL,
        method: 'GET',
        body: {
            key: 'value'
        },
        json: true
    };

    let allWeatherData = [];
    let today = getDate();

    request(OPTIONS, (error, response, body) => {
        if (!error && response.statusCode == 200) {
            for (let i = 0; i < body.list.length; i++) {
                let date = String(body.list[i].dt_txt).substring(0, 13);

                if (date >= today) {
                    let weatherData = {
                        date: String(date).substring(0, 10),
                        time: 'NULL',
                        weather: 'NULL',
                        description: 'NULL',
                        temp: 'NULL',
                        humid: 'NULL',
                    }

                    weatherData.time = String(body.list[i].dt_txt).substring(11, 19);
                    weatherData.weather = body.list[i].weather[0].main;
                    weatherData.description = body.list[i].weather[0].description;
                    weatherData.temp = body.list[i].main.temp;
                    weatherData.humid = body.list[i].main.humidity;

                    //console.log(weatherData);
                    allWeatherData.push(weatherData);
                }

                if (allWeatherData.length == 8) break;
            }
            //console.log(allWeatherData);
            return res.status(200).send(allWeatherData);
        } else {
            res.status(response.statusCode).end();
            console.log('error = ' + response.statusCode);
        }
    })
};

router.post('/', getWeather);

module.exports = router;