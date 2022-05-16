import {createGlobalStyle} from "styled-components";

const Global = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    width: 100vw;
    height: 100vw;
    font-family: 'poppins', 'sans-serif';
    background-color: #f2f2f2;

}

`;
export default Global;
