import { graphql } from 'react-apollo';
import { gql } from 'apollo-boost';

export const GETPROJECTS = graphql(gql`
  {
    getAllProjects {
      _id
      name
      department
    }
  }
`);
