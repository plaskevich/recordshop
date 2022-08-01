import { GET_COLLECTION } from '../../graphql/queries';
import { useQuery } from '@apollo/client';
import { IoEllipsisVertical, IoDisc } from 'react-icons/io5';
// import { Link } from 'react-router-dom';
import {
  TableWrap,
  TableItem,
  Artwork,
  SoldLabel,
  StockLabel,
} from './TableCollectionStyles';

export default function TableCollection() {
  const { data } = useQuery(GET_COLLECTION);
  const allRecords = data?.getAllRecords;
  return (
    <TableWrap>
      <table>
        <thead>
          <tr>
            <th />
            <th>Title</th>
            <th>Artist</th>
            <th>Label</th>
            <th>Year</th>
            <th>Genre</th>
            <th>Condition</th>
            <th>Date</th>
            <th>Price</th>
            <th>Status</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {allRecords &&
            allRecords.map((item) => (
              <TableItem key={item.id}>
                <td>
                  {item.img_uri ? (
                    <Artwork src={item.img_uri} alt='artwork' />
                  ) : (
                    <IoDisc size='2.5em' />
                  )}
                </td>
                <td>{item.title}</td>
                <td>{item.artist}</td>
                <td>{item.label}</td>
                <td>{item.year}</td>
                <td>{item.genre}</td>
                <td>{item.condition}</td>
                <td>{new Date(item.date_added).toLocaleDateString()}</td>
                {item.price ? <td>${item.price}</td> : <td>-</td>}
                {item.status === 'sold' && (
                  <td>
                    <SoldLabel>SOLD</SoldLabel>
                  </td>
                )}
                {item.status === 'inStock' && (
                  <td>
                    <StockLabel>IN STOCK</StockLabel>
                  </td>
                )}
                <td>
                  {/* <div className='dots-menu'>
                    <Link className='dots-item' to='/'>
                      Edit
                    </Link>
                    <button className='dots-item'>Set Sold</button>
                    <button className='dots-item'>Remove</button>
                  </div> */}
                  <div className='dots'>
                    <IoEllipsisVertical />
                  </div>
                </td>
              </TableItem>
            ))}
        </tbody>
      </table>
    </TableWrap>
  );
}
