/* eslint-disable no-underscore-dangle */
import * as React from 'react';
import { TiEdit, TiUserDelete, TiTimes, TiTick } from 'react-icons/ti';
import { ListItemEmployee, Column, Button } from './style';
import { employee } from '../../interfaces/interfaces';
import { ModalEdit } from '../ModalEditEmployee';
import { ModalDelete } from '../ModalDeleteEmployee';

const { useState } = React;

const imagen = Math.floor(Math.random() * (100 - 1) + 1);

export const ItemEmployee = (props: employee) => {
  const { firstName, lastName, position, salary, state } = props;

  const [IsOpenModalEdit, setModalOpenEdit] = useState(false);
  const [IsOpenModalDelete, setModalDelete] = useState(false);

  const onClickEdit = () => {
    setModalOpenEdit(true);
  };
  const onCloseEdit = () => {
    setModalOpenEdit(false);
  };
  const onClickDelete = () => {
    setModalDelete(true);
  };
  const onCloseDelete = () => {
    setModalDelete(false);
  };

  return (
    <>
      <ModalEdit isOpen={IsOpenModalEdit} {...props} onClose={onCloseEdit} />
      <ModalDelete
        isOpen={IsOpenModalDelete}
        {...props}
        onClose={onCloseDelete}
      />
      <ListItemEmployee>
        <Column className="checkbox">
          <input type="checkbox" />
        </Column>
        <Column className="imagen">
          <img
            src={`https://randomuser.me/api/portraits/women/${imagen}.jpg`}
            alt="imagen de perfil"
          />
        </Column>
        <Column className="name">
          <p>
            {firstName.toLocaleLowerCase()} {lastName.toLocaleLowerCase()}
          </p>
          <span>{position.toLocaleLowerCase()}</span>
        </Column>
        <Column className="salary">
          <p>{salary} USD</p>
          <span>span</span>
        </Column>
        <Column className="state">
          {state ? (
            <TiTick size={40} color="#2EC4B6" />
          ) : (
            <TiTimes size={40} color="#E71D36" />
          )}
        </Column>
        <Column className="actions">
          <Button className="edit" type="button" onClick={onClickEdit}>
            <TiEdit size={20} color="#FFF" />
          </Button>
          <Button className="delete" type="button" onClick={onClickDelete}>
            <TiUserDelete size={20} color="#FFF" />
          </Button>
        </Column>
      </ListItemEmployee>
    </>
  );
};
