import { useState } from 'react';
import { FieldValues } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { useMutation } from '@apollo/client';

import LoginForm from '@/components/auth/LoginForm';
import { SIGN_IN } from '@/graphql/mutations/auth';
import { setUser } from '@/redux/userSlice';

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [errorMessage, setErrorMessage] = useState('');

  const [signIn, { loading }] = useMutation(SIGN_IN, {
    onCompleted(data) {
      localStorage.setItem('token', data.signIn.token);
      dispatch(setUser({ token: data.signIn.token }));
      navigate('/collection');
    },
    onError(error) {
      setErrorMessage(error.message);
    },
  });

  const submitForm = ({ email, password }: FieldValues) => {
    signIn({
      variables: {
        email: email,
        password: password,
      },
    });
  };

  return <LoginForm submitForm={submitForm} loading={loading} errorMessage={errorMessage ?? ''} />;
}
