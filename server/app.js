const express = require('express');
const http = require('http');

require('dotenv').config();
const cors = require('cors');

let corsOptions = {
    origin: process.env.ORIGIN,
    credentials: true
};

// router (./api)
let curWeather = require('./api/curWeather');
let allWeather = require('./api/allWeather');
let news = require('./api/news');

// Express 미들웨어 호출
const bodyParser = require('body-parser');
const static = require('serve-static');

// 웹 서버 생성
const app = express();
const server = http.createServer(app);

// bodyParser 사용
app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());

// 오류 처리
app.use(cors(corsOptions));

// 라우트 수행
app.use('/api/curWeather', curWeather);
app.use('/api/allWeather', allWeather);
app.use('/api/news', news);

// 웹 서버 실행
server.listen(process.env.PORT, () => {
    console.log(`server start ... ${process.env.PORT}`);
});