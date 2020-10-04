// Express 기본 모듈 호출
const express = require('express');
const http = require('http');
const cors = require('cors');

// 모듈 호출 (./api)
let weather = require('./api/weather');

// Express 미들웨어 호출
const bodyParser = require('body-parser');
const static = require('serve-static');

// 웹 서버 생성
const app = express();
const server = http.createServer(app);

// 기본 속성 설정
app.set('port', process.env.PORT || 8080);

// bodyParser 사용
app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());

// 오류 처리
app.use(cors());

// 라우트 수행
app.use('/api', weather);

// 웹 서버 실행
server.listen(app.get('port'), function(){
    console.log('server start ...' + app.get('port'));
});