/* eslint-disable react/no-array-index-key */
import * as React from 'react';
import { graphql } from 'react-apollo';
import { gql } from 'apollo-boost';
import { ListItemComponent } from '../ListOfProjectsItems/index';
import { ListContainer, Label, ProjectsTitle } from './style';
import { Project, propsGeneral } from '../../interfaces/interfaces';
const GETPROJECTS = graphql(gql`
  {
    getAllProjects {
      _id
      name
      department
    }
  }
`);

const ListComponent = (props: propsGeneral) => {
  const {
    data: { loading, getAllProjects },
  } = props;
  let projects;
  if (loading) {
    projects = <h1>Cargando..</h1>;
  } else {
    projects = getAllProjects.map((item: Project, index: number) => (
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

export const List = GETPROJECTS(ListComponent);
