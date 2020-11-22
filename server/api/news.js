// 모듈 추출
const express = require('express');
const request = require('request');

const router = express.Router();

let getNews = (req, res, next) => {
    if (!req) {
        return res.status(400).json({ err: "REQUEST ERROR!" });
    }

    // api 설정
    const CLIENT_ID = process.env.NEWS_API_ID;
    const CLIENT_SECRET = process.env.NEWS_API_SECRET;
    const PARAMETER = {
        query: encodeURI(req.body.query),
        display: 10,
        start: 1,
        sort: 'sim'
    };
    
    const URL = `https://openapi.naver.com/v1/search/news.json?query=${PARAMETER.query}&display=${PARAMETER.display}&start=${PARAMETER.start}&sort=${PARAMETER.sort}`;
    const OPTION = {
        uri: URL,
        headers: {
            'X-Naver-Client-Id': CLIENT_ID,
            'X-Naver-Client-Secret': CLIENT_SECRET
        },
        method: 'GET',
        json: true
    };

    let newsData = [];

    request(OPTION, (error, response, body) => {
        if(!error && response.statusCode == 200) {
            for(let i=0; i<body.items.length; i++) {
                newsData.push(body.items[i]);
            }

            return res.status(200).send(newsData);
        } else {
            res.status(response.statusCode).end();
            console.log('error = ' + response.statusCode);
        }
    });
};

router.post('/', getNews);

module.exports = router;