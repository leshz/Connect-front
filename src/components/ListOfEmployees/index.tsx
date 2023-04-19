import React from 'react';
import { ListContainer, TopList, AddEmployee } from './style';
import { ItemEmployee } from '../ListOfEmployessItem';
import { propsOfListEmployees, employee } from '../../interfaces/interfaces';
import { ModalCreate } from '../ModalCreateEmployee';

const { useState } = React;

export const ListEmployees = ({ information = [] }: propsOfListEmployees) => {
  const [isOpen, setModalState] = useState(false);

  const render = information.map((item: employee, index: number) => (
    <ItemEmployee {...item} item={index} key={item._id} />
  ));

  const onClose = () => {
    setModalState(false);
  };
  const OpenModal = () => {
    setModalState(true);
  };

  return (
    <ListContainer>
      <ModalCreate onClose={onClose} isOpen={isOpen} />
      <AddEmployee onClick={OpenModal}>+ Empleado</AddEmployee>
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
