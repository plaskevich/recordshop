import './TopBar.scoped.scss';
import { IoCheckmarkDone, IoFilter, IoSearch } from 'react-icons/io5';

export default function Collection() {
  return (
    <div className='top-bar'>
      <div className='left'>
        <button className='left-item'>
          <IoCheckmarkDone />
          Select
        </button>
        <button className='left-item'>
          <IoFilter />
          Filter
        </button>
      </div>

      <div className='search'>
        <IoSearch className='search-icon' />
        <input type='text' placeholder='Search...' />
      </div>
      <div className='right'>
        <button className='add-btn'>Add</button>
      </div>
    </div>
  );
}
