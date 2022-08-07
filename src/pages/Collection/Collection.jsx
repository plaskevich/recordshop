import TableCollection from '../../components/TableCollection/TableCollection';
import { GET_COLLECTION } from '../../graphql/queries';
import { useLazyQuery } from '@apollo/client';
import {
  Content,
  Loading,
  BarSide,
  ShowFilter,
  SelectButton,
  SearchBar,
  AddButton,
  TopBar,
  ToggleSwitch,
} from './CollectionStyles';
import { useState, useEffect } from 'react';
import { IoSearch, IoCog } from 'react-icons/io5';
import spinner from './spinner.png';
import * as colors from '../../styles/colors';

export default function Collection() {
  const [filter, setFilter] = useState('all');

  const [getCollection, { loading, data }] = useLazyQuery(GET_COLLECTION, {
    variables: { filter },
  });

  const onFilterChange = (event) => {
    setFilter(event.target.value);
  };

  useEffect(() => {
    getCollection();
  }, [getCollection]);

  return (
    <>
      {loading && !data ? (
        <Loading>
          <img src={spinner} alt='loader' />
        </Loading>
      ) : (
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
                    defaultChecked={filter === 'all'}
                  />
                  <label htmlFor='all'>All</label>
                  <input
                    type='radio'
                    id='sold'
                    name='showFilter'
                    value='sold'
                    defaultChecked={filter === 'sold'}
                  />
                  <label htmlFor='sold'>Sold</label>
                  <input
                    type='radio'
                    id='inStock'
                    name='showFilter'
                    value='inStock'
                    defaultChecked={filter === 'inStock'}
                  />
                  <label htmlFor='inStock'>In Stock</label>
                </ToggleSwitch>
              </ShowFilter>
              <SelectButton>Select</SelectButton>
            </BarSide>
            <SearchBar>
              <IoSearch color={colors.grey[500]} size='18px' />
              <input type='text' placeholder='Search...' />
            </SearchBar>
            <BarSide>
              <AddButton to='/add'>Add</AddButton>
              <IoCog size='32px' color={colors.grey[300]} />
            </BarSide>
          </TopBar>
          <div className='table-content'>
            <TableCollection records={data?.getCollection} />
          </div>
        </Content>
      )}
    </>
  );
}
