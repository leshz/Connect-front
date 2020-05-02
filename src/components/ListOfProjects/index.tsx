/* eslint-disable no-underscore-dangle */
import * as React from 'react';
import { ListItemComponent } from '../ListOfProjectsItems/index';
import { ListContainer, Label, ProjectsTitle, AddProject } from './style';
import { Project, propsGeneral } from '../../interfaces/interfaces';
import { GETPROJECTS } from '../../hoc/getProjects';
import { ModalNewProject } from '../ModalNewProject/index';

const { useState } = React;

const ListComponent = ({
  data: { loading = true, getAllProjects = [] },
}: propsGeneral) => {
  const [isSelectedAll, setSelectedAll] = useState(true);
  const [isOpenModal, setOpenModal] = useState(false);

  let render;

  const onClickChange = (event: React.FormEvent<HTMLInputElement>) => {
    setSelectedAll(!isSelectedAll);
  };
  const onClickHandler = () => {
    setSelectedAll(false);
  };
  const openModal = () => {
    setOpenModal(true);
  };
  const onCloseModal = () => {
    setOpenModal(false);
  };

  if (loading) {
    render = <span>...</span>;
  } else {
    render = getAllProjects.map((item: Project) => (
      <ListItemComponent {...item} onClick={onClickHandler} key={item._id} />
    ));
  }

  return (
    <ListContainer>
      <ModalNewProject isOpen={isOpenModal} onClose={onCloseModal} />
      <Label htmlFor="all">
        <input
          type="checkbox"
          name=""
          id="all"
          checked={isSelectedAll}
          onChange={onClickChange}
        />{' '}
        Todos los empleados
      </Label>
      <ProjectsTitle>Proyectos</ProjectsTitle>
      <nav>
        <ul>{render}</ul>
      </nav>
      <AddProject onClick={openModal}>+ Proyecto</AddProject>
    </ListContainer>
  );
};

export const List = GETPROJECTS(ListComponent);
