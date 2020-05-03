import styled from 'styled-components';

export const Input = styled.div`
  margin: 15px 0;
  & input {
    outline: none;
    display: block;
    border: 1px solid var(--black);
    width: 100%;
    font-size: 16px;
    padding: 5px 5px;
    border-radius: 5px;
    color: #000;
    &:focus {
      border: 1px solid var(--yellow);
    }
  }
  & select {
    outline: none;
    width: 100%;
    display: block;
    font-size: 16px;
    &:focus {
      border: 1px solid var(--yellow);
    }
  }
`;

export const Title = styled.h2`
  color: var(--yellow);
`;

export const ButtonS = styled.button`
  font-size: 16px;
  background-color: var(--green);
  border: 1px solid var(--green);
  padding: 6px 12px;
  margin: 2px 15px 0 0px;
  color: var(--white);
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0);
  outline: none;
  transition: border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
`;
export const ButtonE = styled.button`
  font-size: 16px;
  background-color: var(--red);
  margin: 2px 15px 0 0px;
  border: 1px solid var(--red);
  padding: 6px 12px;
  color: var(--white);
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0);
  outline: none;
  transition: border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
`;
