import { useForm } from 'react-hook-form';
import './SignUp.scoped.scss';
import Header from '../../Header/Header';
import { useState } from 'react';
import { SIGN_UP } from '../../../graphql/mutations/auth';
import { useMutation } from '@apollo/client';

export default function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [userName, setUserName] = useState('');
  const [passwordError, setPasswordError] = useState(false);

  const [signUp, { data }] = useMutation(SIGN_UP);

  const submitForm = () => {
    if (password === confirmPassword) {
      signUp({
        variables: {
          email: email,
          name: userName,
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
    <>
      <Header />
      <div className='content'>
        <div className='title-wrap'>
          <h3 className='title'>Create a new account</h3>
        </div>
        <form onSubmit={handleSubmit(submitForm)}>
          <div className='form-group'>
            <span className='label-wrap'>
              <label htmlFor='email'>email</label>
            </span>
            <input
              {...register('email', { required: 'Fill in the required field' })}
              name='email'
              type='email'
              className='input'
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          {errors.email && (
            <div className='error-wrap'>
              <p className='error-text'>{errors.email.message}</p>
            </div>
          )}
          <div className='form-group'>
            <span className='label-wrap'>
              <label htmlFor='name'>name</label>
            </span>
            <input
              name='name'
              type='text'
              className='input'
              onChange={(e) => {
                setUserName(e.target.value);
              }}
            />
          </div>
          <div className='form-group'>
            <span className='label-wrap'>
              <label htmlFor='password'>password</label>
            </span>
            <input
              name='password'
              type='password'
              className='input'
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div className='form-group'>
            <span className='label-wrap'>
              <label htmlFor='confirm-password'>confirm password</label>
            </span>
            <input
              name='confirm-password'
              type='password'
              className='input'
              onChange={(e) => {
                setConfirmPassword(e.target.value);
              }}
            />
          </div>
          <div className={passwordError ? 'error-wrap' : 'hide'}>
            <p className='error-text'>
              make sure the two passwords above are matching
            </p>
          </div>
          <div className='btn-wrap'>
            <button type='submit' className='btn'>
              next
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
