import React from 'react';
import Main from "./pages/Main";
import {Route} from 'react-router-dom';
import styled, {css} from 'styled-components';
import night from './Assets/background/night.png';
import daytime from './Assets/background/daytime.png';
import {getTime} from "./lib/GetDateTime";
import {Helmet} from "react-helmet-async";

const ContainerBlock = styled.div` 
    ${props => props.time > 6 && props.time < 19 ?      //7시부터 18시까지는 주간, 19시부터 6시까지 밤으로 배경 설정
    css`
        background-image: url(${daytime});
    ` :
    css`
        background-image: url(${night});
    `}
    background-size: cover;
    min-width: 540px;
`;

const App = () => {
    //현재 시간을 불러옴
    const {hour} = getTime();

    return (
        <>
            <Helmet>
                <title>Weather?Wear!</title>
            </Helmet>
            <ContainerBlock time={hour}>
                <Route component={Main} path='/' exact/>
            </ContainerBlock>
        </>
    );
}


export default App;