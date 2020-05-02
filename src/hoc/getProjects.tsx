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

export const CREATEPROJECT = gql`
  mutation CreateProject($name: String!, $department: String!) {
    crateProject(input: { name: $name, department: $department }) {
      _id
      name
      department
    }
  }
`;
