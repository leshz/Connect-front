import * as React from 'react';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';
import { ListEmployees } from '../components/ListOfEmployees';
import { propsGeneral } from '../interfaces/interfaces';

const query =  gql`
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
interface queryResolve { 
  data?: object[]
  loading?: boolean
  error?:boolean
}

export const ListEmployessWithData = () => (

  <Query query={query}>
    {({ data = {} }:any) => {
      const { getAllEmployees = [] } = data;
      return <ListEmployees information={getAllEmployees} />;
    }}
  </Query>
);