import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import { useMutation, useQuery } from '@apollo/client';

import RecordForm from '@/components/record/RecordForm/RecordForm';
import { EDIT_RECORD } from '@/graphql/mutations/record';
import { GET_RECORD } from '@/graphql/queries';
import { startLoading, stopLoading } from '@/redux/propsSlice';
import { MainContainer } from '@/styles/styledComponents';

export default function EditRecord() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [recordData, setRecordData] = useState();
  const dispatch = useDispatch();

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

  useEffect(() => {
    if (loading) dispatch(startLoading());
    if (!loading) dispatch(stopLoading());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);

  const submitForm = (formData) => {
    editRecord({
      variables: { id, data: formData },
    });
  };

  return <MainContainer>{recordData && <RecordForm recordData={recordData} onSubmit={submitForm} />}</MainContainer>;
}
