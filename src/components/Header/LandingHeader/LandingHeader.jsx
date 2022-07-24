import { Link, useLocation } from 'react-router-dom';

export default function LandingHeader() {
  return (
    <header
      className={useLocation().pathname === '/' ? 'header-landing' : 'header'}
    >
      <div className='container'>
        <Link to='/' className='brand'>
          Record Shop
        </Link>
        <nav>
          <ul className='nav-links'>
            <li>
              <Link className='link' to='/login'>
                Login
              </Link>
            </li>
            <li>
              <Link className='link' to='/signup'>
                Sign Up
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
