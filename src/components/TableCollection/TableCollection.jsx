import './TableCollection.scoped.scss';
import { GET_COLLECTION } from '../../graphql/queries';
import { useQuery } from '@apollo/client';
import { IoEllipsisVertical } from 'react-icons/io5';

export default function TableCollection() {
  const { data } = useQuery(GET_COLLECTION);
  const allRecords = data?.getAllRecords;
  return (
    <div className='table-wrap'>
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
              <tr key={item.id} className='table-item'>
                <td>
                  <img className='artwork' src={item.img_uri} alt='artwork' />
                </td>
                <td>{item.title}</td>
                <td>{item.artist}</td>
                <td>{item.label}</td>
                <td>{item.year}</td>
                <td>{item.genre}</td>
                <td>{item.condition}</td>
                <td>{new Date(item.date_added).toLocaleDateString()}</td>
                <td>${item.price}</td>
                {item.status === 'sold' && (
                  <td>
                    <div className='sold label'> SOLD</div>
                  </td>
                )}
                {item.status === 'inStock' && (
                  <td>
                    <div className='instock label'>IN STOCK</div>
                  </td>
                )}
                <td>
                  <div className='dots'>
                    <IoEllipsisVertical />
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
