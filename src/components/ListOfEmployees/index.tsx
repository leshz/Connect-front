/* eslint-disable no-underscore-dangle */
import * as React from 'react';
import { ListContainer, TopList } from './style';
import { ItemEmployee } from '../ListOfEmployessItem';
import { propsOfListEmployees, employee } from '../../interfaces/interfaces';



export const ListEmployees = ({ information }:propsOfListEmployees) => {
  const render = information.map((item: employee, index: number) => (
    <ItemEmployee {...item} key={item._id} />
  ));

  return (
    <ListContainer>
      <TopList>
        <input type="checkbox" />
        <p>Perfil</p>
        <p>Empleado</p>
        <p>Salario</p>
        <p>Estado</p>
        <p>Acciones</p>
      </TopList>
      {render}
    </ListContainer>
  );
};
