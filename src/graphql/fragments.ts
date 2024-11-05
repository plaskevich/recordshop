import { gql } from '@apollo/client';

export const AUTH_DATA_FRAGMENT = gql`
  fragment AuthDetails on AuthData {
    token
    user {
      id
      shopName
    }
  }
`;

export const RECORD_DATA_FRAGMENT = gql`
  fragment RecordDetails on Record {
    id
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
    date_added
  }
`;
