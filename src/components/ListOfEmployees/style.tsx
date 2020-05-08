import styled from 'styled-components';

export const ListContainer = styled.div`
  margin: 5px 30px;
  padding: 15px;
  border-radius: 10px;
  grid-column-start: 4;
  grid-column-end: 13;
  grid-row-start: 2;
  grid-row-end: 4;
  /* border: 1px solid #0000004a; */
  /* box-shadow: 0px 0px 7px 5px rgba(0, 0, 0, 0.15); */
  color:#2d2d2d;
  display : grid;
  grid-template-columns : repeat(6,1fr);
  grid-template-rows:  min-content minmax(min-content, max-content) min-content;
  grid-row-gap: 15px;
`;

export const TopList = styled.div`
  grid-column: 1 / 7;
  grid-row: 2 / 2;
  display: flex;
  align-self:center;
  justify-content: space-between;
  border-bottom: 2px solid rgba(255, 159, 28, 0.39);
  padding-bottom: 12px;
  text-align:center;
  & input , & p {
    flex-basis: 16%;
    color: #011627;
  }
`;

export const AddEmployee = styled.button`
  font-size: 16px;
  background-color: var(--yellow);
  margin: 15px 0 0;
  border: 1px solid #ff9f1c;
  padding: 6px 12px;
  color: var(--white);
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0px 0px 2px 1px rgba(0,0,0,0);
  outline:none;
  grid-column: 6;
  transition: border-color .2s ease-in-out ,box-shadow .2s ease-in-out ;
  &:hover{
    border:1px solid rgba(0, 0, 0, 0.28);
    box-shadow: 0px 0px 2px 1px rgba(0,0,0,0.3)
  }
`;
