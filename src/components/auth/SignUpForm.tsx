import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
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

type SignUpFormProps = {
  submitForm: (data: FieldValues) => void;
  loading: boolean;
  errorMessage: string;
};

export default function SignUpForm({ submitForm, loading, errorMessage }: SignUpFormProps) {
  const { register, handleSubmit } = useForm();

  const onSubmit: SubmitHandler<FieldValues> = (data) => submitForm(data);

  return (
    <Content>
      <Card>
        <TitleWrap>
          <Title>Create new account</Title>
        </TitleWrap>

        <Form onSubmit={handleSubmit(onSubmit)}>
          <FormGroup>
            <Label htmlFor="email">Email</Label>
            <Input {...register('email')} type="email" />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="password">Password</Label>
            <Input {...register('password')} type="password" />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="confirmPassword">Confirm Password</Label>
            <Input {...register('confirmPassword')} type="password" />
          </FormGroup>
          <SwitchWrap>
            <span>Already have an acoount? </span>
            <Link to="/login">Login</Link>
          </SwitchWrap>
          {errorMessage && (
            <ErrorMessage>
              <ErrorText>{errorMessage}</ErrorText>
            </ErrorMessage>
          )}

          <ButtonWrap>
            <SubmitButton type="submit">{loading ? <ThreeDots color="white" height="10" /> : 'Sign Up'}</SubmitButton>
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
