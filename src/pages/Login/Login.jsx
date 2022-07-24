import { SIGN_IN } from '../../graphql/mutations/auth';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import setUser from '../../../redux/userSlice';
import { IoWarning, IoCaretBackCircleOutline } from 'react-icons/io5';
import {
  Content,
  Title,
  TitleWrap,
  Form,
  FormGroup,
  Label,
  Input,
  CreateAccountWrap,
  ButtonWrap,
  LoginButton,
  BackWrap,
  ErrorMessage,
  ErrorText,
} from './LoginStyles';

export default function Login() {
  const {
    handleSubmit,
    // formState: { errors },
  } = useForm();
  // const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const [signIn] = useMutation(SIGN_IN, {
    onCompleted(data) {
      localStorage.setItem('token', data.signIn.token);
      // dispatch(setUser({ id: '1234' }));
      window.location.reload();
    },
    onError(error) {
      setShowError(true);
      setErrorMessage(error.message);
      console.error(error);
    },
  });

  const submitForm = () => {
    setShowError(false);
    signIn({
      variables: {
        email: email,
        password: password,
      },
    });
  };

  return (
    <Content>
      <TitleWrap>
        <Title>Login to your account</Title>
      </TitleWrap>
      {showError && (
        <ErrorMessage>
          <ErrorText>
            <IoWarning size='20px' />
            {errorMessage}
          </ErrorText>
        </ErrorMessage>
      )}
      <Form onSubmit={handleSubmit(submitForm)}>
        <FormGroup>
          <Label htmlFor='email'>Email</Label>
          <Input
            name='email'
            type='email'
            className='input'
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor='password'>Password</Label>
          <Input
            name='password'
            type='password'
            className='input'
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </FormGroup>
        <CreateAccountWrap>
          <span>Don't have an account yet? </span>
          <Link to='/signup'>Create account</Link>
        </CreateAccountWrap>

        <ButtonWrap>
          <LoginButton type='submit'>Login</LoginButton>
        </ButtonWrap>
        <BackWrap to='/'>
          <IoCaretBackCircleOutline size='29' />
          back to homepage
        </BackWrap>
      </Form>
    </Content>
  );
}
