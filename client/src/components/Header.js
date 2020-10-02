import React from "react";
import styled from 'styled-components';

const HeaderBlock = styled.div `
    border-bottom: 1.5px solid black;
    text-align: center;
    padding: 30px 0;
    margin-bottom: 2rem;
    font-size: 2rem;
`;

const Header = () => {
    return(
        <HeaderBlock>
            Weather? Wear!
        </HeaderBlock>
    );
};

export default Header;