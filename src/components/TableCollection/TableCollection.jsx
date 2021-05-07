import './TableCollection.scoped.scss';
import { GET_COLLECTION } from '../../graphql/queries';
import { useQuery } from '@apollo/client';
import { IoEllipsisVertical } from 'react-icons/io5';

export default function TableCollection() {
  const { data } = useQuery(GET_COLLECTION);
  const allRecords = data?.getAllRecords;
  console.log(allRecords);
  return (
    <div className='table-wrap'>
      {allRecords && (
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
              <th />
            </tr>
          </thead>
          <tbody>
            {allRecords.map((item) => (
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
                <td>{item.price}</td>
                <td>
                  <IoEllipsisVertical />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
