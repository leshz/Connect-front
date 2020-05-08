import styled from 'styled-components';

export const Title = styled.h2`
  color: var(--yellow);
`;

export const Message = styled.p`
  color: var(--black);
  margin: 25px 0;

  & b {
    font-weight: bold;
  }
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
