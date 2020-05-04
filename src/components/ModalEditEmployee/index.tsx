/* eslint-disable no-underscore-dangle */
import * as React from 'react';
import { Mutation } from 'react-apollo';
import { ModalPortal } from '../Modal/index';
import { EDITEMPLOYEE } from '../../graphql/getProjects';
import { Input, Title, ButtonE, ButtonS } from './style';
import { propsEditEmployee } from '../../interfaces/interfaces';

const { useState } = React;

export const ModalEdit = (props: propsEditEmployee) => {
  const { firstName, lastName, state, salary, position, _id, project } = props;

  const [modalForm, setModalForm] = useState({
    firstName,
    lastName,
    state,
    salary,
    position,
    _id,
    project:'',
  });

  const handlerChangeForm = (e) => {
    setModalForm({
      ...modalForm,
      [e.target.name]: e.target.value,
    });
  };

  const projectName = project.length > 0 ? project[0].name : '';

  return (
    <Mutation mutation={EDITEMPLOYEE}>
      {(editEmployee: (input:unknown) => void, { data }: never) => (
        <ModalPortal {...props}>
          <Title>Editar Empleado</Title>
          <Input>
            <label htmlFor="name">
              Nombre
              <input
                type="text"
                id="name"
                name="firstName"
                onChange={handlerChangeForm}
                defaultValue={firstName}
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
                defaultValue={lastName}
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
                defaultValue={salary}
              />
            </label>
          </Input>
          <Input>
            <label htmlFor="state">
              Estado
              <select id="state" name="state" defaultValue={Number(state)} onChange={handlerChangeForm}>
                <option value="1">
                  Activo
                </option>
                <option value="0">
                  No Activo
                </option>
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
                defaultValue={position}
              />
            </label>
          </Input>
          <Input>
            <label htmlFor="project">
              Cargo
              <select
                id="project"
                defaultValue={projectName}
                name="project"
                onChange={handlerChangeForm}
              >
                <option value=""> </option>
                <option value="id">Projecto uno </option>
              </select>
            </label>
          </Input>
          <ButtonS onClick={() => {

            const stateBoolean = Boolean(Number(modalForm.state));

            editEmployee({
              variables: {
                id: modalForm._id,
                firstName:modalForm.firstName,
                lastName: modalForm.lastName,
                salary: Number(modalForm.salary),
                state: stateBoolean,
                position: modalForm.position,
                project: modalForm.project,
              }
            });
            props.onClose();
          }}
          >Guardar
          </ButtonS>
          <ButtonE onClick={props.onClose}>Cerrar</ButtonE>
        </ModalPortal>
      )}
    </Mutation>
  );
};
