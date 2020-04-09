import * as React from 'react';
import { ListItem, Title } from './style';

type listItemProps = { 
  projectName: String
};


const OnClickHandler = (event:React.MouseEvent<HTMLElement>) => {
  console.log(event);
};


export const ListItemComponent = ({ projectName }: listItemProps) => (

  <ListItem onClick={OnClickHandler}>
    <Title>{projectName}</Title>
  </ListItem>
);