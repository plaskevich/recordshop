import { SIGN_IN } from 'graphql/mutations/auth';
import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { useDispatch } from 'react-redux';
import { setUser } from 'redux/userSlice';
import LoginForm from 'components/auth/LoginForm';

export default function Login() {
  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = useState(null);

  const [signIn, { loading }] = useMutation(SIGN_IN, {
    onCompleted(data) {
      localStorage.setItem('token', data.signIn.token);
      dispatch(setUser({ id: data.signIn.user.id }));
      window.location.reload();
    },
    onError(error) {
      setErrorMessage(error.message);
    },
  });

  const submitForm = (data) => {
    const { email, password } = data;
    signIn({
      variables: {
        email: email,
        password: password,
      },
    });
  };

  return (
    <LoginForm
      submitForm={submitForm}
      loading={loading}
      errorMessage={errorMessage}
    />
  );
}
