import axios from 'axios';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { colors, font } from 'styles/theme';
import { ThreeDots } from 'react-loader-spinner';

const ImportSection = styled.div`
  width: 250px;
  border: 2px dashed ${colors.grey[500]};
  border-radius: 10px;
  text-align: center;
  padding: 18px 0;
`;

const Title = styled.p`
  font-size: 14px;
  color: ${colors.grey[100]};
  font-weight: 500;
  margin-bottom: 18px;
`;

const FormGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
`;

const ReleaseInput = styled.input`
  width: 120px;
  font-size: 14px;
  border: 2px solid ${colors.grey[500]};
  border-radius: 5px;
  background-color: transparent;
  padding: 4px 12px;
  color: ${colors.grey[100]};
  caret-color: ${colors.yellow};
  &:focus {
    outline: none;
  }
`;

const ImportButton = styled.button`
  background-color: ${colors.pink};
  font-size: 12px;
  font-weight: 500;
  border-radius: 5px;
  color: ${colors.grey[100]};
  padding: 6px 10px;
  font-family: ${font};
  width: 60px;
  height: 28px;
  justify-content: center;
  align-items: center;
  display: flex;
`;

const Error = styled.div`
  color: ${colors.red};
  display: flex;
  justify-content: center;
  padding-top: 16px;
  font-size: 14px;
`;

export function DiscogsImport(props) {
  const { onImport } = props;
  const { register, handleSubmit, setValue } = useForm();
  const [loading, setLoading] = useState(false);
  const [importError, setImportError] = useState();

  const handleImport = (data) => {
    setImportError(null);
    setLoading(true);
    const myKey = 'RQjHhwSaMHxwGbPxJxXz';
    const mySecret = 'BIdsSStHDrPRlaWqpKiEeKTEkaHmSrwY';
    axios
      .get(
        `https://api.discogs.com/releases/${data.releaseId}?key=${myKey}&secret=${mySecret}`
      )
      .then((response) => {
        setLoading(false);
        const data = response.data;
        const recordData = {
          title: data.title,
          artist: data.artists.map((artist) => artist.name),
          label: [...new Set(data.labels.map((label) => label.name))],
          genre: data.genres,
          year: data.year,
          img_uri: data.images[0].uri,
        };
        onImport(recordData);
        setValue('releaseId', '');
      })
      .catch(() => {
        setLoading(false);
        setImportError('Release not found');
      });
  };

  return (
    <ImportSection>
      <Title>Import data from Discogs</Title>
      <form onSubmit={handleSubmit(handleImport)}>
        <FormGroup>
          <ReleaseInput
            placeholder='Realease ID'
            {...register('releaseId')}
            type='text'
            inputmode='numeric'
            data-test-id='release-input'
          />
          <ImportButton type='submit' data-test-id='import-button'>
            {loading ? (
              <ThreeDots width='16' height='16' color='white' />
            ) : (
              'Import'
            )}
          </ImportButton>
        </FormGroup>
      </form>
      {importError && <Error>{importError}</Error>}
    </ImportSection>
  );
}
