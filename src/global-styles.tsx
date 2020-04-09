import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;700&display=swap');
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-weight: normal;
  }
  :root{
    --black: #011627; 
    --white:#FDFFFC;
    --green:#2EC4B6;
    --red:#E71D36;
    --yellow:#FF9F1C;
  }
  a{
    color:var(--white);
    text-decoration:none;
  }
  li{
    list-style: none;
  }
  body{
    font-family: 'Rubik', sans-serif;
    color:var(--white);
  }
  html{
    background-color:#f9f9f9;
  }

`;
