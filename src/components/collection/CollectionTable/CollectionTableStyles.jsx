import styled from 'styled-components';
import { colors } from 'styles/theme';

export const TableWrap = styled.div`
  margin-top: 30px;
  padding: 16px;
  background-color: ${colors.grey[900]};
  border-radius: 25px;
  border: solid 1px ${colors.grey[800]};
  overflow: scroll;
  table {
    width: 100%;
    text-align: left;
    border-collapse: collapse;

    tbody {
      padding-left: 20px;
    }
    th {
      padding: 1rem;
      color: ${colors.grey[500]};
      font-size: 14px;
      font-weight: 500;
      position: sticky;
      top: 0;
      background-color: ${colors.grey[900]};
    }

    td {
      padding: 12px 10px;
      font-size: 15px;
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
  cursor: pointer;
  transition: all 0.1s ease;
  &:hover {
    background-color: ${colors.grey[800]};
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
  color: ${colors.grey[300]};
  padding: 4px;
  transition: all 0.1s ease-in;
  &:hover {
    transform: scale(1.3);
  }
`;
