import { gql } from '@apollo/client';
import { RECORD_DATA_FRAGMENT } from '../fragments';

export const GET_COLLECTION = gql`
  query getCollection($filter: String!) {
    getCollection(filter: $filter) {
      ...RecordDetails
    }
  }
  ${RECORD_DATA_FRAGMENT}
`;

export const GET_RECORD = gql`
  query getRecord($id: String!) {
    getRecord(id: $id) {
      ...RecordDetails
    }
  }
  ${RECORD_DATA_FRAGMENT}
`;
