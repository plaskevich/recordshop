import { SIGN_UP } from 'graphql/mutations/auth';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from 'redux/user/userSlice';
import { useMutation } from '@apollo/client';
import SignUpForm from 'components/auth/SignUpForm';
import { useNavigate } from 'react-router-dom';

export default function SignUp() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [signUp, { loading }] = useMutation(SIGN_UP, {
    onCompleted(data) {
      localStorage.setItem('token', data.signUp.token);
      dispatch(setUser({ token: data.signUp.token }));
      navigate('/collection');
    },
    onError(error) {
      setErrorMessage(error.message);
    },
  });
  const [errorMessage, setErrorMessage] = useState(null);

  const submitForm = (data) => {
    const { email, password, confirmPassword } = data;
    if (password === confirmPassword) {
      signUp({
        variables: {
          email: email,
          password: password,
        },
      });
    } else {
      setErrorMessage('Make sure the two passwords above are matching');
    }
  };
  return (
    <SignUpForm
      submitForm={submitForm}
      loading={loading}
      errorMessage={errorMessage}
    />
  );
}
