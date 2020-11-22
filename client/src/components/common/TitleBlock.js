import styled, {css} from 'styled-components';

const TitleBlock = styled.div `
    border-radius: 4px;
    border: none;
    width: 800px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.125rem;
    opacity: 0.75;
    font-weight: bold;
    ${props => props.time > 6 && props.time < 19 ?      //7시부터 18시까지는 주간, 19시부터 6시까지 밤으로 설정
    css`
        color: black;
    ` :
    css`
        color: white;
    `}
    
    @media screen and (max-width: 801px) {
        width: 500px;    
    }    
`;

export default TitleBlock;