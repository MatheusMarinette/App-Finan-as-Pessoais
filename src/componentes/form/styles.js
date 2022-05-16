
import styled from "styled-components";

export const Container = styled.div`
    max-width: 1120px;
    width: 98%;
    margin: 20px auto;
    display: flex;
    gap: 10px;
    justify-content: space-around;
    background-color: #fff;
    box-shadow: 0px 0px 5px #ccc;
    border-radius: 5px;
    padding: 15px 0px;

    @media (max-width: 750px) {
        display: grid;
    }
    `;

    export const InputContent = styled.div`
    display: flex;
    flex-direction: column;
    `;

    export const Label = styled.label``;

    export const Input = styled.input`
    outline: none;
    border-radius: 5px;
    padding: 5px 10px;
    font-size: 15px;
    border: 1px solid #ccc;
    
    `;

    export const RadioGroup = styled.div`
    display: flex;
    align-items: center;
    
    input {
        margin-left:20px;
        margin-right: 5px;
        accent-color: black;
        margin-top: 0;
    }
    `;

    export const Button = styled.button`
    padding: 5px 30px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    color: white;
    background: rgb(145,2,2);
    background: linear-gradient(90deg, rgba(145,2,2,1) 0%, rgba(255,80,0,1) 51%, rgba(145,2,2,1) 100%);
    cursor: pointer;
    `;

export default styled;