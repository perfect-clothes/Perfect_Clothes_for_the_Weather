import React from "react";
import {useSelector} from "react-redux";
import Recommend from "../components/Recommend";

const RecommendContainer = () => {
    const {clothesData, error, loading} = useSelector(({weather, loading}) => ({
        clothesData: weather.clothesData,
        error: weather.error,
        loading: loading['weather/LOAD_WEATHER']
    }));

    const clothesArray = [];

    //값이 빈 칸이 아닌 항목으로만 배열을 새로 만듦
    for (let key in clothesData) {
        if (clothesData[key] !== '') clothesArray.push(clothesData[key]);
    }

    return(
        <div>
            <Recommend
                clothesArray={clothesArray}
                error={error}
                loading={loading}
            />
        </div>
    );
};

export default RecommendContainer;