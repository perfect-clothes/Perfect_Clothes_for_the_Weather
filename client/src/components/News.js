import React from "react";
import styled, {css} from 'styled-components';
import Replaced from "../lib/Replaced";
import ContainerBlock from "./common/ContainerBlock";
import TitleBlock from "./common/TitleBlock";
import Spinner from "./common/Spinner";

const NewsBlock = styled.div`
    background: white;
    border: none;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    width: 800px;
    height: auto;
    padding-bottom: 20px;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
    opacity: 0.8;
    &:nth-child(odd) {
        ${props => props.time > 6 && props.time < 19 ?      //7시부터 18시까지는 주간, 19시부터 6시까지 밤으로 설정
        css`
            background: #ebebeb;
        ` :
        css`
            background: #797a7e;
        `}      
    }
    &:nth-child(2) {
        border-radius: 4px 4px 0 0;
    }    
    &:last-child {
        margin-bottom: 60px;
        border-radius: 0 0 4px 4px;
    }
    p {
        margin-top: 30px;
        margin-left: 300px;
        font-size: 1.25rem;
        font-weight: 700;
    }
    @media screen and (max-width: 801px) {
        width: 500px;
        p {
            margin-left: 150px;
        }    
    }
    
    ${props => props.time > 6 && props.time < 19 ?      //7시부터 18시까지는 주간, 19시부터 6시까지 밤으로 설정
    css`
        background: white;
    ` :
    css`
        background: #373a40;
        color: white;
    `}            
`;

const Title = styled.div`
    padding-left: 30px;
    
    ${props => props.time > 6 && props.time < 19 ?      //7시부터 18시까지는 주간, 19시부터 6시까지 밤으로 설정
    css`
        a {
            color: black;
        }
    ` :
    css`
        a {
            color: white;
        }
    `}      
`;

const Description = styled.div`
    padding: 0px 30px;
    font-weight: 500;
`;

const SpinnerBlock = styled.div`
    padding: 30px 380px;
`;

const News = ({newsData, error, loading, hour}) => {
    //에러 처리
    if (error) {
        return (
            <ContainerBlock>
                <TitleBlock time={hour}>
                    <h2>News</h2>
                </TitleBlock>
                <NewsBlock time={hour}>
                    <p>뉴스를 불러올 수 없습니다.</p>
                </NewsBlock>
            </ContainerBlock>
        );
    }

    return (
        <ContainerBlock>
            <TitleBlock time={hour}>
                <h2>News</h2>
            </TitleBlock>
            {loading && (
                <NewsBlock time={hour}>
                    <SpinnerBlock>
                        <Spinner/>
                    </SpinnerBlock>
                </NewsBlock>
            )}
            {newsData && newsData.map((news, index) => (
                <NewsBlock key={index} time={hour}>
                    <Title time={hour}>
                        <a href={news.link} target='_blank'>
                            <h3>{Replaced(news.title)}</h3>
                        </a>
                    </Title>
                    <Description>
                        {Replaced(news.description)}
                    </Description>
                </NewsBlock>
            ))}
        </ContainerBlock>
    );
};

export default News;