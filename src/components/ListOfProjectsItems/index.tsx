import * as React from 'react';
import { ListItem, Title } from './style';
import { Project } from '../../interfaces/projects';

const OnClickHandler = (event:React.MouseEvent<HTMLElement>) => {
  console.log(event);
};

export const ListItemComponent = ({ name }: Project) => (

  <ListItem onClick={OnClickHandler}>
    <Title>{name}</Title>
  </ListItem>
);