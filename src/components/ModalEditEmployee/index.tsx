import * as React from 'react';
import { Mutation } from 'react-apollo';
import { ModalPortal } from '../Modal/index';
import { EDITEMPLOYEE } from '../../graphql/getProjects';
import { Input, Title, ButtonE, ButtonS } from './style';
import { propsEditEmployee } from '../../interfaces/interfaces';


export const ModalEdit = (props: propsEditEmployee) => {
  const { firstName, lastName, state, salary, position, _id, project } = props;

  const projectName = project.length > 0 ? project[0].name : '';
  
  return (
    <Mutation mutation={EDITEMPLOYEE}>
      {(editEmployee: () => void, { data }: never) => (
        <ModalPortal {...props}>
          <Title>Editar Empleado</Title>
          <Input>
            <label htmlFor="name">
              Nombre
              <input type="text" id="name" defaultValue={firstName} />
            </label>
          </Input>
          <Input>
            <label htmlFor="name">
              Apellido
              <input type="text" id="name" defaultValue={lastName} />
            </label>
          </Input>
          <Input>
            <label htmlFor="name">
              Salario
              <input type="text" id="name" defaultValue={salary} />
            </label>
          </Input>
          <Input>
            <label htmlFor="state">
              Estado
              <select id="state">
                <option selected={state === true} value="true">
                  Activo
                </option>
                <option value="false" selected={state === false}>
                  No Activo
                </option>
              </select>
            </label>
          </Input>
          <Input>
            <label htmlFor="position">
              Cargo
              <input type="text" id="position" defaultValue={position} />
            </label>
          </Input>
          <Input>
            <label htmlFor="project">
              Cargo
              <select id="project" defaultValue={projectName}>
                <option value="">{' '}</option>
                <option value="id">Projecto uno </option>
              </select>
            </label>
          </Input>
          <ButtonS>Guardar</ButtonS>
          <ButtonE onClick={props.onClose}>Cerrar</ButtonE>
        </ModalPortal>
      )}
    </Mutation>
  );
};
