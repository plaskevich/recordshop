import {
  Form,
  FormGroup,
  FormGroupShort,
  Label,
  Input,
  Select,
} from './RecordFormStyles';
import {
  Card,
  CardContainer,
  Header,
  Artwork,
  FillButton,
  LinkButton,
  LeftSection,
  RightSection,
  Footer,
} from 'styles/styledComponents';
import { DiscogsImport } from '../DiscogsImport';
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import ArtworkButtons from './ArtworkButtons';

export default function RecordForm(props) {
  const { onSubmit, recordData } = props;
  const { register, handleSubmit, setValue } = useForm();
  const [imgUrl, setImgUrl] = useState('');

  useEffect(() => {
    if (recordData) {
      onImport(recordData);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [recordData]);

  const onImport = (data) => {
    const recordData = { ...data };
    recordData.artist = recordData.artist.join(', ');
    recordData.label = recordData.label.join(', ');
    recordData.genre = recordData.genre.join(', ');

    for (const [key, value] of Object.entries(recordData)) {
      setValue(key, value);
    }
    setImgUrl(recordData.img_uri);
  };

  const removeImage = () => {
    setImgUrl('');
  };

  return (
    <Card>
      <Header>New Record</Header>
      <CardContainer>
        <LeftSection>
          <Artwork imgUrl={imgUrl}>
            <ArtworkButtons
              imageUploaded={imgUrl.length > 0}
              removeImage={removeImage}
            />
          </Artwork>
          <DiscogsImport onImport={onImport} />
        </LeftSection>
        <RightSection>
          <Form id='record-form' onSubmit={handleSubmit(onSubmit)}>
            <FormGroup>
              <Label htmlFor='title'>Title</Label>
              <Input {...register('title')} type='text' />
            </FormGroup>
            <FormGroup>
              <Label htmlFor='artist'>Artist</Label>
              <Input {...register('artist')} type='text' />
            </FormGroup>
            <FormGroup>
              <Label htmlFor='label'>Label</Label>
              <Input {...register('label')} type='text' />
            </FormGroup>
            <FormGroup>
              <Label htmlFor='genre'>Genre</Label>
              <Input {...register('genre')} type='text' />
            </FormGroup>
            <FormGroupShort>
              <Label htmlFor='released'>Released</Label>
              <Input {...register('year')} type='text' inputmode='numeric' />
            </FormGroupShort>
            <FormGroupShort>
              <Label htmlFor='condition'>Condition</Label>
              <Select {...register('condition')}>
                <option value='m'>Mint (M)</option>
                <option value='nm'>Near Mint (NM)</option>
                <option value='vg+'>Very Good Plus (VG+)</option>
                <option value='vg'>Very Good (VG)</option>
                <option value='g'>Good (G)</option>
                <option value='p'>Poor (P)</option>
              </Select>
            </FormGroupShort>
            <FormGroupShort>
              <Label htmlFor='price'>Price</Label>
              <Input {...register('price')} type='text' inputmode='numeric' />
            </FormGroupShort>
            <FormGroupShort>
              <Label htmlFor='status'>Status</Label>
              <Select {...register('status')}>
                <option value='inStock'>In Stock</option>
                <option value='sold'>Sold</option>
              </Select>
            </FormGroupShort>
          </Form>
        </RightSection>
      </CardContainer>
      <Footer>
        <LinkButton to='/'>Cancel</LinkButton>
        <FillButton form='record-form' type='submit'>
          Save
        </FillButton>
      </Footer>
    </Card>
  );
}
