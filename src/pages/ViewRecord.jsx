import { useEffect } from 'react';
import { GET_RECORD } from 'graphql/queries';
import { useLazyQuery } from '@apollo/client';
import { LoadingSpinner } from 'components/common/LoadingSpinner/LoadingSpinner';
import RecordDetails from 'components/record/RecordDetails/RecordDetails';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export default function ViewRecord() {
  const { id } = useParams();

  const [getRecord, { loading, data }] = useLazyQuery(GET_RECORD, {
    variables: { id },
  });

  useEffect(() => {
    getRecord();
  }, [getRecord]);

  return (
    <Content>
      {loading | !data && <LoadingSpinner />}
      {data?.getRecord && <RecordDetails recordData={data.getRecord} />}
    </Content>
  );
}
