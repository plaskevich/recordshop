import './Login.scoped.scss';
import Header from '../Header/Header';
import { SIGN_IN } from '../../graphql/mutations/auth';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useMutation } from '@apollo/client';

export default function Login() {
  const {
    handleSubmit,
    // formState: { errors },
  } = useForm();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [signIn, { data }] = useMutation(SIGN_IN);

  const submitForm = () => {
    signIn({
      variables: {
        email: email,
        password: password,
      },
    });
    if (data) {
      localStorage.setItem('token', data.signIn.token);
    }
  };

  return (
    <div>
      <Header />
      <div className='content'>
        <div className='title-wrap'>
          <h3 className='title'>Login with existing account</h3>
        </div>
        <form onSubmit={handleSubmit(submitForm)}>
          <div className='form-group'>
            <span className='label-wrap'>
              <label htmlFor='email'>email</label>
            </span>
            <input
              name='email'
              type='email'
              className='input'
              onChange={(e) => {
                setEmail(e.target.value);
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
          <div className='btn-wrap'>
            <button type='submit' className='enter-btn'>
              enter
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
