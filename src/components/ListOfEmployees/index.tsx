import * as React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { ListContainer, TopList } from './style';
import { ItemEmployee } from '../ListOfEmployessItem';
import { employee } from '../../interfaces/interfaces';

const GETEMPLOYEES = gql`
{
  getAllEmployees{
    _id
    firstName
    lastName
    position
    state
    salary
    project{
      name
      department
    }
  }
}
`;




export const ListEmployees = () => {

  let employees;

  const { loading, error, data } = useQuery(GETEMPLOYEES);

  if (loading || error) {
    employees = <p>Cargando</p>;
  } else {
    employees = data.getAllEmployees.map((item: employee, index: number) => (
      <ItemEmployee {...item} key={index} />
    ));
  }


  
  return (
    <ListContainer>
      <TopList>
        <input type="checkbox" />
        <p>Perfil</p>
        <p>Empleado</p>
        <p>Salario</p>
        <p>Estado</p>
        <p>Acciones</p>
      </TopList>
      {employees}
    </ListContainer>
  );
};

