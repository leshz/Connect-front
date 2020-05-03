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
