import * as React from 'react';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';
import { ListEmployees } from '../components/ListOfEmployees';

import { GETALLEMPLOYEES } from '../graphql/getProjects';

export const ListEmployessWithData = () => (

  <Query query={GETALLEMPLOYEES}>
    {({ data = {} }:any) => {
      const { getAllEmployees = [] } = data;
      return <ListEmployees information={getAllEmployees} />;
    }}
  </Query>
);