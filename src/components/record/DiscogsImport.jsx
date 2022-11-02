import axios from 'axios';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { colors, font } from 'styles/theme';

export const ImportSection = styled.div`
  width: 250px;
  border: 2px dashed ${colors.grey[600]};
  border-radius: 10px;
  text-align: center;
  padding: 15px 0;
`;

export const Title = styled.p`
  font-size: 14px;
  color: ${colors.grey[300]};
  font-weight: 500;
  margin-bottom: 14px;
`;

export const ReleaseInput = styled.input`
  width: 100px;
  font-size: 14px;
  border: 2px solid ${colors.grey[600]};
  border-radius: 25px;
  background-color: transparent;
  padding: 6px 12px;
  margin-right: 10px;
  color: ${colors.white};
  caret-color: ${colors.yellow};
  &:focus {
    /* border-color: ${colors.pink}; */
    outline: none;
  }
`;

export const ImportButton = styled.button`
  background-color: ${colors.pink};
  font-size: 14px;
  font-weight: 500;
  border-radius: 25px;
  color: ${colors.white};
  padding: 8px 20px;
  font-family: ${font};
`;

export function DiscogsImport(props) {
  const { onImport } = props;
  const { register, handleSubmit, setValue } = useForm();

  const handleImport = (data) => {
    const myKey = 'RQjHhwSaMHxwGbPxJxXz';
    const mySecret = 'BIdsSStHDrPRlaWqpKiEeKTEkaHmSrwY';
    axios
      .get(
        `https://api.discogs.com/releases/${data.releaseId}?key=${myKey}&secret=${mySecret}`
      )
      .then((response) => {
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
      });
    // .catch(() => setDiscogsError("This release couldn't be found"));
  };

  return (
    <ImportSection>
      <Title>Import data from Discogs</Title>
      <form onSubmit={handleSubmit(handleImport)}>
        <ReleaseInput
          placeholder='Realease ID'
          {...register('releaseId')}
          type='text'
          inputmode='numeric'
        />
        <ImportButton type='submit'>Import</ImportButton>
      </form>
    </ImportSection>
  );
}
