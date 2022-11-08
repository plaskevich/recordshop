import CollectionTable from 'components/collection/CollectionTable/CollectionTable';
import LogoMenu from 'components/collection/LogoMenu';
import Toolbar from 'components/collection/Toolbar/Toolbar';
import { GET_COLLECTION } from 'graphql/queries';
import { REMOVE_RECORD } from 'graphql/mutations/record';
import { useLazyQuery, useMutation } from '@apollo/client';
import { useState, useEffect } from 'react';
import { colors } from 'styles/theme';
import { LoadingSpinner } from 'components/common/LoadingSpinner/LoadingSpinner';
import styled from 'styled-components';

const Content = styled.div`
  color: ${colors.grey[300]};
  padding: 20px 40px;
  height: 100%;
`;

export default function Collection() {
  const [filter, setFilter] = useState('all');

  const [getCollection, { loading, data }] = useLazyQuery(GET_COLLECTION, {
    fetchPolicy: 'cache-and-network',
    variables: { filter },
  });
  const [removeRecord] = useMutation(REMOVE_RECORD, {
    onCompleted() {
      getCollection();
    },
  });

  const onFilterChange = (status) => {
    setFilter(status);
  };

  useEffect(() => {
    getCollection();
  }, [getCollection]);

  return (
    <Content>
      <LogoMenu />
      <Toolbar filter={filter} onFilterChange={onFilterChange} />
      {loading ? (
        <LoadingSpinner />
      ) : (
        <CollectionTable
          records={data?.getCollection}
          removeRecord={removeRecord}
        />
      )}
    </Content>
  );
}
