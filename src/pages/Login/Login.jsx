import { SIGN_IN } from '../../graphql/mutations/auth';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from '../../redux/userSlice';
import { IoCaretBackCircleOutline } from 'react-icons/io5';
import { ThreeDots } from 'react-loader-spinner';
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
  const { register, handleSubmit } = useForm();
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
    <Content>
      <Card>
        <TitleWrap>
          <Title>Login to your account</Title>
        </TitleWrap>

        <Form onSubmit={handleSubmit(submitForm)}>
          <FormGroup>
            <Label htmlFor='email'>Email</Label>
            <Input {...register('email')} type='email' />
          </FormGroup>
          <FormGroup>
            <Label htmlFor='password'>Password</Label>
            <Input {...register('password')} type='password' />
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
            <LoginButton type='submit'>
              {loading ? (
                <ThreeDots height='35' width='35' color='white' />
              ) : (
                'Login'
              )}
            </LoginButton>
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
