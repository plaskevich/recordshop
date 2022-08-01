import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as colors from '../../styles/colors';

export const Content = styled.div`
  color: #fff;
  padding: 20px 40px;
`;
export const TopBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const BarSide = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
`;

export const ShowFilter = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  font-size: 14px;
  & span {
    font-weight: 700;
  }
`;
export const ToggleSwitch = styled.div`
  display: flex;
  border: 2px solid #424247;
  border-radius: 25px;
  & input {
    position: absolute !important;
    clip: rect(0, 0, 0, 0);
  }

  & label {
    padding: 6px 15px;
    border-radius: 25px;
    font-weight: 500;
    &:hover {
      cursor: pointer;
    }
    transition: all 0.3 ease;
  }

  input:checked + label {
    background-color: ${colors.pink};
    box-shadow: none;
  }
`;
export const SearchBar = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
  width: 774px;
  background-color: ${colors.grey[300]};
  border-radius: 25px;
  padding: 6px 14px;
  & input {
    font-family: Rubik;
    background-color: ${colors.grey[300]};
    width: 750px;
    border: none;
    font-size: 16px;
    &::placeholder {
      color: ${colors.grey[600]};
    }
    &:focus {
      outline: none;
    }
  }
`;

export const AddButton = styled(Link)`
  font-family: Rubik;
  font-weight: 500;
  color: #fff;
  background-color: ${colors.blue};
  border-radius: 25px;
  padding: 8px 40px;
  font-size: 14px;
`;
export const SelectButton = styled.button`
  font-family: Rubik;
  font-weight: 500;
  color: #fff;
  background-color: ${colors.grey[900]};
  border-radius: 25px;
  padding: 8px 40px;
  font-size: 14px;
`;
