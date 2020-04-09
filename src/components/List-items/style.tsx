
import styled from 'styled-components';

export const ListItem = styled.li`
  text-align:center;
  padding: 10px 0;
  font-size:22px;
  margin: 15px 0;
  border-radius: 5px;
  border:1px solid #cacaca;
  cursor: pointer;
  &:hover, &:focus{
    background-color: #cacaca;
  }
  &.active{
    background-color:var(--green)
  }
`;

export const Title = styled.p`

  text-transform:capitalize;

`;