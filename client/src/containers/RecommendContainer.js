import React from "react";
import {useSelector} from "react-redux";
import Recommend from "../components/Recommend";

const RecommendContainer = () => {
    const {clothesData, error, loading} = useSelector(({weather, loading}) => ({
        clothesData: weather.clothesData,
        error: weather.error,
        loading: loading['weather/LOAD_WEATHER']
    }));

    return(
        <div>
            <Recommend
                clothesData={clothesData}
                error={error}
                loading={loading}
            />
        </div>
    );
};

export default RecommendContainer;