import Header from '../../Header/Header';
import RecordForm from '../../RecordForm/RecordForm';
import './AddRecord.scoped.scss';

export default function AddRecord() {
  return (
    <div>
      <Header title='Add Record' />
      <RecordForm />
    </div>
  );
}
