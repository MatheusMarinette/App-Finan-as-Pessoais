import styled from 'styled-components';

export const Container = styled.div`
background: rgb(145,2,2);
background: linear-gradient(90deg, rgba(145,2,2,1) 0%, rgba(255,80,0,1) 50%, rgba(145,2,2,1) 100%);background: linear-gradient(90deg, rgba(145,2,2,1) 0%, rgba(168,50,4,1) 50%);
    position: fixed;
    height: 100%;
    top: 0px;
    left: 0px; 
    width: 300px;
    left: ${props => props.sidebar ? '0' : '-100%'};
    animation: showSiderbar .4s;

    > svg {
        position: fixed;
        color: white;
        width: 30px;
        height: 30px;
        margin-top: 32px;
        margin-left: 32px;
        cursor: pointer;

    }

    @keyframes showSiderbar {
        from {
            opacity: 0;
            width: 0;
        }
        to {
            opacity: 1;
            width: 300px;
        }
    }
`;

export const Content = styled.div`
    margin-top: 100px;

`;