import React from "react";
import styled from 'styled-components';

const ContainerBlock = styled.div `
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
    align-items: center;
    justify-content: center;
`;

const TitleBlock = styled.div `
    background: white;
    border-radius: 4px;
    border: none;
    width: 500px;
    height: 50px;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.125rem;
    color: #373a40;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
`;

const RecommendBlock = styled.div `
    background: white;
    width: 500px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.25rem;
    font-weight: 700;
    color: #373a40;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
    :nth-child(odd) {
        background: #ebebeb;
    }
    :nth-child(2) {
        border-radius: 4px 4px 0 0;
    }    
    :last-child {
        margin-bottom: 700px;
        border-radius: 0 0 4px 4px;
    }        
`;

//임시 데이터
const clothesData = {
    top: '',
    bottom: '청바지',
    outer: '자켓',
    inner: '히트텍',
    item: '목도리'
};

const Recommend = (/*{clothesData, error}*/) => {
    //에러 넘어올 경우 구현해야함

    const clothesArray = [];

    //값이 빈 칸이 아닌 항목으로만 배열을 새로 만듦
    for(let key in clothesData) {
        if(clothesData[key] !== '') clothesArray.push(clothesData[key]);
    };

    return(
        <ContainerBlock>
            <TitleBlock>
                <h2>Recommendation</h2>
            </TitleBlock>
            {clothesArray.map(clothes => (
                <RecommendBlock>{clothes}</RecommendBlock>
            ))}
        </ContainerBlock>
    );
};

export default Recommend;