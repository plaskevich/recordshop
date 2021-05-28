import './Collection.scoped.scss';
import Header from '../../Header/Header';
import TopBar from '../../TopBar/TopBar';
import TableCollection from '../../TableCollection/TableCollection';

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
