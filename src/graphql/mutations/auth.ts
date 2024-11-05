import { gql } from '@apollo/client';
import { AUTH_DATA_FRAGMENT } from '../fragments';

export const SIGN_UP = gql`
  mutation signUp($email: String!, $password: String!) {
    signUp(email: $email, password: $password) {
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
