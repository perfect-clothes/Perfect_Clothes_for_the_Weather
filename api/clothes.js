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

        for (let i = 0; i < result.length; i++) {
            if (result[i].clothes_type == 'outer') {
                clothesData.outer = result[i].clothes_name;
            }
            else if (result[i].clothes_type == 'top') {
                clothesData.top = result[i].clothes_name;
            }
            else if (result[i].clothes_type == 'bottom') {
                clothesData.bottom = result[i].clothes_name;
            }
            else if (result[i].clothes_type == 'item') {
                clothesData.item = result[i].clothes_name;
            }
            else if (result[i].clothes_type == 'inner') {
                clothesData.inner = result[i].clothes_name;
            }
        } // for

        return res.status(200).json({
            weatherData: req.weatherData,
            clothesData: clothesData
        });
    })
}