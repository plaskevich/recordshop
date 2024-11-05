import {
  Content,
  Card,
  TitleWrap,
  Title,
  Form,
  FormGroup,
  Label,
  Input,
  SwitchWrap,
  ErrorMessage,
  ErrorText,
  ButtonWrap,
  SubmitButton,
  BackWrap,
} from './AuthStyles';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { IoCaretBackCircleOutline } from 'react-icons/io5';
import { ThreeDots } from 'react-loader-spinner';

export default function SignUpForm(props) {
  const { submitForm, loading, errorMessage } = props;
  const { register, handleSubmit } = useForm();

  return (
    <Content>
      <Card>
        <TitleWrap>
          <Title>Create new account</Title>
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
          <FormGroup>
            <Label htmlFor='confirmPassword'>Confirm Password</Label>
            <Input {...register('confirmPassword')} type='password' />
          </FormGroup>
          <SwitchWrap>
            <span>Already have an acoount? </span>
            <Link to='/login'>Login</Link>
          </SwitchWrap>
          {errorMessage && (
            <ErrorMessage>
              <ErrorText>{errorMessage}</ErrorText>
            </ErrorMessage>
          )}

          <ButtonWrap>
            <SubmitButton type='submit'>
              {loading ? <ThreeDots color='white' height='10' /> : 'Sign Up'}
            </SubmitButton>
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
