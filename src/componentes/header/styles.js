import styled from "styled-components";

export const Container = styled.div`
    
    height: 150px;
    
    background: rgb(145,2,2);
    background: linear-gradient(90deg, rgba(145,2,2,1) 0%, rgba(255,80,0,1) 51%, rgba(145,2,2,1) 100%);

`;
export const Header = styled.h1``;

export const Title = styled.div`
padding-top: 20px;
color: black;
font-size: 45px 
`;
export const Menu = styled.div`
    height: 100px;
    display: flex;
    background: rgb(145,2,2);
    background: linear-gradient(90deg, rgba(145,2,2,1) 0%, rgba(255,80,0,1) 51%, rgba(145,2,2,1) 100%);
    box-shadow: 0 0 10px 3px;
    
     > svg {
        position: fixed;
        color: white;
        width: 30px;
        height: 30px;
        margin-top: 32px;
        margin-left: 32px;
        cursor: pointer;
        margin: 50px;
        background-color: Black;
        
    }
`;


export default styled;