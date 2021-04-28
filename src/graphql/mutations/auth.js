import { gql } from '@apollo/client';
import { AUTH_DATA_FRAGMENT } from '../fragments/user';

export const SIGN_UP = gql`
  mutation signUp($email: String!, $password: String!, $name: String) {
    signUp(email: $email, password: $password, name: $name) {
      ...AuthDetails
    }
  }
  ${AUTH_DATA_FRAGMENT}
`;

export const SIGN_IN = gql`
  mutation signIn($email: String!, $password: String!) {
    signIn(email: $email, password: $password) {
      ...AuthDetails
    }
  }
  ${AUTH_DATA_FRAGMENT}
`;
