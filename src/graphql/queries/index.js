import { gql } from '@apollo/client';

export const GET_COLLECTION = gql`
  query getAllRecords {
    getAllRecords {
      id
      artist
      title
      status
      label
      date_added
      condition
      genre
      price
      year
      notes
      img_uri
    }
  }
`;
