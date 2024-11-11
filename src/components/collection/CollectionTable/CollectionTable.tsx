import { IoDisc } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

import ItemMenu from '@/components/collection/CollectionTable/ItemMenu';
import { Record } from '@/types';
import { getCondition, getDate, getPrice } from '@/utils';

import StatusLabel from '../StatusLabel';
import { Artwork, NoDataWrap, TableItem, TableWrap } from './collectionTableStyles';

type CollectionTableProps = {
  records: Record[];
  removeRecord: (id: string) => void;
};

export default function CollectionTable({ records, removeRecord }: CollectionTableProps) {
  const navigate = useNavigate();

  const goToRecordDetails = (id: string) => {
    navigate(`/view/${id}`);
  };

  return (
    <TableWrap>
      {records.length > 0 ? (
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
                <TableItem key={item.id} onClick={() => goToRecordDetails(item.id)}>
                  <td>
                    <Artwork>{item.img_uri ? <img src={item.img_uri} alt="artwork" /> : <IoDisc size="36" />}</Artwork>
                  </td>
                  <td>{item.title}</td>
                  <td>{item.artist}</td>
                  <td>{item.label}</td>
                  <td>{item.year}</td>
                  <td>{item.genre}</td>
                  <td>{getCondition(item.condition)}</td>
                  <td>{getDate(item.date_added)}</td>
                  <td>{getPrice(item.price)}</td>
                  <td>
                    <StatusLabel status={item.status} />
                  </td>
                  <td>
                    <ItemMenu id={item.id} removeRecord={removeRecord} />
                  </td>
                </TableItem>
              ))}
          </tbody>
        </table>
      ) : (
        <NoDataWrap>
          <img src="noData.png" alt="no-data" /> <p>No data was found...</p>
        </NoDataWrap>
      )}
    </TableWrap>
  );
}
