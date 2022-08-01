import TableCollection from '../../components/TableCollection/TableCollection';
import {
  Content,
  BarSide,
  ShowFilter,
  SelectButton,
  SearchBar,
  AddButton,
  TopBar,
  ToggleSwitch,
} from './CollectionStyles';
import { useState } from 'react';
import { IoSearch, IoCog } from 'react-icons/io5';

export default function Collection() {
  const [filter, setFilter] = useState('all');

  const onFilterChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <Content>
      <TopBar>
        <BarSide>
          <ShowFilter>
            <span>Show</span>
            <ToggleSwitch onChange={onFilterChange}>
              <input
                type='radio'
                id='all'
                name='showFilter'
                value='all'
                checked={filter === 'all'}
              />
              <label for='all'>All</label>
              <input
                type='radio'
                id='sold'
                name='showFilter'
                value='sold'
                checked={filter === 'sold'}
              />
              <label for='sold'>Sold</label>
              <input
                type='radio'
                id='inStock'
                name='showFilter'
                value='inStock'
                checked={filter === 'inStock'}
              />
              <label for='inStock'>In Stock</label>
            </ToggleSwitch>
          </ShowFilter>
          <SelectButton>Select</SelectButton>
        </BarSide>
        <SearchBar>
          <IoSearch color='#A1A1AC' size='18px' />
          <input type='text' placeholder='Search...' />
        </SearchBar>
        <BarSide>
          <AddButton to='/add'>Add</AddButton>
          <IoCog size='32px' color='#E5E5E5' />
        </BarSide>
      </TopBar>
      <div className='table-content'>
        <TableCollection />
      </div>
    </Content>
  );
}
