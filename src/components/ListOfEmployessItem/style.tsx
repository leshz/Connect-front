import styled from 'styled-components';

export const ListItemEmployee = styled.div`
  grid-column: 1 / 7;
  max-height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #ececec;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.17);
  transition: background-color 0.6s ease-in-out;
  &:hover {
    background-color: #f1f1f1;
  }
`;
export const Column = styled.div`
  width: 16%;
  text-align: center;
  margin: 5px 0;
  p {
    font-size: 18px;
    font-weight: 600;
    color: #011627;
  }
  span {
    font-size: 16px;
    font-weight: 100;
    color: #565656;
  }
  & img {
    width: 100%;
    max-width: 50px;
    margin: 0 auto;
    display: block;
    border-radius: 50%;
  }
  &.name {
      text-transform: capitalize;
  }
`;

export const Button = styled.button`
  border: none;
  padding: 5px 10px;
  margin: 0px 5px;
  border-radius: 5px;
  outline: none;
  cursor: pointer;
  transition: box-shadow 0.2s ease-in-out;

  &.edit {
    background-color: var(--green);
    box-shadow: 0px 0px 5px 0px rgb(46, 196, 182, 0);
    &:hover {
      box-shadow: 0px 0px 5px 0px rgb(46, 196, 182);
    }
  }
  &.delete {
    background-color: var(--red);
    &:hover {
      box-shadow: 0px 0px 5px 0px rgb(231, 29, 54);
    }
  }
`;
