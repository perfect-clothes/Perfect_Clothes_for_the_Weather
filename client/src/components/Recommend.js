import React, {useState} from "react";
import styled, {css} from 'styled-components';
import ContainerBlock from "./common/ContainerBlock";
import TitleBlock from "./common/TitleBlock";
import Spinner from "./common/Spinner";
import RecommendModal from "./RecommendModal";

const RecommendBlock = styled.div`
    background: white;
    width: 800px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.25rem;
    font-weight: 700;
    color: black;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
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
    cursor: pointer;     
    opacity: 0.75;
    
    @media screen and (max-width: 801px) {
        width: 500px;    
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

const SpinnerBlock = styled.div `
    padding-top: 5px;
`;

const Recommend = ({clothesArray, error, loading, hour}) => {
    const [visible, setVisible] = useState(false);
    const [value, setValue] = useState('');

    if (error) {
        return (
            <ContainerBlock>
                <TitleBlock time={hour}>
                    <h2>Recommendation</h2>
                </TitleBlock>
                <RecommendBlock time={hour}>
                    에러 발생!
                </RecommendBlock>
            </ContainerBlock>
        );
    }

    const onClick = e => {
        setValue(e.target.innerText);
        setVisible(true);
    };

    const onConfirm = () => {
        setVisible(false);
    };

    return (
        <>
            <ContainerBlock>
                <TitleBlock time={hour}>
                    <h2> Recommendation </h2>
                </TitleBlock>
                {loading && (
                    <RecommendBlock time={hour}>
                        <SpinnerBlock>
                            <Spinner/>
                        </SpinnerBlock>
                    </RecommendBlock>
                )}
                {clothesArray && clothesArray.map((clothes, index) => (
                    <RecommendBlock key={index} onClick={onClick} time={hour}>{clothes}</RecommendBlock>
                ))}
            </ContainerBlock>
            {visible ? (
                <RecommendModal value={value} onConfirm={onConfirm}/>
            ) : null}
        </>
    );
};

export default Recommend;