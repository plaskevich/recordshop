import { ChangeEvent, useState } from 'react';
import { IoAddCircle, IoFilter, IoSearch } from 'react-icons/io5';

import { colors } from '@/styles/theme';
import { FilterOptions } from '@/types';

import { AddButton, FilterMenu, MenuItem, SearchBar, SideWrap, ToolbarButton, Wrap } from './toolbarStyles';

type ToolbarProps = {
  filter: string;
  onFilterChange: (filter: FilterOptions) => void;
  onSearchChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export default function Toolbar({ filter, onFilterChange, onSearchChange }: ToolbarProps) {
  const [open, setOpen] = useState(false);

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

  const handleFilterChange = (filter: FilterOptions) => {
    onFilterChange(filter);
    setOpen(false);
  };

  return (
    <Wrap>
      <SideWrap>
        <span>
          <ToolbarButton open={open} onClick={() => setOpen(!open)}>
            <IoFilter size={18} /> {filterName()}
          </ToolbarButton>
          <FilterMenu open={open}>
            <MenuItem selected={filter === 'all'} onClick={() => handleFilterChange('all')}>
              All
            </MenuItem>
            <MenuItem selected={filter === 'sold'} onClick={() => handleFilterChange('sold')}>
              Sold
            </MenuItem>
            <MenuItem selected={filter === 'inStock'} onClick={() => handleFilterChange('inStock')}>
              In Stock
            </MenuItem>
          </FilterMenu>
        </span>

        {/* <ToolbarButton>
          <IoCheckmarkDone size={18} />
          Select
        </ToolbarButton> */}
      </SideWrap>
      <SideWrap>
        <SearchBar>
          <IoSearch size={18} color={colors.grey[500]} />
          <input placeholder="Search..." onChange={onSearchChange} />
        </SearchBar>
        <AddButton to="/add" data-test-id="add-button">
          <IoAddCircle size={18} />
          Add
        </AddButton>
      </SideWrap>
    </Wrap>
  );
}
