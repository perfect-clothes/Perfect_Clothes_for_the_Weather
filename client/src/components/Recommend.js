import React, {useState} from "react";
import styled from 'styled-components';
import ContainerBlock from "./common/ContainerBlock";
import TitleBlock from "./common/TitleBlock";
import Spinner from "./common/Spinner";
import RecommendModal from "./RecommendModal";

const RecommendBlock = styled.div`
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
    cursor: pointer;        
`;

const SpinnerBlock = styled.div `
    padding-top: 5px;
`;

//임시 데이터
/*
const clothesData = {
    top: '',
    bottom: '청바지',
    outer: '자켓',
    inner: '히트텍',
    item: '목도리'
};
*/
const Recommend = ({clothesArray, error, loading}) => {
    const [visible, setVisible] = useState(false);
    const [value, setValue] = useState('');

    if (error) {
        return (
            <ContainerBlock>
                <TitleBlock>
                    <h2>Recommendation</h2>
                </TitleBlock>
                <RecommendBlock>
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
                <TitleBlock>
                    <h2> Recommendation </h2>
                </TitleBlock>
                {loading && (
                    <RecommendBlock>
                        <SpinnerBlock>
                            <Spinner/>
                        </SpinnerBlock>
                    </RecommendBlock>
                )}
                {clothesArray && clothesArray.map((clothes, index) => (
                    <RecommendBlock key={index} onClick={onClick}>{clothes}</RecommendBlock>
                ))}
            </ContainerBlock>
            {visible ? (
                <RecommendModal value={value} onConfirm={onConfirm}/>
            ) : null}
        </>
    );
};

export default Recommend;