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

export const EDITEMPLOYEE = gql`
  mutation EditEmployee(
    $id: ID!
    $firstName: String!
    $lastName: String!
    $salary: Number!
    $state: Boolean!
    $project: String
  ) {
    editEmployee(
      id: $id
      input: {
        firstName: $firstName
        lastName: $lastName
        salary: $salary
        state: $state
        project: $project
      }
    ) {
      _id
    }
  }
`;
