import Header from '../../components/Header/Header';
import TopBar from '../../components/TopBar/TopBar';
import TableCollection from '../../components/TableCollection/TableCollection';

export default function Collection() {
  return (
    <div>
      <Header title='Collection' />
      <TopBar />
      <hr />
      <div className='table-content'>
        <TableCollection />
      </div>
    </div>
  );
}
