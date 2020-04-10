import * as React from 'react';
import { ListContainer, Label, ProjectsTitle } from './style';

import { ListItemComponent } from '../ListOfProjectsItems/index';

const list = [
  {
    id: 0,
    projectName: 'hola',
  },
  {
    id: 1,
    projectName: 'Tacnicos',
  },
  {
    id: 2,
    projectName: 'hola',
  },
  {
    id: 3,
    projectName: 'hola',
  },
];
export const List = () => (
  <ListContainer>
    <Label htmlFor="all">
      <input type="checkbox" name="" id="all" /> Todos los empleados
    </Label>
    <ProjectsTitle>Proyectos</ProjectsTitle>
    <nav>
      <ul>
        {list.map((item, key) => (
          <ListItemComponent {...item} key={item.id} />
        ))}
      </ul>
    </nav>
  </ListContainer>
);
