import * as React from 'react';
import { Mutation } from 'react-apollo';
import { MdSave } from 'react-icons/md';
import { ModalPortal } from '../Modal/index';
import { CREATEPROJECT, getProjectsQuery } from '../../graphql/getProjects';
import { Input, Title, ButtonE, ButtonS } from './style';

const { useState } = React;
interface props {
  children?: unknown;
  isOpen?: boolean;
  onClose: () => void;
  update?: () => {};
}

interface state { 
  name?: string
  department?:string
}

export const ModalNewProject = (props: props) => {
  const [stateFrom, setFromState] = useState({
    name: '',
    department:''
  });



  const handleChangeForm = (e) => { 
    setFromState({ ...stateFrom,
      [e.target.name] : e.target.value
    });
  };


  return (
    <Mutation
      mutation={CREATEPROJECT}
      update={(cache, { data:{ crateProject } }) => { 
        const { getAllProjects } = cache.readQuery({ query: getProjectsQuery });
        cache.writeQuery({
          query: getProjectsQuery, 
          data: {
            getAllProjects: getAllProjects.concat([crateProject])
          }
        });
      }}
    >
      {(createProject:(coco:unknown)=>void, { data }:never) => (
        <ModalPortal {...props}>
          <Title>Nuevo proyecto</Title>
          <Input>
            <label htmlFor="name">Nombre del proyecto
              <input type="text" name="name" onChange={handleChangeForm} id="name" />
            </label>
          </Input>
          <Input>
            <label htmlFor="dpt">Departamento
              <input type="text" name="department" onChange={handleChangeForm} id="dpt" />
            </label>
          </Input>
          <ButtonS
            type="button"
            onClick={() => {
              const { name, department } = stateFrom;
              createProject({ variables: { name, department } });
              props.onClose();
            }}
          >
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
