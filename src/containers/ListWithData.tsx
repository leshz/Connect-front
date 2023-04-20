import React from 'react';
import { Query } from 'react-apollo';
import ListContainer from '../components/ListOfProjects';
import { GETPROJECTSQUERY } from '../graphql/getProjects';

const ListWithData = () => {
  ListContainer;
  return (
    <Query query={GETPROJECTSQUERY}>
      {({ data }) => {
        return <ListContainer data={data}></ListContainer>;
      }}
    </Query>
  );
};

export { ListWithData };
