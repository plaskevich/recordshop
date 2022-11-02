import { ADD_RECORD } from 'graphql/mutations/record';
import { useMutation } from '@apollo/client';
import { LoadingSpinner } from 'components/common/LoadingSpinner/LoadingSpinner';
import RecordForm from 'components/record/RecordForm/RecordForm';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export default function AddRecord() {
  const navigate = useNavigate();

  const [addRecord, { loading }] = useMutation(ADD_RECORD, {
    onCompleted() {
      navigate('/');
    },
  });

  const submitForm = (data) => {
    data.year = parseInt(data.year);
    addRecord({
      variables: { data },
    });
  };

  return (
    <Content>
      {loading ? <LoadingSpinner /> : <RecordForm onSubmit={submitForm} />}
    </Content>
  );
}
