/* eslint-disable no-underscore-dangle */
import * as React from 'react';
import { Mutation, Query } from 'react-apollo';
import { ModalPortal } from '../Modal/index';
import {
  EDITEMPLOYEE,
  GETALLEMPLOYEES,
  getProjectsQuery,
} from '../../graphql/getProjects';
import { Input, Title, ButtonE, ButtonS } from './style';
import { propsEditEmployee, dataToGQ } from '../../interfaces/interfaces';

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
    project: '',
  });

  const handlerChangeForm = (e) => {
    setModalForm({
      ...modalForm,
      [e.target.name]: e.target.value,
    });
  };
  const projectName = project.length > 0 ? project[0]._id : '';
  return (
    <Query query={getProjectsQuery}>
      {({ data: { getAllProjects = [] } }) => {
        const renderOptionsProject = getAllProjects.map((item) => (
          <option key={item._id} value={item._id}>
            {item.name}
          </option>
        ));
        return (
          <Mutation
            mutation={EDITEMPLOYEE}
            update={(cache, { data: { editEmployee } }) => {
              const { getAllEmployees } = cache.readQuery({
                query: GETALLEMPLOYEES,
              });
              const result = getAllEmployees.map((item) =>
                item._id === editEmployee._id ? editEmployee : item
              );
              cache.writeQuery({
                query: GETALLEMPLOYEES,
                data: {
                  getAllEmployees: result,
                },
              });
            }}
          >
            {(editEmployee: (input: unknown) => void, { data }: never) => (
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
                    <select
                      id="state"
                      name="state"
                      defaultValue={Number(state)}
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
                      defaultValue={position}
                    />
                  </label>
                </Input>
                <Input>
                  <label htmlFor="project">
                    Proyecto
                    <select
                      id="project"
                      defaultValue={projectName}
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
                    const information: dataToGQ = {
                      id: props._id,
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
                    editEmployee({
                      variables: information,
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
