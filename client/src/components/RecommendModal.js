import React, {useState, useEffect} from "react";
import axios from 'axios';
import styled from 'styled-components';
import Spinner from "./common/Spinner";

const Background = styled.div`
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.25);
    display: flex;
    align-items: center;
    justify-content: center; 
    min-width: 540px;
`;

const Box = styled.div`
    width: 800px;
    height: 800px;
    padding: 1rem;
    background: white;
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.25);
    display: grid;
    grid-template: 
        "image image image" 250px
        "image image image" 250px
        "image image image" 250px
        /1fr 1fr 1fr; 
    img {
        padding: 0.5rem;
        width: 250px;
        height: 250px;
    }
    
    @media screen and (max-width: 801px) {
        width: 600px;
        height: 600px;
        display: grid;
        grid-template:
            "image image image" 180px
            "image image image" 180px
            "image image image" 180px
            /1fr 1fr 1fr;
        img {
            padding: 0.5rem;
            width: 180px;
            height: 180px;
        }    
    }    
`;

const SpinnerBlock = styled.div `
    padding: 380px 380px;
    @media screen and (max-width: 801px) {
        padding: 280px 280px;
    }    
`;

const RecommendModal = ({onConfirm, value}) => {
    const [loading, setLoading] = useState(false);
    const [images, setImages] = useState([]);
    const query = value;
    //검색 시작점을 다르게 하여 항상 다른 이미지 호출
    const start = Math.floor(Math.random() * 500 + 1);

    useEffect(() => {
        const getImages = async () => {
            setLoading(true);
            try {
                const response = await axios({
                    url: `https://cors-anywhere.herokuapp.com/https://openapi.naver.com/v1/search/image.json?query=${query}&display=9&`,
                    method: 'get',
                    headers: {
                        'X-Naver-Client-Id': process.env.REACT_APP_CLIENT_ID,
                        'X-Naver-Client-Secret': process.env.REACT_APP_CLIENT_SECRET
                    }
                });
                setImages(response.data.items);
                setLoading(false);
                console.log('done!');
            } catch (e) {
                console.error(e);
                setLoading(false);
            }
        }
        getImages();
    }, []);

    return (
        <Background onClick={onConfirm}>
            <Box>
                {loading ? (
                    <SpinnerBlock>
                        <Spinner/>
                    </SpinnerBlock>
                ) : (
                    images.map((image, index) => {
                        return (
                            <div key={index}>
                                <img src={image.thumbnail} alt='error'/>
                            </div>
                        )
                    })
                )}
            </Box>
        </Background>

    );
};

export default RecommendModal;