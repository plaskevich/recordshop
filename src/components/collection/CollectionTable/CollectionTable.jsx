import { IoDisc } from 'react-icons/io5';
// import { Link } from 'react-router-dom';
import { TableWrap, TableItem, Artwork } from './CollectionTableStyles';
import StatusLabel from '../StatusLabel';
import DotsMenu from '../DotsMenu';
import { useNavigate } from 'react-router-dom';

export default function CollectionTable(props) {
  const { records } = props;
  const navigate = useNavigate();

  const getCondition = (condition) => {
    switch (condition) {
      case 'm':
        return 'Mint (M)';
      case 'nm':
        return 'Near Mint (NM)';
      case 'vg+':
        return 'Very Good+ (VG+)';
      case 'vg':
        return 'Very Good (VG)';
      case 'g':
        return 'Good (G)';
      case 'p':
        return 'Poor (P)';
      default:
        return '';
    }
  };

  const goToRecordDetails = (id) => {
    navigate(`view/${id}`);
  };

  return (
    <TableWrap>
      <table>
        <thead>
          <tr>
            <th />
            <th>Title</th>
            <th>Artist</th>
            <th>Label</th>
            <th>Released</th>
            <th>Genre</th>
            <th>Condition</th>
            <th>Date</th>
            <th>Price</th>
            <th>Status</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {records &&
            records.map((item) => (
              <TableItem
                key={item.id}
                onClick={() => goToRecordDetails(item.id)}
              >
                <td>
                  <Artwork>
                    {item.img_uri ? (
                      <img src={item.img_uri} alt='artwork' />
                    ) : (
                      <IoDisc size='36' />
                    )}
                  </Artwork>
                </td>
                <td>{item.title}</td>
                <td>{item.artist}</td>
                <td>{item.label}</td>
                <td>{item.year}</td>
                <td>{item.genre}</td>
                <td>{getCondition(item.condition)}</td>
                <td>{new Date(item.date_added).toLocaleDateString()}</td>
                {item.price ? <td>{item.price}€</td> : <td>-</td>}
                <td>
                  <StatusLabel status={item.status} />
                </td>
                <td>
                  <DotsMenu />
                </td>
              </TableItem>
            ))}
        </tbody>
      </table>
    </TableWrap>
  );
}
