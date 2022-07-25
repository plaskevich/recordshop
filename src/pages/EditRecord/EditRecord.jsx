import Header from '../../components/Header/Header';
import RecordForm from '../../components/RecordForm/RecordForm';
// import { useParams } from 'react-router-dom';

export default function EditRecord() {
  // let { id } = useParams();
  return (
    <div>
      <Header title='Edit Record' />
      <RecordForm />
    </div>
  );
}
