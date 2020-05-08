/* eslint-disable no-underscore-dangle */
import * as React from 'react';
import { Mutation, Query } from 'react-apollo';
import { ModalPortal } from '../Modal/index';
import {
  CREATEEMPLOYEE,
  GETALLEMPLOYEES,
  getProjectsQuery,
} from '../../graphql/getProjects';
import { Input, Title, ButtonE, ButtonS } from './style';
import { propsEditEmployee, dataToGQ } from '../../interfaces/interfaces';

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
    <Query query={getProjectsQuery}>
      {({ data, loading }) => {
        let renderOptionsProject = [];
        if (!loading) {
          const { getAllProjects } = data;
          renderOptionsProject = getAllProjects.map(item => (<option key={item._id} value={item._id}>{item.name}</option>));
        }
          
        return (
          <Mutation
            mutation={CREATEEMPLOYEE}
            update={(cache, { data: { createEmployee } }) => {
              const { getAllEmployees } = cache.readQuery({
                query: GETALLEMPLOYEES,
              });
              cache.writeQuery({
                query: GETALLEMPLOYEES,
                data: {
                  getAllEmployees: getAllEmployees.concat([createEmployee]),
                },
              });
            }}
          >
            {(createEmployee: (input: unknown) => void) => (
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
                    <select
                      id="state"
                      name="state"
                      onChange={handlerChangeForm}
                    >
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
                    <select
                      id="project"
                      name="project"
                      onChange={handlerChangeForm}
                    >
                      <option value=""> </option>
                      {renderOptionsProject}
                    </select>
                  </label>
                </Input>
                <ButtonS
                  onClick={() => {
                    const stateBoolean = Boolean(Number(modalForm.state));
                    const information:dataToGQ = {
                      firstName: modalForm.firstName,
                      lastName: modalForm.lastName,
                      salary: Number(modalForm.salary),
                      state: stateBoolean,
                      position: modalForm.position,
                    };
                    if (
                      modalForm.project !== undefined &&
                      modalForm.project !== ''
                    ) {
                      information.project = modalForm.project;
                    }
                    createEmployee({
                      variables:information,
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
      }}
    </Query>
  );
};
