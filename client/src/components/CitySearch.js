import React, {useState} from "react";
import {useDispatch} from "react-redux";
import styled from 'styled-components';
import CityList from "../Assets/CityList";
import Modal from "./common/Modal";
import ContainerBlock from "./common/ContainerBlock";
import {saveCoords} from "../modules/coords";

const CitySearchBlock = styled(ContainerBlock)`
    margin-bottom: 60px;
`;

const StyledInput = styled.input`
    border: none;
    outline: none;
    width: 350px;
    height: 40px;
    padding: 0px 10px;
    border-radius: 5px 0px 0px 5px;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.1); 
    opacity: 0.75;
`;

const StyledButton = styled.button`
    background: #373a40;
    outline: none;
    border: none;
    border-radius: 0px 5px 5px 0px;
    color: white;
    padding: 10px 20px;
    height: 40px;
    cursor: pointer;
    opacity: 0.75;
    &:hover {
        background: black;
    }
    transition: 0.1s background;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.1); 
`;

const CitySearch = () => {
    const dispatch = useDispatch();
    const [city, setCity] = useState('');
    const [modal, setModal] = useState(false);

    const searchCity = city => {
        //입력 받은 도시를 CityList에서 찾아 도시 정보 반환
        const findingCity = CityList.find(c => c.name === city);
        return findingCity;
    };

    const onChange = e => {
        setCity(e.target.value);
    };

    const onSubmit = e => {
        e.preventDefault();
        const cityInfo = searchCity(city);
        if (!cityInfo) {
            //CityList에 해당하는 도시가 없을 경우
            setModal(true);
            return;
        }
        dispatch(saveCoords({latitude: cityInfo.latitude, longitude: cityInfo.longitude}));
        setCity('');
    };

    const onConfirm = () => {
        setCity('');
        setModal(false);
    };

    return (
        <>
            <CitySearchBlock>
                <form onSubmit={onSubmit}>
                    <StyledInput
                        placeholder="도시를 검색하세요. ex) 서울, Seoul"
                        onChange={onChange}
                        value={city}
                    />
                    <StyledButton type='submit'>검색</StyledButton>
                </form>
            </CitySearchBlock>
            <Modal visible={modal} onConfirm={onConfirm} title="검색 실패" description="도시 정보를 찾을 수 없습니다. 다시 검색해주세요."/>
        </>
    );

};

export default CitySearch;