import React from "react";
import styled from 'styled-components';
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
    &:nth-child(odd) {
        background: #ebebeb;
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
        color: #373a40;
    }
    @media screen and (max-width: 801px) {
        width: 500px;
        p {
            margin-left: 150px;
        }    
    }        
`;

const Title = styled.div`
    padding-left: 30px;
    a {
        color: #373a40;
    }   
`;

const Description = styled.div`
    padding: 0px 30px;
    font-weight: 500;
`;

const SpinnerBlock = styled.div `
    padding: 30px 380px;
`;

//임시 데이터
/*
const newsData = [
    {
        title: "[<b>날씨</b>] 비구름 뒤로 황사 유입 중...오후 찬바람",
        originalLink: "https://imnews.imbc.com/replay/2020/nwtoday/article/5948680_32531.html",
        link: "https://news.naver.com/main/read.nhn?mode=LSD&mid=sec&sid1=102&oid=214&aid=0001074446",
        description: "경기 북부와 영서 북부 쪽에는 올가을 첫 한파특보마저 내려질 가능성이 있으니까요. 건강관리에 더욱더 유념하시고 농작물 피해 없도록 대비도 잘해주셔야겠습니다. <b>날씨</b>였습니다. 김가영 캐스터",
    },
    {
        title: "[<b>날씨</b> 미세먼지이어 황사...공기질 '매우 나쁨'",
        originalLink: "http://www.joseilbo.com/news/news_read.php?uid=408731&=class=33&grp=",
        link: "https://news.naver.com/main/read.nhn?mode=LSD&mid=sec&sid1=102&oid=123&aid=0002232798",
        description: "&lt; <b>날씨</b> 전망 &gt; (하늘상태) 오늘(22일)은 전국이 구름많다가 중부지방은 오전에, 남부지방은 저녁에 맑아지겠다. 내일(23일)과 모레(24일) 전국이 대체로 맑겠으나, 강원영동은 내일 오전에, 전라서해안과 제주도는..."
    }
];
*/
const News = ({newsData, error, loading}) => {
    //에러 처리

    if (error) {
        return (
            <ContainerBlock>
                <TitleBlock>
                    <h2>News</h2>
                </TitleBlock>
                <NewsBlock>
                    <p>뉴스를 불러올 수 없습니다.</p>
                </NewsBlock>
            </ContainerBlock>
        );
    }

    return (
        <ContainerBlock>
            <TitleBlock>
                <h2>News</h2>
            </TitleBlock>
            {loading && (
                <NewsBlock>
                    <SpinnerBlock>
                        <Spinner/>
                    </SpinnerBlock>
                </NewsBlock>
            )}
            {newsData && newsData.map((news,  index) => (
                <NewsBlock key={index}>
                    <Title>
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