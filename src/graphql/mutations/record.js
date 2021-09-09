import { gql } from '@apollo/client';

export const ADD_RECORD = gql`
  mutation addRecord($data: RecordInput!) {
    addRecord(data: $data) {
      id
    }
  }
`;
