import * as React from 'react';
import { ListItem, Title } from './style';
import { Project } from '../../interfaces/interfaces';

const { useState } = React;

export const ListItemComponent = ({ onClick, name }: Project) => {
  const [isActive, setActive] = useState(false);

  const OnClickHandler = (event: React.MouseEvent<HTMLElement>) => {
    onClick();
    setActive(!isActive);
  };
  const active = isActive ? 'active' : '';

  return (
    <ListItem className={`${active}`} onClick={OnClickHandler}>
      <Title>{name}</Title>
    </ListItem>
  );
};
