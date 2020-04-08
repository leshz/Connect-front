import styled from 'styled-components';

export const ContainerWrap = styled.div`
  display: grid;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  grid-template-columns: repeat(12,1fr);
  grid-template-rows: 30px 1fr 1fr;
  grid-gap: 5px 10px;
  background-color:#f9f9f9;
`;