import { EDIT_RECORD } from 'graphql/mutations/record';
import { GET_RECORD } from 'graphql/queries';
import { useMutation, useQuery } from '@apollo/client';
import { LoadingSpinner } from 'components/common/LoadingSpinner/LoadingSpinner';
import RecordForm from 'components/record/RecordForm/RecordForm';
import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { MainContainer } from 'styles/styledComponents';

export default function EditRecord() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [recordData, setRecordData] = useState();

  const [editRecord, { loading }] = useMutation(EDIT_RECORD, {
    onCompleted() {
      navigate('/');
    },
  });

  const { data } = useQuery(GET_RECORD, {
    variables: { id },
  });

  useEffect(() => {
    if (data?.getRecord) {
      const { __typename, id, date_added, ...recordData } = data.getRecord;
      setRecordData(recordData);
    }
  }, [data]);

  const submitForm = (formData) => {
    editRecord({
      variables: { id, data: formData },
    });
  };

  return (
    <MainContainer>
      {loading && <LoadingSpinner />}
      {recordData && (
        <RecordForm recordData={recordData} onSubmit={submitForm} />
      )}
    </MainContainer>
  );
}
