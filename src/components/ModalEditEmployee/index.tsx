import * as React from 'react';
import { Mutation } from 'react-apollo';
import { ModalPortal } from '../Modal/index';
import { EDITEMPLOYEE } from '../../graphql/getProjects';
import { Input, Title } from './style';

interface props {
  children?: unknown;
  isOpen?: boolean;
  onClose: () => void;
  firstName?: string;
  lastName?: string;
  state?: boolean;
  salary?: number;
}
export const ModalEdit = (props: props) => {
  const { firstName, lastName, state, salary } = props;

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
                {}
                <option value="true" selected>
                  Activo
                </option>
                <option value="false">
                  No Activo
                </option>
              </select>
            </label>
          </Input>
        </ModalPortal>
      )}
    </Mutation>
  );
};
