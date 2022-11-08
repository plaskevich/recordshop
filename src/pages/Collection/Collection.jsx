import CollectionTable from 'components/collection/CollectionTable/CollectionTable';
import { GET_COLLECTION } from 'graphql/queries';
import { REMOVE_RECORD } from 'graphql/mutations/record';
import { useLazyQuery, useMutation } from '@apollo/client';
import {
  Content,
  BarSide,
  ShowFilter,
  SelectButton,
  SearchBar,
  AddButton,
  TopBar,
  ToggleSwitch,
  CogButton,
} from './CollectionStyles';
import { Menu } from 'styles/styledComponents';
import { useState, useEffect } from 'react';
import { IoSearch, IoCog, IoPersonCircle, IoLogOut } from 'react-icons/io5';
import { colors } from 'styles/theme';
import { LoadingSpinner } from 'components/common/LoadingSpinner/LoadingSpinner';
import { MenuItem } from '@szhsin/react-menu';

export default function Collection() {
  const [filter, setFilter] = useState('all');

  const [getCollection, { loading, data }] = useLazyQuery(GET_COLLECTION, {
    fetchPolicy: 'cache-and-network',
    variables: { filter },
  });

  const [removeRecord] = useMutation(REMOVE_RECORD, {
    onCompleted() {
      getCollection();
    },
  });

  const onFilterChange = (event) => {
    setFilter(event.target.value);
  };

  useEffect(() => {
    getCollection();
  }, [getCollection]);

  return (
    <>
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
            <Menu
              direction='bottom'
              align='end'
              offsetY={14}
              menuButton={
                <CogButton>
                  <IoCog size='32px' />
                </CogButton>
              }
              transition
            >
              <MenuItem>
                <IoPersonCircle size='22px' />
                Account
              </MenuItem>
              <MenuItem>
                <IoLogOut size='22px' />
                Logout
              </MenuItem>
            </Menu>
          </BarSide>
        </TopBar>
        {loading ? (
          <LoadingSpinner />
        ) : (
          <CollectionTable
            records={data?.getCollection}
            removeRecord={removeRecord}
          />
        )}
      </Content>
    </>
  );
}
