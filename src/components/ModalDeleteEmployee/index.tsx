/* eslint-disable no-underscore-dangle */
import * as React from 'react';
import { Mutation } from 'react-apollo';
import { ModalPortal } from '../Modal/index';
import { DELETEEMPLOYEE } from '../../graphql/getProjects';
import { propsEditEmployee } from '../../interfaces/interfaces';
import { Title, Message, ButtonE, ButtonS } from './style';

export const ModalDelete = (props: propsEditEmployee) => {

  
  return (
    <Mutation mutation={DELETEEMPLOYEE}>
      {(deleteEmployee:(input:unknown)=>void, information:never) => {
        return (
          <ModalPortal {...props}>
            <Title>¿Estas seguro?</Title>
            <Message>
              Borrar el registro de <b>{props.firstName} {props.lastName}</b>
            </Message>
            <ButtonE onClick={() => { 
              deleteEmployee({ variables: { id: props._id } });
              props.onClose();
            }}
            >Borrar
            </ButtonE>
            <ButtonS onClick={props.onClose}>Cerrar</ButtonS>
          </ModalPortal>
        );
      }}
    </Mutation>
  );
};
