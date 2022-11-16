import { MenuItem } from '@szhsin/react-menu';
import { colors } from 'styles/theme';
import {
  IoFilter,
  IoCheckmarkDone,
  IoSearch,
  IoAddCircle,
} from 'react-icons/io5';
import {
  Wrap,
  SideWrap,
  FilterMenu,
  ToolbarButton,
  SearchBar,
  AddButton,
} from './ToolbarStyles';

export default function Toolbar({ filter, onFilterChange, onSearchChange }) {
  const filterName = () => {
    switch (filter) {
      case 'all':
        return 'Show All';
      case 'sold':
        return 'Sold';
      case 'inStock':
        return 'In Stock';
      default:
        return '';
    }
  };

  return (
    <Wrap>
      <SideWrap>
        <span>
          <FilterMenu
            direction='bottom'
            align='start'
            offsetY={10}
            menuButton={({ open }) => (
              <ToolbarButton open={open}>
                <IoFilter size={18} /> {filterName()}
              </ToolbarButton>
            )}
            transition
          >
            <MenuItem
              onClick={() => onFilterChange('all')}
              className={filter === 'all' ? 'selected' : ''}
            >
              All
            </MenuItem>
            <MenuItem
              onClick={() => onFilterChange('sold')}
              className={filter === 'sold' ? 'selected' : ''}
            >
              Sold
            </MenuItem>
            <MenuItem
              onClick={() => onFilterChange('inStock')}
              className={filter === 'inStock' ? 'selected' : ''}
            >
              In Stock
            </MenuItem>
          </FilterMenu>
        </span>

        <ToolbarButton>
          <IoCheckmarkDone size={18} />
          Select
        </ToolbarButton>
      </SideWrap>
      <SideWrap>
        <SearchBar>
          <IoSearch size={18} color={colors.grey[500]} />
          <input placeholder='Search...' onChange={onSearchChange} />
        </SearchBar>
        <AddButton to='/add' data-test-id='add-button'>
          <IoAddCircle size={18} />
          Add
        </AddButton>
      </SideWrap>
    </Wrap>
  );
}
