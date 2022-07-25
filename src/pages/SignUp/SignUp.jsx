import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { SIGN_UP } from '../../graphql/mutations/auth';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { IoCaretBackCircleOutline } from 'react-icons/io5';
import {
  Content,
  Card,
  TitleWrap,
  Title,
  Form,
  FormGroup,
  Label,
  Input,
  LoginWrap,
  ButtonWrap,
  CreateButton,
  BackWrap,
  ErrorMessage,
  ErrorText,
} from './SignUpStyles';

export default function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);

  const [signUp, { data }] = useMutation(SIGN_UP);

  const submitForm = () => {
    if (password === confirmPassword) {
      signUp({
        variables: {
          email: email,
          password: password,
        },
      });
      if (data) {
        localStorage.setItem('token', data.signUp.token);
      }
    } else {
      setPasswordError(true);
    }
  };
  return (
    <Content>
      <Card>
        <TitleWrap>
          <Title>Create new account</Title>
        </TitleWrap>
        {/* <div className={showError ? 'error-msg' : 'error-msg invisible'}>
          <div className='error-txt'>
            <IoWarning size='20px' />
            {errorMessage}
          </div>
        </div> */}
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
          <FormGroup>
            <Label htmlFor='confirm-password'>Confirm password</Label>
            <Input
              name='confirm-password'
              type='password'
              className='input'
              onChange={(e) => {
                setConfirmPassword(e.target.value);
              }}
            />
          </FormGroup>
          <LoginWrap>
            <span>Already have an acoount? </span>
            <Link to='/login'>Login</Link>
          </LoginWrap>

          <ButtonWrap>
            <CreateButton type='submit'>Create</CreateButton>
          </ButtonWrap>
          <BackWrap to='/'>
            <IoCaretBackCircleOutline size='29' />
            back to homepage
          </BackWrap>
        </Form>
      </Card>
    </Content>
    // <>
    //   <div className='content'>
    //     <div className='title-wrap'>
    //       <h3 className='title'>Create new account</h3>
    //     </div>
    //     <form onSubmit={handleSubmit(submitForm)}>
    //       <div className='form-group'>
    //         <span className='label-wrap'>
    //           <label htmlFor='email'>Email</label>
    //         </span>
    //         <input
    //           {...register('email', { required: 'Fill in the required field' })}
    //           name='email'
    //           type='email'
    //           className='input'
    //           onChange={(e) => {
    //             setEmail(e.target.value);
    //           }}
    //         />
    //       </div>
    //       {errors.email && (
    //         <div className='error-wrap'>
    //           <p className='error-text'>{errors.email.message}</p>
    //         </div>
    //       )}
    //       <div className='form-group'>
    //         <span className='label-wrap'>
    //           <label htmlFor='password'>Password</label>
    //         </span>
    //         <input
    //           name='password'
    //           type='password'
    //           className='input'
    //           onChange={(e) => {
    //             setPassword(e.target.value);
    //           }}
    //         />
    //       </div>
    //       <div className='form-group'>
    //         <span className='label-wrap'>
    //           <label htmlFor='confirm-password'>Confirm password</label>
    //         </span>
    //         <input
    //           name='confirm-password'
    //           type='password'
    //           className='input'
    //           onChange={(e) => {
    //             setConfirmPassword(e.target.value);
    //           }}
    //         />
    //       </div>
    //       <div className={passwordError ? 'error-wrap' : 'hide'}>
    //         <p className='error-text'>
    //           Make sure the two passwords above are matching
    //         </p>
    //       </div>
    //       <div className='btn-wrap'>
    //         <button type='submit' className='btn'>
    //           next
    //         </button>
    //       </div>
    //     </form>
    //   </div>
    // </>
  );
}
