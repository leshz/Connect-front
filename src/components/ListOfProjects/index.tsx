/* eslint-disable react/no-array-index-key */
import * as React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { ListItemComponent } from '../ListOfProjectsItems/index';
import { ListContainer, Label, ProjectsTitle } from './style';
import { Project } from '../../interfaces/projects';

const GETPROJECTS = gql`
  {
    getAllProjects {
      _id
      name
      department
    }
  }
`;

export const List = () => {
  let projects;

  const { loading, error, data } = useQuery(GETPROJECTS);

  if (loading || error) {
    projects = <p>Cargando</p>;
  } else {
    projects = data.getAllProjects.map((item: Project, index: number) => (
      <ListItemComponent {...item} key={index} />
    ));
  }

  return (
    <ListContainer>
      <Label htmlFor="all">
        <input type="checkbox" name="" id="all" /> Todos los empleados
      </Label>
      <ProjectsTitle>Proyectos</ProjectsTitle>
      <nav>
        <ul>{projects}</ul>
      </nav>
    </ListContainer>
  );
};
