import {
  Card,
  Header,
  Form,
  FormGroup,
  FormGroupShort,
  Label,
  Input,
  Select,
  Artwork,
  LeftSection,
  RightSection,
  Container,
  Footer,
  SaveButton,
  CancelButton,
} from './RecordFormStyles';
import { DiscogsImport } from '../DiscogsImport';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import ArtworkButtons from './ArtworkButtons';

export default function RecordForm(props) {
  const { onSubmit } = props;
  const { register, handleSubmit, setValue } = useForm();
  const [imgUrl, setImgUrl] = useState('');

  const discogsImport = (data) => {
    data.artist = data.artist.join(', ');
    data.label = data.label.join(', ');
    data.genre = data.genre.join(', ');

    for (const [key, value] of Object.entries(data)) {
      setValue(key, value);
    }
    setImgUrl(data.img_uri);
  };

  const removeImage = () => {
    setImgUrl('');
  };

  return (
    <Card>
      <Header>New Record</Header>
      <Container>
        <LeftSection>
          <Artwork imgUrl={imgUrl}>
            <ArtworkButtons
              imageUploaded={imgUrl.length > 0}
              removeImage={removeImage}
            />
          </Artwork>
          <DiscogsImport onImport={discogsImport} />
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
      </Container>
      <Footer>
        <CancelButton to='/'>Cancel</CancelButton>
        <SaveButton form='record-form' type='submit'>
          Save
        </SaveButton>
      </Footer>
    </Card>
  );
}
