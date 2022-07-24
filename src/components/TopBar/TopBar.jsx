import { Link } from 'react-router-dom';
import { IoCheckmarkDone, IoFilter, IoSearch } from 'react-icons/io5';

export default function TopBar() {
  return (
    <div className='top-bar'>
      <div className='left'>
        <button className='left-item'>
          <IoCheckmarkDone />
          <p>Select</p>
        </button>
        <button className='left-item'>
          <IoFilter />
          <p>Filter</p>
        </button>
      </div>

      <div className='search'>
        <IoSearch className='search-icon' />
        <input type='text' placeholder='Search...' />
      </div>
      <div className='right'>
        <Link to='/add' className='add-btn'>
          Add
        </Link>
      </div>
    </div>
  );
}
