/* eslint-disable no-underscore-dangle */
import * as React from 'react';
import { Mutation } from 'react-apollo';
import { ModalPortal } from '../Modal/index';
import { CREATEEMPLOYEE } from '../../graphql/getProjects';
import { Input, Title, ButtonE, ButtonS } from './style';
import { propsEditEmployee } from '../../interfaces/interfaces';

const { useState } = React;

export const ModalCreate = (props: propsEditEmployee) => {
  const [modalForm, setModalForm] = useState({
    firstName: '',
    lastName: '',
    state: true,
    salary: '',
    position: '',
    _id: '',
    project: '',
  });

  const handlerChangeForm = (e) => {
    setModalForm({
      ...modalForm,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Mutation mutation={CREATEEMPLOYEE}>
      {(createEmployee: (input: unknown) => void, { data }: never) => (
        <ModalPortal {...props}>
          <Title>Crear Empleado</Title>
          <Input>
            <label htmlFor="name">
              Nombre
              <input
                type="text"
                id="name"
                name="firstName"
                onChange={handlerChangeForm}
              />
            </label>
          </Input>
          <Input>
            <label htmlFor="last">
              Apellido
              <input
                type="text"
                id="last"
                name="lastName"
                onChange={handlerChangeForm}
              />
            </label>
          </Input>
          <Input>
            <label htmlFor="salary">
              Salario
              <input
                type="text"
                id="salary"
                name="salary"
                onChange={handlerChangeForm}
              />
            </label>
          </Input>
          <Input>
            <label htmlFor="state">
              Estado
              <select id="state" name="state" onChange={handlerChangeForm}>
                <option value="1">Activo</option>
                <option value="0">No Activo</option>
              </select>
            </label>
          </Input>
          <Input>
            <label htmlFor="position">
              Cargo
              <input
                type="text"
                id="position"
                name="position"
                onChange={handlerChangeForm}
              />
            </label>
          </Input>
          <Input>
            <label htmlFor="project">
              Proyecto
              <select id="project" name="project" onChange={handlerChangeForm}>
                <option value=""> </option>
                <option value="id">Projecto uno </option>
              </select>
            </label>
          </Input>
          <ButtonS
            onClick={() => {
              const stateBoolean = Boolean(Number(modalForm.state));     
              createEmployee({
                variables: {
                  firstName: modalForm.firstName,
                  lastName: modalForm.lastName,
                  salary: Number(modalForm.salary),
                  state: stateBoolean,
                  position: modalForm.position,
                  project: modalForm.project,
                },
              });
              props.onClose();
            }}
          >
            Guardar
          </ButtonS>
          <ButtonE onClick={props.onClose}>Cerrar</ButtonE>
        </ModalPortal>
      )}
    </Mutation>
  );
};
