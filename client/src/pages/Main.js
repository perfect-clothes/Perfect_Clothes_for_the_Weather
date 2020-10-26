import React, {useEffect} from "react";
import WeatherContainer from "../containers/WeatherContainer";
import Header from "../components/Header";
import CitySearch from "../components/CitySearch";
import RecommendContainer from "../containers/RecommendContainer";
import AllWeatherContainer from "../containers/AllWeatherContainer";
import NewsContainer from "../containers/NewsContainer";
import {useDispatch} from "react-redux";
import {saveCoords} from "../modules/coords";

const Main = () => {
    //테스트 후 원래대로 변경
    const dispatch = useDispatch();
    //기본 위치 설정
    const defaultLatitude = 37.58;
    const defaultLongitude = 127;

    //위치 정보를 불러와 저장
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(function(pos) {
            //사용자가 위치 권한을 허용했을 경우
            const latitude = pos.coords.latitude;
            const longitude = pos.coords.longitude;
            dispatch(saveCoords({latitude, longitude}));
        }, function(e){
            //사용자가 위치 권한을 거부했을 경우 기본값 사용
            dispatch(saveCoords({defaultLatitude, defaultLongitude}));
            console.log(e);
        });
    }, []);

    return(
        <>
            <Header/>
            <CitySearch/>
            <WeatherContainer/>
            <RecommendContainer/>
            <AllWeatherContainer/>
            <NewsContainer/>
        </>
    );
}

export default Main;
