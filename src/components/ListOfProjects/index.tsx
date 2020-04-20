/* eslint-disable no-underscore-dangle */
import * as React from 'react';
import { ListItemComponent } from '../ListOfProjectsItems/index';
import { ListContainer, Label, ProjectsTitle, AddProject } from './style';
import { Project, propsGeneral } from '../../interfaces/interfaces';
import { GETPROJECTS } from '../../hoc/getProjects';

const { useState } = React;

const ListComponent = ({
  data: { loading = true, getAllProjects = [] },
}: propsGeneral) => {

  const [isSelectedAll, setSelectedAll] = useState(true);
  
  let render;
  
  const onClickChange = (event: React.FormEvent<HTMLInputElement>) => { 
    setSelectedAll(!isSelectedAll);
  };
  const onClickHandler = () => { 
    setSelectedAll(false);
  };

  if (loading) {
    render = <h1>...</h1>;
  } else {
    render = getAllProjects.map((item: Project) => (
      <ListItemComponent {...item} onClick={onClickHandler} key={item._id} />
    ));
  }

  return (
    <ListContainer> 
      <Label htmlFor="all">
        <input type="checkbox" name="" id="all" checked={isSelectedAll} onChange={onClickChange} /> Todos los empleados
      </Label>
      <ProjectsTitle>Proyectos</ProjectsTitle>
      <nav>
        <ul>{render}</ul>
      </nav>
      <AddProject>
        + Proyecto
      </AddProject>
    </ListContainer>
  );
};

export const List = GETPROJECTS(ListComponent);
