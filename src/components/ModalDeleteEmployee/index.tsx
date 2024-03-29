//@ts-nocheck
import React from 'react';
import { Mutation } from 'react-apollo';
import { ModalPortal } from '../Modal/index';
import { DELETEEMPLOYEE, GETALLEMPLOYEES } from '../../graphql/getProjects';
import { propsEditEmployee } from '../../interfaces/interfaces';
import { Title, Message, ButtonE, ButtonS } from './style';

export const ModalDelete = (props: propsEditEmployee) => {
  return (
    <Mutation
      mutation={DELETEEMPLOYEE}
      update={(cache) => {
        const { getAllEmployees } = cache.readQuery({ query: GETALLEMPLOYEES });
        const newEmployees = [];
        getAllEmployees.forEach((item) => {
          if (item._id !== props._id) {
            newEmployees.push(item);
          }
        });
        cache.writeQuery({
          query: GETALLEMPLOYEES,
          data: {
            getAllEmployees: newEmployees,
          },
        });
      }}
    >
      {(deleteEmployee: (input: unknown) => void, information: never) => {
        return (
          <ModalPortal {...props}>
            <Title>¿Estas seguro?</Title>
            <Message>
              Borrar el registro de
              <b>
                {props.firstName} {props.lastName}
              </b>
            </Message>
            <ButtonE
              onClick={() => {
                deleteEmployee({ variables: { id: props._id } });
                props.onClose();
              }}
            >
              Borrar
            </ButtonE>
            <ButtonS onClick={props.onClose}>Cerrar</ButtonS>
          </ModalPortal>
        );
      }}
    </Mutation>
  );
};
