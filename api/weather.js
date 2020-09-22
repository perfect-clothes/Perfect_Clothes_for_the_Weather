// 모듈 추출
var express = require('express');
var request = require('request');
var router = express.Router();

// 서울, 대한민국 위치. default
const COORD_LOC = {
    "latitude": "37.58",
    "longitude": "127",
};

// api 설정
var API_KEY = "43ea79c81845dfc04efa811d2c3a59dc"
var API_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${COORD_LOC.latitude}&lon=${COORD_LOC.longitude}&appid=${API_KEY}&units=metric`

request(API_URL, {json: {key: 'value'}}, function(err, res, body){
    var data = {
        country: body.sys.country,
        city: body.name,
        data: data,
        weather: body.weather[0].main,
        temp: body.main.temp,
        humid: body.main.humidity
    };

    router.get('/', function(req, res){
        res.json(data);
    });
});

module.exports = router;
