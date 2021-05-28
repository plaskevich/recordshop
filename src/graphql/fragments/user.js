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
