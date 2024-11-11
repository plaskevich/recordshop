import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { colors, font } from '@/styles/theme';

export const Wrap = styled.div`
  display: flex;
  padding: 20px 0;
  justify-content: space-between;
`;

export const SideWrap = styled.div`
  display: flex;
  gap: 22px;
`;

export const FilterMenu = styled.div<{ open: boolean }>`
  position: absolute;
  top: 136px;
  display: ${(props) => (props.open ? 'flex' : 'none')};
  flex-direction: column;
  background-color: ${colors.grey[900]};
  border-radius: 15px;
  border: 1px solid ${colors.grey[500]};
  padding: 6px;
  width: 7rem;
  align-items: flex-start;
  .selected {
    background-color: ${colors.blue};
    color: ${colors.white};
  }
`;

export const MenuItem = styled.button<{ selected: boolean }>`
  border-radius: 10px;
  text-align: left;
  width: 100%;
  padding: 0.375rem 0.625rem;
  margin: 2px 0;
  color: ${colors.grey[100]};
  font-size: 1rem;
  gap: 0.5rem;
  background-color: ${(props) => (props.selected ? colors.blue : 'transparent')};
  &:active {
    background-color: ${colors.blue};
  }
  &:hover {
    color: ${colors.grey[900]};
    background-color: ${colors.grey[100]};
  }
`;

export const ToolbarButton = styled.button<{ open: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: ${font};
  font-weight: 500;
  color: ${colors.grey[100]};
  background-color: ${(props) => (props.open ? colors.grey[700] : colors.grey[900])};
  border-radius: 25px;
  border: solid 1px ${colors.grey[700]};
  padding: 8px 20px;
  font-size: 14px;
  transition: all 0.1s ease-in;
  &:hover {
    background-color: ${colors.grey[700]};
  }
`;

export const SearchBar = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
  width: 260px;
  min-width: 200px;
  background-color: ${colors.grey[900]};
  border-radius: 25px;
  padding: 6px 14px;
  border: solid 1px ${colors.grey[700]};
  &:focus-within {
    border: solid 1px ${colors.grey[300]};
    svg {
      fill: ${colors.grey[300]};
    }
  }
  & input {
    font-family: ${font};
    background-color: ${colors.grey[900]};
    color: ${colors.grey[100]};
    width: 240px;
    border: none;
    font-size: 16px;
    &::placeholder {
      color: ${colors.grey[500]};
    }
    &:focus {
      outline: none;
    }
  }
`;

export const AddButton = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: ${font};
  font-weight: 500;
  color: ${colors.white};
  background-color: ${colors.blue};
  border-radius: 25px;
  padding: 8px 20px;
  font-size: 14px;
  &:hover {
    background-color: ${colors.blue_hover};
  }
`;
