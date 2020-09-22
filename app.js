// Express 기본 모듈 호출
var express = require('express');
var http = require('http');
var cors = require('cors');

// Express 미들웨어 호출
var bodyParser = require('body-parser');
var static = require('serve-static');

// 웹 서버 생성
var app = express();
var server = http.createServer(app);

// 기본 속성 설정
app.set('port', process.env.PORT || 8080);

// bodyParser 사용
app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());

// 오류 처리
app.use(cors());

// 라우트 수행
app.use('/api', require('./api/weather'));

// 웹 서버 실행
server.listen(app.get('port'), function(){
    console.log('server start ...' + app.get('port'));
});