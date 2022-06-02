import styled from 'styled-components';

const ContainersMenu = styled.div`
    height: 100px;
    display: flex;
    background: rgb(145,2,2);
    background: linear-gradient(90deg, rgba(145,2,2,1) 0%, rgba(255,80,0,1) 51%, rgba(145,2,2,1) 100%);
    

    > svg {
        position: fixed;
        color: white;
        width: 30px;
        height: 30px;
        margin-top: 32px;
        margin-left: 32px;
        cursor: pointer;
    }
`;
export default ContainersMenu;