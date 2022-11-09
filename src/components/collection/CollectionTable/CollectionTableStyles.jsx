import styled from 'styled-components';
import { colors } from 'styles/theme';

export const TableWrap = styled.div`
  padding: 16px;
  background-color: ${colors.grey[900]};
  border-radius: 25px;
  border: solid 1px ${colors.grey[700]};
  overflow: scroll;
  tr {
    /* border-bottom: 1px solid ${colors.grey[700]}; */
  }
  table {
    width: 100%;
    text-align: left;
    border-collapse: collapse;
    th {
      padding: 12px 10px;
      color: ${colors.grey[300]};
      font-size: 14px;
      font-weight: 500;
      position: sticky;
      top: 0;
      background-color: ${colors.grey[900]};
    }

    td {
      padding: 12px 10px;
      font-size: 1rem;
      font-weight: 400;
      max-width: 250px;
      img {
        display: block;
        margin-left: auto;
        margin-right: auto;
      }
    }

    td:first-child {
      border-radius: 15px 0 0 15px;
    }
    td:last-child {
      border-radius: 0 15px 15px 0;
    }
  }
`;

export const TableItem = styled.tr`
  border: none !important;
  cursor: pointer;
  transition: all 0.1s ease;
  &:hover {
    background-color: ${colors.grey[700]};
  }
`;

export const Artwork = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 36px;
    border-radius: 3px;
  }
`;

export const MenuButton = styled.button`
  background-color: transparent;
  display: flex;
  color: ${colors.grey[100]};
  padding: 4px;
  transition: all 0.1s ease-in;
  transform: ${(props) => (props.open ? 'scale(1.3)' : 'scale(1)')};
  &:hover {
    transform: scale(1.3);
  }
`;
