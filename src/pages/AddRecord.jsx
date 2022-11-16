import { ADD_RECORD } from 'graphql/mutations/record';
import { useMutation } from '@apollo/client';
import RecordForm from 'components/record/RecordForm/RecordForm';
import { useNavigate } from 'react-router-dom';
import { MainContainer } from 'styles/styledComponents';
import { useEffect } from 'react';
import { startLoading, stopLoading } from 'redux/propsSlice';
import { useDispatch } from 'react-redux';

export default function AddRecord() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [addRecord, { loading }] = useMutation(ADD_RECORD, {
    onCompleted() {
      navigate('/');
    },
  });

  useEffect(() => {
    if (loading) dispatch(startLoading());
    if (!loading) dispatch(stopLoading());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);

  const submitForm = (data) => {
    data.year = parseInt(data.year);
    addRecord({
      variables: { data },
    });
  };

  return (
    <MainContainer>
      <RecordForm onSubmit={submitForm} />
    </MainContainer>
  );
}
