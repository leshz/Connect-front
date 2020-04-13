import styled from 'styled-components';

export const ContainerWrap = styled.div`
  display: grid;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  grid-template-columns: repeat(12,1fr);
  grid-auto-rows: minmax(min-content, max-content);
  grid-gap: 5px 10px;
`;