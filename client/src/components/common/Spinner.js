import styled from 'styled-components';

//loading animation
const Spinner = styled.div `
    width: 30px;
    height: 30px;
    margin: 0 auto 1rem;
    border: 3px solid #000000; 
    border-radius: 50%; 
    border-left-color: transparent; 
    border-right-color: transparent;
    
    -webkit-animation:spin 1000ms infinite linear; 
    -moz-animation:spin 1000ms infinite linear; 
    -ms-animation:spin 1000ms infinite linear; 
    animation:spin 1000ms infinite linear;

    @-webkit-keyframes spin { 100%{ -webkit-transform: rotate(360deg); } } 
    @-moz-keyframes spin { 100%{ -moz-transform: rotate(360deg); } } 
    @-ms-keyframes spin { 100%{ -ms-transform: rotate(360deg); } } 
    @keyframes spin { 100%{ transform: rotate(360deg); }
`;

export default Spinner;