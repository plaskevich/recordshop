import { IoCreate, IoDisc, IoEllipsisHorizontal, IoTrash } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

import { MenuItem } from '@szhsin/react-menu';

import { Menu } from '@/styles/styledComponents';
import { getCondition, getDate, getPrice } from '@/utils';

import StatusLabel from '../StatusLabel';
import { Artwork, MenuButton, NoDataWrap, TableItem, TableWrap } from './CollectionTableStyles';

export default function CollectionTable(props) {
  const { records, removeRecord } = props;
  const navigate = useNavigate();

  const handleRemoveRecord = (id) => {
    removeRecord({
      variables: { id },
    });
  };

  const goToRecordDetails = (id) => {
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
                <TableItem key={item.id}>
                  <td onClick={() => goToRecordDetails(item.id)}>
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
                    <Menu
                      direction="bottom"
                      align="end"
                      offsetY={6}
                      menuButton={({ open }) => (
                        <MenuButton open={open} data-test-id="menu-button">
                          <IoEllipsisHorizontal size="18px" />
                        </MenuButton>
                      )}
                      transition
                    >
                      <MenuItem onClick={() => navigate(`/edit/${item.id}`)}>
                        <IoCreate />
                        Edit
                      </MenuItem>
                      <MenuItem onClick={() => handleRemoveRecord(item.id)} data-test-id="remove-button">
                        <IoTrash />
                        Remove
                      </MenuItem>
                    </Menu>
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
