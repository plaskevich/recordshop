import { useForm } from 'react-hook-form';
import './SignUp.scoped.scss';
import { useState } from 'react';
import { SIGN_UP } from '../../graphql/mutations/auth';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { IoCaretBackCircleOutline } from 'react-icons/io5';

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
    <div className='content'>
      <div className='title-wrap'>
        <h3 className='title'>Create new account</h3>
      </div>
      {/* <div className={showError ? 'error-msg' : 'error-msg invisible'}>
          <div className='error-txt'>
            <IoWarning size='20px' />
            {errorMessage}
          </div>
        </div> */}
      <form onSubmit={handleSubmit(submitForm)}>
        <div className='form-group'>
          <label htmlFor='email'>Email</label>
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
          <label htmlFor='password'>Password</label>
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
            <label htmlFor='confirm-password'>Confirm password</label>
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
        <div className='create-account-wrap'>
          <span>Already have an acoount? </span>
          <Link to='/login'>Login</Link>
        </div>

        <div className='btn-wrap'>
          <button type='submit' className='create-btn'>
            Create
          </button>
        </div>
        <Link className='back-wrap' to='/'>
          <IoCaretBackCircleOutline size='29' />
          back to homepage
        </Link>
      </form>
    </div>
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
