import React from "react";
import styled, {css} from 'styled-components';
import {getTime} from "../lib/GetDateTime";

const HeaderBlock = styled.div `
    border: none;
    text-align: center;
    padding: 60px 0;
    margin-bottom: 1rem;
    font-size: 3.5rem;
    font-weight: bold;
    opacity: 0.75;
    ${props => props.time > 6 && props.time < 19 ?      //7시부터 18시까지는 주간, 19시부터 6시까지 밤으로 설정
    css`
        color: black;
    ` :
    css`
        color: white;
    `}
`;

const Header = () => {
    const {hour} = getTime()

    return(
        <HeaderBlock time={hour}>
            Weather? Wear!
        </HeaderBlock>
    );
};

export default Header;