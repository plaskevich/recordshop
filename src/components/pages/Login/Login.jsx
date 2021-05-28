import './Login.scoped.scss';
import Header from '../../Header/Header';
import { SIGN_IN } from '../../../graphql/mutations/auth';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { useDispatch } from 'react-redux';
import setUser from '../../../redux/userSlice';
import { IoWarning } from 'react-icons/io5';

export default function Login() {
  const {
    handleSubmit,
    // formState: { errors },
  } = useForm();
  const dispatch = useDispatch();

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
    <div>
      <Header />
      <div className='content'>
        <div className='title-wrap'>
          <h3 className='title'>Login with existing account</h3>
        </div>
        <div className={showError ? 'error-msg' : 'error-msg invisible'}>
          <div className='error-txt'>
            <IoWarning size='20px' />
            {errorMessage}
          </div>
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
