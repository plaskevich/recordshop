import Header from '../../components/Header/Header';
import RecordForm from '../../components/RecordForm/RecordForm';
import './AddRecord.scoped.scss';

export default function AddRecord() {
  return (
    <div>
      <Header title='Add Record' />
      <RecordForm />
    </div>
  );
}
