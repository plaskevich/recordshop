import { SIGN_IN } from '../../graphql/mutations/auth';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from '../../redux/userSlice';
import { IoCaretBackCircleOutline } from 'react-icons/io5';
import {
  Content,
  Card,
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
  const { handleSubmit } = useForm();
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);

  const [signIn] = useMutation(SIGN_IN, {
    onCompleted(data) {
      localStorage.setItem('token', data.signIn.token);
      dispatch(setUser({ id: data.signIn.user.id }));
      window.location.reload();
    },
    onError(error) {
      setErrorMessage(error.message);
    },
  });

  const submitForm = () => {
    signIn({
      variables: {
        email: email,
        password: password,
      },
    });
  };

  return (
    <Content>
      <Card>
        <TitleWrap>
          <Title>Login to your account</Title>
        </TitleWrap>

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
          {errorMessage && (
            <ErrorMessage>
              <ErrorText>{errorMessage}</ErrorText>
            </ErrorMessage>
          )}

          <ButtonWrap>
            <LoginButton type='submit'>Login</LoginButton>
          </ButtonWrap>
          <BackWrap to='/'>
            <IoCaretBackCircleOutline size='29' />
            back to homepage
          </BackWrap>
        </Form>
      </Card>
    </Content>
  );
}
