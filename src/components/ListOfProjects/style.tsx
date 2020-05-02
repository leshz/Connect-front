import styled from 'styled-components';

const ListContainer = styled.div`
  width: 100%;
  margin: 5px;
  padding: 15px;
  border-radius: 10px;
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 2;
  grid-row-end: auto;
  border: 1px solid #a2a2a2;
  box-shadow: 0px 0px 7px 5px rgba(0, 0, 0, 0.15);
  text-align:center;
  color:#2d2d2d;
`;

const Label = styled.label`
  display: block;
  margin: 20px 0px;
  font-size: 20px;
  font-weight: bold;
  color: var(--yellow);
`;

const ProjectsTitle = styled.h3`
  font-size: 30px;
  text-align: center;
  font-weight: 100;
  text-transform:capitalize;
`;

const AddProject = styled.button`
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
  transition: border-color .2s ease-in-out ,box-shadow .2s ease-in-out ;
  &:hover{
    border:1px solid rgba(0, 0, 0, 0.28);
    box-shadow: 0px 0px 2px 1px rgba(0,0,0,0.3)
  }
`;

export { ListContainer, Label, ProjectsTitle, AddProject };
