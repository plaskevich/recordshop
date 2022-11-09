import { ADD_RECORD } from 'graphql/mutations/record';
import { useMutation } from '@apollo/client';
import { LoadingSpinner } from 'components/common/LoadingSpinner/LoadingSpinner';
import RecordForm from 'components/record/RecordForm/RecordForm';
import { useNavigate } from 'react-router-dom';
import { MainContainer } from 'styles/styledComponents';

export default function AddRecord() {
  const navigate = useNavigate();

  const [addRecord, { loading }] = useMutation(ADD_RECORD, {
    onCompleted() {
      navigate('/');
    },
  });

  const submitForm = (data) => {
    console.log(data);
    data.year = parseInt(data.year);
    addRecord({
      variables: { data },
    });
  };

  return (
    <MainContainer>
      {loading ? <LoadingSpinner /> : <RecordForm onSubmit={submitForm} />}
    </MainContainer>
  );
}
