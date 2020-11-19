// db 연결
const db = require('../util/mysql');

exports.clothesLookup = (req, res, next) => {
    if (!req.weatherData) {
        // error
        return res.status(400).json({ err: "API ERROR" });
    }

    let clothesData = { // 옷 데이터 기본 값
        top: '긴팔',
        bottom: '청바지'
    };

    db.query(`SELECT clothes_name, clothes_type FROM clothes WHERE min_temp <= '${req.weatherData.temp}' && max_temp >= '${req.weatherData.temp}'`, (err, result, fields) => {
        if(err) {
            return res.status(400).json({err: err});    
        }

        let outer = [];
        let top = [];
        let bottom = [];
        let item = [];
        let inner = [];

        for (let i = 0; i < result.length; i++) {
            if (result[i].clothes_type == 'outer') {
                outer.push(result[i].clothes_name);
            }
            else if (result[i].clothes_type == 'top') {
                top.push(result[i].clothes_name);
            }
            else if (result[i].clothes_type == 'bottom') {
                bottom.push(result[i].clothes_name);
            }
            else if (result[i].clothes_type == 'item') {
                item.push(result[i].clothes_name);
            }
            else if (result[i].clothes_type == 'inner') {
                inner.push(result[i].clothes_name);
            }
        } // for

        console.log(outer);
        console.log(top);
        console.log(bottom);
        console.log(item);
        console.log(inner);

        clothesData.outer = outer[Math.floor(Math.random()*outer.length)];
        clothesData.top = top[Math.floor(Math.random()*top.length)];
        clothesData.bottom = bottom[Math.floor(Math.random()*bottom.length)];
        clothesData.item = item[Math.floor(Math.random()*item.length)];
        clothesData.inner = inner[Math.floor(Math.random()*inner.length)];

        return res.status(200).json({
            weatherData: req.weatherData,
            clothesData: clothesData
        });
    });
};