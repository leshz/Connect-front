import * as React from 'react';
import { ListContainer, TopList } from './style';

import { ItemEmployee } from '../ListOfEmployessItem';


export const ListEmployees = () => (
  <ListContainer>
    <TopList>
      <input type="checkbox" />
      <p>Perfil</p>
      <p>Empleado</p>
      <p>Salario</p>
      <p>Estado</p>
      <p>Acciones</p>
    </TopList>

    <ItemEmployee />
    <ItemEmployee />
    <ItemEmployee />
    <ItemEmployee />
    <ItemEmployee />
    <ItemEmployee />
    <ItemEmployee />
    <ItemEmployee />
    <ItemEmployee />
    <ItemEmployee />
    <ItemEmployee />
    <ItemEmployee />
    


  </ListContainer>
);

