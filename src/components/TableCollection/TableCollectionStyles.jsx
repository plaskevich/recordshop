import styled from 'styled-components';
// import { Link } from 'react-router-dom';
import * as colors from '../../styles/colors';

export const TableWrap = styled.div`
  margin-top: 30px;
  padding: 0 20px;
  background-color: ${colors.grey[900]};
  border-radius: 25px;
  height: 88vh;
  overflow: scroll;
  table {
    width: 100%;
    color: $light;
    text-align: left;
    border-collapse: collapse;

    tbody {
      padding-left: 20px;
    }
    th {
      padding: 20px 15px;
      color: ${colors.grey[600]};
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

export const Artwork = styled.img`
  width: 36px;
  border-radius: 3px;
`;

export const SoldLabel = styled.div`
  background-color: ${colors.yellow};
  text-align: center;
  padding: 5px;
  border-radius: 50px;
  font-size: 11px;
  font-weight: bold;
  color: #000;
`;

export const StockLabel = styled.div`
  background-color: ${colors.green};
  text-align: center;
  padding: 5px;
  border-radius: 50px;
  font-size: 11px;
  font-weight: bold;
  color: #000;
`;

// .dots {
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   padding: 10px 2px;
//   border-radius: 5px;
//   transition: all 0.1s ease;
//   &:hover {
//     background-color: $btn-hover;
//   }
// }

// .dots-menu {
//   position: absolute;
//   background-color: $row;
//   display: flex;
//   flex-direction: column;
//   right: 90px;
//   padding: 10px;
//   border-radius: 10px;
// }

// .dots-item {
//   color: $light;
//   font-size: 14px;
//   padding: 1px;
// }
