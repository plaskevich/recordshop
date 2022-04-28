import './Landing.scoped.scss';
import { Link } from 'react-router-dom';
import { IoCaretDownCircleOutline } from 'react-icons/io5';

export default function Landing() {
  return (
    <div className='main'>
      <div className='nav'>
        <Link to='/' className='logo'>
          record shop
        </Link>
        <div className='nav-btns'>
          <Link to='/login'>Login</Link>
          <Link to='/signup' className='signup'>
            <span>Get Started</span>
          </Link>
        </div>
      </div>
      <div className='landing-content'>
        <div className='main-text'>
          <p>Simple tool to manage</p>
          <p>local inventory</p>
          <div className='last-line'>
            of your <span className='record-shop'>record shop</span>{' '}
          </div>
          <div>
            <Link to='/signup' className='try-now'>
              <span>TRY NOW</span>
            </Link>
          </div>

          <div className='more-info'>
            <button>
              scroll for more info
              <IoCaretDownCircleOutline size='29px' />
            </button>
          </div>
        </div>

        <div>
          <svg
            width='290'
            height='290'
            viewBox='0 0 290 290'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <circle cx='145' cy='145' r='145' fill='#0F35F7' />
            <circle cx='144.442' cy='144.442' r='42.9423' fill='#FFE607' />
            <circle cx='145' cy='145' r='7.80769' fill='#141415' />
          </svg>
        </div>
      </div>
    </div>
  );
}
