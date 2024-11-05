import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import { useLazyQuery } from '@apollo/client';

import RecordDetails from '@/components/record/RecordDetails/RecordDetails';
import { GET_RECORD } from '@/graphql/queries';
import { startLoading, stopLoading } from '@/redux/propsSlice';

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export default function ViewRecord() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const [getRecord, { loading, data }] = useLazyQuery(GET_RECORD, {
    variables: { id },
  });

  useEffect(() => {
    getRecord();
  }, [getRecord]);

  useEffect(() => {
    if (loading) dispatch(startLoading());
    if (!loading) dispatch(stopLoading());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);

  return <Content>{data?.getRecord && <RecordDetails recordData={data.getRecord} />}</Content>;
}
