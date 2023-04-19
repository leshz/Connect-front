//@ts-nocheck
import { useState, type FormEvent } from 'react';
import { ListItemComponent } from '../ListOfProjectsItems/index';
import { ListContainer, Label, ProjectsTitle, AddProject } from './style';
import { propsGeneral } from '../../interfaces/interfaces';
import { GETPROJECTS } from '../../graphql/getProjects';
import { ModalNewProject } from '../ModalNewProject/index';

const ListComponent = ({
  data: { loading = true, getAllProjects = [] },
}: propsGeneral): JSX.Element => {
  const [isSelectedAll, setSelectedAll] = useState(true);
  const [isOpenModal, setOpenModal] = useState(false);

  const onClickChange = (event: FormEvent<HTMLInputElement>) => {
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
        />
        Todos los empleados
      </Label>
      <ProjectsTitle>Proyectos</ProjectsTitle>
      <nav>
        <ul>
          {loading ? (
            <span>...</span>
          ) : (
            getAllProjects.map((item) => (
              <ListItemComponent
                {...item}
                onClick={onClickHandler}
                key={item._id}
              />
            ))
          )}
        </ul>
      </nav>
      <AddProject onClick={openModal}>+ Proyecto</AddProject>
    </ListContainer>
  );
};

export const List = GETPROJECTS(ListComponent);
