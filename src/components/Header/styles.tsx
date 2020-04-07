import styled from 'styled-components';

const Header = styled.header`
  width:100%;
  display:flex;
  background:var(--black);
  min-height:80px;
  align-items: center;
  justify-content: space-between;
  padding: 10px 15px;
  box-shadow: 0px 0px 31px -12px rgba(0,0,0,0.75);
  & h1{
    color: var(--yellow);
  }
`;

export { Header };
