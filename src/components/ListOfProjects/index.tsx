/* eslint-disable no-underscore-dangle */
import * as React from 'react';
import { ListItemComponent } from '../ListOfProjectsItems/index';
import { ListContainer, Label, ProjectsTitle } from './style';
import { Project, propsGeneral } from '../../interfaces/interfaces';
import { GETPROJECTS } from '../../hoc/getProjects';

const ListComponent = ({
  data: { loading = true, getAllProjects = [] },
}: propsGeneral) => {
  let render;

  if (loading) {
    render = <h1>...</h1>;
  } else {
    render = getAllProjects.map((item: Project) => (
      <ListItemComponent {...item} key={item._id} />
    ));
  }
  return (
    <ListContainer>
      <Label htmlFor="all">
        <input type="checkbox" name="" id="all" /> Todos los empleados
      </Label>
      <ProjectsTitle>Proyectos</ProjectsTitle>
      <nav>
        <ul>{render}</ul>
      </nav>
    </ListContainer>
  );
};

export const List = GETPROJECTS(ListComponent);
