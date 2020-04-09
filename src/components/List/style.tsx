import styled from 'styled-components';

const ListContainer = styled.div`
  width: 100%;
  margin: 5px;
  padding: 15px;
  border-radius: 10px;
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 2;
  grid-row-end: 4;
  border: 1px solid #0000004a;
  box-shadow: 0px 0px 7px 5px rgba(0, 0, 0, 0.15);
  color:#2d2d2d;
`;

const Label = styled.label`
  display: block;
  margin: 20px 0px;
`;

const ProjectsTitle = styled.h3`
  font-size: 30px;
  text-align: center;
  font-weight: 100;
  text-transform:capitalize;
`;

export { ListContainer, Label, ProjectsTitle };
