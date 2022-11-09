import { gql } from '@apollo/client';

export const ADD_RECORD = gql`
  mutation addRecord($data: RecordInput!) {
    addRecord(data: $data) {
      id
    }
  }
`;

export const EDIT_RECORD = gql`
  mutation editRecord($id: String!, $data: RecordInput!) {
    editRecord(id: $id, data: $data) {
      id
    }
  }
`;

export const REMOVE_RECORD = gql`
  mutation removeRecord($id: String!) {
    removeRecord(id: $id) {
      id
    }
  }
`;
