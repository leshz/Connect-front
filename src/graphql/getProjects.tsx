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
    $salary: Int!
    $state: Boolean!
    $position:String!
    $project: ID
  ) {
    editEmployee(
      id: $id
      input: {
        firstName: $firstName
        lastName: $lastName
        salary: $salary
        state: $state
        position:$position
        project: $project
      }
    ) {
      _id
    }
  }
`;

export const CREATEEMPLOYEE = gql`
  mutation createEmployee(
    $firstName: String!
    $lastName: String!
    $salary: Int!
    $state: Boolean!
    $position:String!
    $project: ID
  ) {
    createEmployee(
      input: {
        firstName: $firstName
        lastName: $lastName
        salary: $salary
        state: $state
        position:$position
        project: $project
      }
    ) {
      _id
    }
  }
`;

export const DELETEEMPLOYEE = gql`
  mutation deleteEmployee(
    $id: ID!
  ) {
    deleteEmployee(id: $id) 
  }
`;