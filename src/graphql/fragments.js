import { gql } from '@apollo/client';

export const AUTH_DATA_FRAGMENT = gql`
  fragment AuthDetails on AuthData {
    token
    user {
      id
      email
      name
      shop {
        name
      }
      role
    }
  }
`;

export const RECORD_DATA_FRAGMENT = gql`
  fragment RecordDetails on Record {
    artist
    title
    status
    label
    condition
    genre
    price
    year
    notes
    img_uri
  }
`;
