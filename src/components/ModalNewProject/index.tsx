import * as React from 'react';
import { Mutation } from 'react-apollo';
import { MdSave } from 'react-icons/md';
import { ModalPortal } from '../Modal/index';
import { CREATEPROJECT } from '../../hoc/getProjects';
import { Input, Title, ButtonE, ButtonS } from './style';

interface props {
  children?: unknown;
  isOpen?: boolean;
  onClose: () => void;
  addProject: (name?:string, department?:string) => void;
}
interface mutationProp { 
  createProject?: () => void;
}
export const ModalNewProject = (props: props) => {
  return (
    <Mutation mutation={CREATEPROJECT}>
      {(createProject:(coco:unknown)=>void, { data }:never) => (
        <ModalPortal {...props}>
          <Title>Nuevo proyecto</Title>
          <Input>
            <label htmlFor="name">Nombre del proyecto
              <input type="text" id="name" />
            </label>
          </Input>
          <Input>
            <label htmlFor="dpt">Departamento
              <input type="text" id="dpt" />
            </label>
          </Input>
          <ButtonS type="button" onClick={() => { createProject({ variables: { name:'pruebas', department:'Coia papi' } }); }}>
            <MdSave /> Guardar
          </ButtonS>
          <ButtonE type="button" onClick={props.onClose}>
            Cerrar
          </ButtonE>
        </ModalPortal>
      )}
    </Mutation>  
  );
};
