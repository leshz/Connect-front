
import styled from 'styled-components';

export const ListItem = styled.li`
  text-align:center;
  padding: 10px 0;
  font-size:22px;
  margin: 15px 0;
  border-radius: 5px;
  border:1px solid #011627;
  cursor: pointer;
  transition: all .2s ease-in-out ;
  &:hover, &:focus{
    background-color: #011627;
    color:#FFF;
  }
  &.active{
    background-color:var(--black);
    color:var(--white);
  }
`;

export const Title = styled.p`

  text-transform:capitalize;

`;