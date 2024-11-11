import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { filter as searchFilter } from 'smart-array-filter';
import styled from 'styled-components';

import { useLazyQuery, useMutation } from '@apollo/client';

import CollectionTable from '@/components/collection/CollectionTable/CollectionTable';
import LogoMenu from '@/components/collection/LogoMenu';
import Toolbar from '@/components/collection/Toolbar/Toolbar';
import { REMOVE_RECORD } from '@/graphql/mutations/record';
import { GET_COLLECTION } from '@/graphql/queries';
import { startLoading, stopLoading } from '@/redux/propsSlice';
import { colors } from '@/styles/theme';
import { FilterOptions } from '@/types';
import { Record } from '@/types';

const Content = styled.div`
  color: ${colors.grey[100]};
  padding: 20px 40px;
  height: 100%;
`;

export default function Collection() {
  const [collectionData, setCollectionData] = useState<Record[]>([]);
  const [filter, setFilter] = useState('all');

  const dispatch = useDispatch();

  const [getCollection, { loading, data }] = useLazyQuery(GET_COLLECTION, {
    fetchPolicy: 'cache-and-network',
    variables: { filter },
  });

  const fetchRecords = () => {
    getCollection().then((data) => setCollectionData(data.data.getCollection));
  };

  const [removeRecordMutation] = useMutation(REMOVE_RECORD, {
    onCompleted() {
      fetchRecords();
    },
  });

  const removeRecord = (id: string) => {
    removeRecordMutation({ variables: { id } });
  };

  const onFilterChange = (status: FilterOptions) => {
    setFilter(status);
  };

  const onSearchChange = (keyword: string) => {
    const filteredCollection = searchFilter(data.getCollection, {
      keywords: keyword,
      ignorePaths: ['img_uri', 'date_added', 'condition', 'status'],
    });
    setCollectionData(filteredCollection as Record[]);
  };

  useEffect(() => {
    fetchRecords();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getCollection, filter]);

  useEffect(() => {
    if (loading) dispatch(startLoading());
    if (!loading) dispatch(stopLoading());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);

  return (
    <Content>
      <LogoMenu />
      <Toolbar
        filter={filter}
        onFilterChange={onFilterChange}
        onSearchChange={(event: React.ChangeEvent<HTMLInputElement>) => onSearchChange(event.target.value)}
      />
      {collectionData && <CollectionTable records={collectionData} removeRecord={removeRecord} />}
    </Content>
  );
}
