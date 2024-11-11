import { FieldValues, useForm } from 'react-hook-form';
import { IoCaretBackCircleOutline } from 'react-icons/io5';
import { ThreeDots } from 'react-loader-spinner';
import { Link } from 'react-router-dom';

import {
  BackWrap,
  ButtonWrap,
  Card,
  Content,
  ErrorMessage,
  ErrorText,
  Form,
  FormGroup,
  Input,
  Label,
  SubmitButton,
  SwitchWrap,
  Title,
  TitleWrap,
} from './authStyles';

type LoginFormProps = {
  submitForm: (data: FieldValues) => void;
  loading: boolean;
  errorMessage: string;
};

export default function LoginForm({ submitForm, loading, errorMessage }: LoginFormProps) {
  const { register, handleSubmit } = useForm();

  return (
    <Content>
      <Card>
        <TitleWrap>
          <Title>Login to your account</Title>
        </TitleWrap>

        <Form onSubmit={handleSubmit(submitForm)}>
          <FormGroup>
            <Label htmlFor="email">Email</Label>
            <Input {...register('email')} type="email" data-test-id="login-input" />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="password">Password</Label>
            <Input {...register('password')} type="password" data-test-id="password-input" />
          </FormGroup>
          <SwitchWrap>
            <span>Don't have an account yet? </span>
            <Link to="/signup">Create account</Link>
          </SwitchWrap>
          {errorMessage && (
            <ErrorMessage data-test-id="error-message">
              <ErrorText>{errorMessage}</ErrorText>
            </ErrorMessage>
          )}

          <ButtonWrap>
            <SubmitButton type="submit" data-test-id="submit-button">
              {loading ? <ThreeDots height="10" color="white" /> : 'Login'}
            </SubmitButton>
          </ButtonWrap>
          <BackWrap to="/">
            <IoCaretBackCircleOutline size="29" />
            back to homepage
          </BackWrap>
        </Form>
      </Card>
    </Content>
  );
}
