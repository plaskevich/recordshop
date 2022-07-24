import { Link } from 'react-router-dom';
import { useState } from 'react';
import { IoPerson, IoCog } from 'react-icons/io5';

export default function AppHeader({ title }) {
  const logout = () => {
    localStorage.removeItem('token');
    window.location.reload();
  };
  const [openDropdown, setOpenDropdown] = useState(false);
  return (
    <header>
      {/* <div className='shop-name'>MyShop</div> */}
      <Link className='shop-name' to='/collection'>
        MyShop
      </Link>
      <div className='page-title'>{title}</div>
      <div className='actions'>
        <div className='account-dropdown'>
          <button
            className={
              openDropdown ? 'action-button focus-btn' : 'action-button'
            }
            onClick={() => setOpenDropdown(!openDropdown)}
          >
            <IoPerson />
          </button>
          <div
            className={
              openDropdown ? 'dropdown-list' : 'dropdown-list invisible'
            }
          >
            <Link className='dropdown-item' to='/account'>
              My Account
            </Link>
            <button onClick={logout} className='dropdown-item'>
              Logout
            </button>
          </div>
        </div>

        <button className='action-button'>
          <IoCog />
        </button>
      </div>
    </header>
  );
}
