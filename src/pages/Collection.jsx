import CollectionTable from 'components/collection/CollectionTable/CollectionTable';
import LogoMenu from 'components/collection/LogoMenu';
import Toolbar from 'components/collection/Toolbar/Toolbar';
import { GET_COLLECTION } from 'graphql/queries';
import { REMOVE_RECORD } from 'graphql/mutations/record';
import { useLazyQuery, useMutation } from '@apollo/client';
import { useState, useEffect } from 'react';
import { colors } from 'styles/theme';
import styled from 'styled-components';
import { filter as searchFilter } from 'smart-array-filter';
import { startLoading, stopLoading } from 'redux/propsSlice';
import { useDispatch } from 'react-redux';

const Content = styled.div`
  color: ${colors.grey[100]};
  padding: 20px 40px;
  height: 100%;
`;

export default function Collection() {
  const [collectionData, setCollectionData] = useState();
  const [filter, setFilter] = useState('all');

  const dispatch = useDispatch();

  const [getCollection, { loading, data }] = useLazyQuery(GET_COLLECTION, {
    fetchPolicy: 'cache-and-network',
    variables: { filter },
  });

  const fetchRecords = () => {
    getCollection().then((data) => setCollectionData(data.data.getCollection));
  };

  const [removeRecord] = useMutation(REMOVE_RECORD, {
    onCompleted() {
      fetchRecords();
    },
  });

  const onFilterChange = (status) => {
    setFilter(status);
  };

  const onSearchChange = (keyword) => {
    const filteredCollection = searchFilter(data.getCollection, {
      keywords: keyword,
      ignorePaths: ['img_uri', 'date_added', 'condition', 'status'],
    });
    setCollectionData(filteredCollection);
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
        onSearchChange={(event) => onSearchChange(event.target.value)}
      />
      {collectionData && (
        <CollectionTable records={collectionData} removeRecord={removeRecord} />
      )}
    </Content>
  );
}
